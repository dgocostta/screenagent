# Spec: ScreenAgent Phase 1 - Data Migration & Core Console

## 1. Overview
Build the foundation of the ScreenAgent platform: a multi-tenant system that migrates "MR Screen" from legacy platforms (eBay, Adverts.ie) to a centralized, AI-ready dashboard.

## 2. Core Components

### A. The Scraper (Data Migration Engine)
- **Target Sources:**
    - eBay Store: mrscreen123
    - Adverts.ie: Member 1327089
- **Data to Extract:**
    - Title, Description, Price, Images (Full Migration to Firebase Storage).
    - Reviews/Ratings (to build trust in the AI Agent).
    - Stock status.
- **De-duplication:** Logic to merge identical products across platforms into a single "Master Product" in our system.

### B. Multi-Tenant Data Model (Firebase)
- **Business Level:**
    - `client_id`: `mr-screen`
    - Branding: Orange/Charcoal.
    - Locations: 3 Warehouses (Dublin, etc.).
- **Product Level:**
    - Reference to business.
    - Global attributes (Title, Specs).
    - Location-specific inventory (Qty in Warehouse A, B, C).

### C. The Admin Console (Next.js)
- **Theme:** Ultra-sleek dark mode.
- **Product Management:**
    - Grid/Table view of all scraped items.
    - Toggle: "Live for AI Agent" vs "Archived".
    - Edit: Pricing, Manual stock adjustments.
- **Preview Tool:** View how each product looks to the AI Agent.

## 3. Success Criteria for Monday
1. Andrew's actual eBay/Adverts inventory is visible in a dashboard.
2. Images are hosted on our own infrastructure.
3. The dashboard looks "Exactly like the mockup" (Dark mode, professional).

## 4. Implementation Plan
- Step 1: Initialize Next.js project with Firebase.
- Step 2: Write Scraper for eBay & Adverts.
- Step 3: Seed Firebase Database with scraped data.
- Step 4: Build Dashboard UI (Product Catalog).