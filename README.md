# QA Engineer Assessment – Automation & AI (Cypress Solution)

This repo contains a complete Cypress setup and tests that cover:
1) Homepage title check  
2) Navigation to **Work** page and assertion for **"Our Work"**  
3) Contact page form fill (no submission)  
4) **Bonus:** Responsive check for a mobile viewport and presence of a hamburger menu

## Quick Start
```bash
npm install
npm run cy:open     # Interactive Test Runner
# or
npm run cy:run      # Headless
```

> Base URL is configured as `https://www.eight25media.com` in `cypress.config.js`.

---

## Test Files
- `cypress/e2e/home.cy.js` – Visits the homepage and asserts the title contains "eight25".  
- `cypress/e2e/navigation.cy.js` – Clicks **Work** in the header and verifies the Work page has "Our Work".  
- `cypress/e2e/contact_form.cy.js` – Navigates to Contact and fills name/email/message using resilient selectors.  
- `cypress/e2e/responsive.cy.js` – Sets viewport to **375x667** and checks a hamburger-style control is visible.

### Notes on Selector Resilience
- The tests prefer semantic cues (`aria-label`, visible text) and use tolerant regex matches to reduce brittleness.  
- The contact test tries multiple common selectors for each field and fails fast with a clear error if none match.  
- The responsive test includes a fallback that still validates the header if a hamburger button cannot be uniquely identified.

---

## Section 3 – Low-Code / AI Automation (How I’d do it)
Below is a step-by-step plan using **Mabl** (concepts transfer to Testim or Katalon):

1. **Create an Application & Environment**
   - Add `https://www.eight25media.com` as the base URL and define an environment (e.g., `prod`).

2. **Record the Flow**
   - Start a new journey: `Homepage → Work → Contact`.
   - Step 1: Navigate to `/` and add an assertion on page title containing `eight25`.
   - Step 2: Click the **Work** header item by its visible text. Add a check for URL contains `/work` and page contains **"Our Work"**.
   - Step 3: Navigate to **Contact** (via header or direct link). Record filling fields:
     - Name = `Test User`
     - Email = `testuser@example.com`
     - Message = `This is a test message`
   - Add assertions that each field value equals the sample data. (Avoid submit to prevent sending real messages.)

3. **Stabilize with AI & Heuristics**
   - Enable auto-healing selectors so the tool falls back to text/attributes if CSS changes.
   - Parameterize common waits via **smart waits** so navigation and dynamic content are fully loaded before assertions.
   - Use environment variables or data tables for test data.

4. **Make it Reusable & Maintainable**
   - Convert the recorded steps into **reusable components** (e.g., `goToWorkPage`, `fillContactForm`).
   - Create a mobile variant of the homepage journey using a **mobile viewport** (375x667) and assert a **hamburger** toggle appears.

5. **CI Integration**
   - Hook the plan into your CI (GitHub Actions) with environment secrets and have Mabl run smoke tests on every deploy.

---

## Section 4 – AI in QA (4–6 sentences)
AI-driven test automation will reduce test maintenance by auto-healing selectors and learning stable locators from page structure and usage patterns. 
It will accelerate authoring through natural-language test creation (e.g., “Go to homepage, open Work, verify ‘Our Work’ is visible”), generating runnable tests and data on the fly. 
Generative models will synthesize realistic edge-case data and simulate varied user behaviors, improving coverage and catching issues before users do. 
In CI, AI will prioritize and shard test suites based on code diffs and historical flake/impact, giving faster feedback with fewer false alarms. 
Combined with analytics on crash traces and UX signals, AI will guide teams to the highest-risk areas, turning QA into a proactive, insight-driven practice.

---

## Submission
- Share this folder as a GitHub repo or zip.
- Be ready to demo: run `npm run cy:open`, tweak an assertion, and re-run.
