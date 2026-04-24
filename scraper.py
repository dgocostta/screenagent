import subprocess
import json
import time

def run_cmd(cmd):
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    return result.stdout

def clean_json(raw):
    raw = raw.strip()
    if raw.startswith('"') and raw.endswith('"'):
        return json.loads(raw)
    return raw

def scrape_ebay():
    print("Scraping eBay...")
    url = "https://www.ebay.ie/sch/i.html?_ssn=mrscreen123"
    run_cmd(f'agent-browser open "{url}"')
    time.sleep(5)
    
    script = """
    JSON.stringify(Array.from(document.querySelectorAll('.s-item__wrapper')).map(item => {
        const titleEl = item.querySelector('.s-item__title span[role="heading"]') || item.querySelector('.s-item__title');
        const title = titleEl?.innerText.replace(/\\nOpens in a new window or tab/g, '');
        const price = item.querySelector('.s-item__price')?.innerText;
        const link = item.querySelector('.s-item__link')?.href;
        const image = item.querySelector('.s-item__image-img')?.src;
        return { title, price, link, image, platform: 'eBay' };
    }).filter(i => i.title && !i.title.includes('Shop on eBay')))
    """
    
    raw = run_cmd(f"agent-browser eval '{script}'")
    try:
        items = json.loads(clean_json(raw))
        return items
    except:
        return []

def scrape_adverts():
    print("Scraping Adverts.ie...")
    url = "https://touch.adverts.ie/member/1327089"
    run_cmd(f'agent-browser open "{url}"')
    time.sleep(5)
    
    script = """
    JSON.stringify(Array.from(document.querySelectorAll('.ad-card')).map(item => {
        const title = item.querySelector('.title')?.innerText;
        const price = item.querySelector('.price')?.innerText;
        const link = item.querySelector('a')?.href;
        const image = item.querySelector('img')?.src;
        return { title, price, link, image, platform: 'Adverts.ie' };
    }))
    """
    
    raw = run_cmd(f"agent-browser eval '{script}'")
    try:
        items = json.loads(clean_json(raw))
        return items
    except:
        return []

if __name__ == "__main__":
    ebay = scrape_ebay()
    adverts = scrape_adverts()
    
    with open('products_data.json', 'w') as f:
        json.dump({"ebay": ebay, "adverts": adverts}, f, indent=2)
    
    print(f"Scraped {len(ebay)} from eBay and {len(adverts)} from Adverts.ie")