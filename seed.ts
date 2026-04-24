import { db } from "./src/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import * as fs from 'fs';

async function seed() {
  try {
    const data = JSON.parse(fs.readFileSync('products_data.json', 'utf8'));
    const products = [...data.ebay, ...data.adverts];
    
    console.log(`Seeding ${products.length} products...`);
    
    for (const product of products) {
      await addDoc(collection(db, "products"), {
        ...product,
        client_id: "mr-screen",
        status: "Live",
        warehouses: {
          dublin: Math.floor(Math.random() * 10),
          athlone: Math.floor(Math.random() * 5),
          cork: Math.floor(Math.random() * 3)
        },
        createdAt: serverTimestamp()
      });
    }
    
    console.log("Seeding complete!");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}

seed();