# Vasudev Textile - Tally Prime Accounting Tutorial Website

## Current State
The project currently has a generic business website with Hero, Services, About, and Contact sections — completely unrelated to the user's request.

## Requested Changes (Diff)

### Add
- Full Tally Prime tutorial website for Vasudev Textile (cotton printed sarees, Jetpur, Gujarat)
- Sidebar navigation covering all 12 tutorial sections
- Section 1: Create Company in Tally Prime — step-by-step with company details (Vasudev Textile, Triveni Print, Dhoraji Road, Jetpur, Rajkot, Gujarat, India)
- Section 2: GST Setup — GSTIN creation, GST configuration, usage details
- Section 3: Business Overview — Jetpur textile market, cotton printed sarees manufacturing
- Section 4: Monthly Journal Entries — 60 entries per month template across 12 months (purchase, sales, expenses, payroll, depreciation, GST adjustments, etc.)
- Section 5: Ledger Creation — full list of all ledgers (assets, liabilities, capital, income, expense groups)
- Section 6: GST Rate & HSN Code Setup — step-by-step configuration with HSN 5208/5209 for cotton sarees
- Section 7: Stock / Raw Materials — cotton yarn, dye, chemicals, finished sarees stock groups and items
- Section 8: Manufacturing Auto Adjustment — Bill of Materials, raw material consumption, finished goods creation step-by-step
- Section 9: GST Return Filing — GSTR-1, GSTR-3B form creation step-by-step in Tally Prime
- Section 10: Year-End Audit — closing entries, audit trail, depreciation, trial balance, P&L, balance sheet
- Section 11: All Types of Adjustments — journal adjustments, department (cost centre), branch, contra, debit/credit notes
- Section 12: Sales & Purchase Bills — detailed bill entry with city, distance, bill no., party details, GST, transport

### Modify
- Replace App.tsx and all section components entirely
- Replace index.css with tutorial-appropriate styles
- Update page title to "Vasudev Textile - Tally Prime Guide"

### Remove
- HeroSection.tsx, ServicesSection.tsx, AboutSection.tsx, ContactSection.tsx, FooterSection.tsx, Header.tsx
- Generic hero and services imagery

## Implementation Plan
1. Replace App.tsx with a layout: sidebar navigation + main content area
2. Create TutorialSidebar component with 12 sections, collapsible sub-steps
3. Create one component per section (12 components) with full detailed content:
   - Step-by-step numbered instructions
   - Tables for entries, ledgers, stock items, HSN codes
   - Sample data specific to Vasudev Textile
   - Tally Prime menu path callouts (e.g. Gateway of Tally > Accounts Info > Ledgers)
4. Add search/filter within sections
5. Add print-friendly styles for each section
6. Ensure responsive layout (sidebar collapses on mobile)
