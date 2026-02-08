<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

# 🥑 Bocado IA: Intelligent Culinary Architecture

![Python](https://img.shields.io/badge/Python-3.9+-blue?style=for-the-badge&logo=python&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-Serverless-orange?style=for-the-badge&logo=firebase&logoColor=white)
![n8n](https://img.shields.io/badge/n8n-Workflow_Automation-ff6f61?style=for-the-badge&logo=n8n&logoColor=white)
![Gemini](https://img.shields.io/badge/AI-Gemini_Pro-8E75B2?style=for-the-badge&logo=google&logoColor=white)
![Data Governance](https://img.shields.io/badge/Security-Row_Level_Security-green?style=for-the-badge)

**Transforming the daily question *"What should I eat?"* into data-driven nutritional intelligence.**

[View App in Google AI Studio](https://ai.studio/apps/drive/1PDzkdQScXqeCweerm2OXxRQi43_Qb7X1)

</div>

---

## 📖 About The Project

**Bocado IA** is not just a recipe app; it is an **End-to-End Data Architecture** designed to solve household food waste and decision fatigue. 

By leveraging **Generative AI (Google Gemini)** and a robust **ETL pipeline**, the system analyzes user inventory, applies clinical filters (e.g., Celiac, Diabetic friendly), and generates personalized, safe, and traceable meal recommendations.

### 🚀 Key Features
* **Inventory Optimization:** Scans and manages pantry items to reduce waste.
* **Medical-Grade Filtering:** Recommendations respect strict dietary restrictions (Celiac, Sodium, IG) validated via our "Source of Truth" database.
* **RAG Pipeline:** Uses Retrieval-Augmented Generation to ground AI responses in real inventory data, minimizing hallucinations.
* **Privacy by Design:** Full data isolation using Row-Level Security (RLS).

---

## 🏗️ Technical Architecture

This project demonstrates a full data lifecycle implementation:

1.  **Data Ingestion (ETL):** Custom **Python (Pandas)** scripts normalize raw data from FAO/USDA and generate **Synthetic Data** to cover information gaps.
2.  **Storage:** * **Airtable/PostgreSQL:** Acts as the *Single Source of Truth* for nutritional metadata.
    * **Firestore:** NoSQL database for real-time user inventory and app state.
3.  **Orchestration:** **n8n** workflows handle the business logic, connecting the database with the LLM.
4.  **Intelligence:** **Google Gemini API** processes the context and generates structured JSON recipes.
5.  **Security:** **Firebase Auth** + **Row-Level Security (RLS)** ensures users only access their own data.

---

## ⚡ Run and Deploy (Google AI Studio)

This section contains everything you need to run the AI Studio version of the app locally.

**View your app in AI Studio:** https://ai.studio/apps/drive/1PDzkdQScXqeCweerm2OXxRQi43_Qb7X1

### Run Locally

**Prerequisites:** Node.js

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Set the API Key:**
    Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key.

3.  **Run the app:**
    ```bash
    npm run dev
    ```

---

## 🔬 Engineering Highlights

### 🐍 Python ETL & Synthetic Data
We faced a scarcity of structured dataset for local ingredients. To solve this, we implemented a **Data Augmentation** strategy:
* Generated synthetic datasets using LLMs.
* Validated data programmatically against official sources (FAO/BEDCA).
* Enriched data with clinical boolean flags (e.g., `is_celiac_safe`).

### 🔒 Data Governance & Security
Security is handled at the database kernel level, not just the frontend:
* **Authentication:** Firebase Auth handles identity (JWT).
* **Authorization:** Firestore Security Rules enforce strict ownership checks (`request.auth.uid == resource.data.uid`).

---

## 👥 Authors

**Team 1 - Master in Big Data & Business Analytics:**
* **Elier Garcia** - CTO
* Santiago Espindola - CEO
* Ricardo Ruedas - CFO
* Martha Cuan - CMO

---

<div align="center">
Built with ❤️ and 🥑 using Google AI Studio & Gemini
</div>
