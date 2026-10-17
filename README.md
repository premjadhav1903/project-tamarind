# Tamarind — Premium Tamarind Ingredients

A responsive, premium-style starter website for a planned tamarind processing business serving both B2B buyers and retail customers.

> **Pre-launch concept:** The brand name, product range, facility, certifications, capacity, and claims in this repository are placeholders until verified. Do not present planned operations as currently available.

## Features

- Responsive landing page with forest-green, ivory, and tamarind-brown visual identity
- Product overview and process section
- Separate pathways for retail customers and bulk/B2B buyers
- Wholesale enquiry form with basic client-side validation
- Mobile navigation and smooth scrolling
- Contact section and editable business details
- No framework or build step required

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a browser.

For a local development server, open the project folder in VS Code and run:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Files

- `index.html` — page structure and content
- `styles.css` — responsive styling and visual design
- `script.js` — navigation, form validation, and interaction
- `README.md` — project notes and setup instructions

## Before publishing

1. Replace the working brand name and all placeholder contact details.
2. Use authentic product, facility, and packaging photographs that you have permission to use.
3. Connect the enquiry form to a secure backend or form service. At present, it validates the fields in the browser but does not send or store enquiries.
4. Add real product specifications, ingredient statements, pack sizes, shelf-life information, and storage instructions only after they are confirmed.
5. Verify applicable FSSAI licensing, food labelling, advertising claims, privacy, terms, and other legal requirements before commercial sale.
6. Add a privacy notice before collecting and processing personal information.
7. Test accessibility, mobile layouts, links, and performance.

## Suggested next steps

- Add a database-backed enquiry dashboard.
- Add product detail pages and downloadable technical data sheets.
- Add an e-commerce flow only after products, fulfilment, pricing, and compliance are ready.
- Configure a custom domain and hosting.

## Technology

Plain HTML, CSS, and JavaScript. This keeps the first version easy to run and change; a framework can be introduced later if the project needs it.
