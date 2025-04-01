# Omnira QA Showcase 🚀
![Cypress Tests](https://github.com/Ivanhoe1970/omnira-qa-showcase/actions/workflows/cypress.yml/badge.svg)

This is a QA automation showcase project inspired by the real-world functionality of **Omnira ASSET PLANNER™**.

It simulates a capital planning task scheduler, including a React frontend, a mock Node API, and Cypress tests — all integrated with GitHub Actions CI.

---

## 🧩 Features

- React UI for adding and displaying scheduled tasks  
- Node + Express mock API with validation logic  
- Cypress tests for:  
  - Task creation  
  - Form validation  
  - Multiple task display  
- GitHub Actions CI integration (runs on every push!)

---

## 💡 Why I Built This

As part of my application to **Omnira Software**, I wanted to create a small-scale QA simulation that reflects:

- Interdependent logic and constraints (like real-world planning tools)  
- Test automation coverage of core workflows  
- CI pipeline confidence for fast feedback

---

## 🛠️ Stack

- React  
- Node.js (Express)  
- Cypress  
- GitHub Actions

---

## ▶️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/Ivanhoe1970/omnira-qa-showcase.git
cd omnira-qa-showcase
```

### 2. Run the App Locally

```bash
npm install
npm start
```

The app will be available at:

http://localhost:3000 – React UI
http://localhost:4000 – Mock API server


🧪 Test Coverage
This project includes Cypress E2E tests covering:

✅ Task creation flow
✅ Validation error handling
✅ Multiple task display

All tests pass in both local runs and GitHub Actions CI ✅

🧱 How I Built This (Commit Highlights)
A short log of key steps that brought this QA showcase to life:

Initial Setup – Created React frontend + Express mock API

Form & API Integration – Built dynamic task entry with cost validation

Cypress Setup – Wrote end-to-end tests for task creation + error handling

CI/CD Pipeline – Configured GitHub Actions to run tests on every push

Bug Fixes & Port Cleanup – Resolved port conflicts and .gitignore misplacement

Badge + README Polish – Added test status badge and project overview

Test Passed 🎉 – Confirmed local + cloud tests are fully green