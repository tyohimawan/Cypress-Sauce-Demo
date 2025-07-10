# Cypress-Sauce-Demo

A demo project for end-to-end testing of https://www.saucedemo.com/ using Cypress, Page Object Model (POM), and data-driven testing.

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/tyohimawan/Cypress-Sauce-Demo.git
cd Cypress-Sauce-Demo
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Cypress Tests
- To open the Cypress Test Runner (GUI):
  ```bash
  npx cypress open
  ```
- To run tests in headless mode:
  ```bash
  npx cypress run
  ```

## 📁 Project Structure

```
Cypress-Sauce-Demo/
│
├── cypress/
│   ├── e2e/
│   │   └── login/
│   │       └── login.cy.js         # Data-driven login test
│   ├── fixtures/
│   │   └── loginData.json          # Test data for login
│   ├── support/
│   │   ├── elements/
│   │   │   └── loginPage.json      # Selectors for LoginPage
│   │   ├── pageObject/
│   │   │   ├── BasePage.js         # Base class for page objects
│   │   │   └── LoginPage.js        # Login page object
│   │   ├── baseTest.js             # Global hooks and custom commands
│   │   └── e2e.js                  # Cypress support file (imports plugins, hooks)
│   └── downloads/                  # (Optional) Downloaded files
│
├── .env                            # Environment variables for Cypress
├── cypress.config.js               # Cypress configuration
├── package.json                    # Project dependencies and scripts
├── README.md                       # This file
└── ...
```

## 🧩 Features
- Page Object Model (POM) structure
- Data-driven testing using fixtures
- Custom commands and global hooks
- XPath selectors for robust element targeting
- Mochawesome reporting

## 📝 Notes
- Update `.env` with your environment variables as needed.
- All selectors are managed in `cypress/support/elements/` for easy maintenance.
- Add more page objects and tests as your project grows.

---
Happy Testing!