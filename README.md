Of course! Here is an enhanced, professionally designed version of your README file.

This redesign focuses on:
*   **Visual Appeal:** Using badges, emojis, and better formatting to make the document scannable and engaging.
*   **Clarity and Structure:** Reorganizing sections for a more logical flow, using tables and code blocks for readability.
*   **Completeness:** Adding standard sections like a Tech Stack and refining existing ones to be more developer-friendly.

---

<div align="center">

# 🩺 HAI - Health AI Diagnostic Tool ❤️

**A full-stack machine learning web application for predicting the likelihood of diabetes and heart disease.**

</div>

<p align="center">
  <img alt="Python" src="https://img.shields.io/badge/Python-3.8+-blue.svg?style=for-the-badge&logo=python&logoColor=white">
  <img alt="Flask" src="https://img.shields.io/badge/Flask-2.0+-black.svg?style=for-the-badge&logo=flask&logoColor=white">
  <img alt="React" src="https://img.shields.io/badge/React-17+-blue.svg?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img alt="Scikit-learn" src="https://img.shields.io/badge/scikit--learn-1.0+-F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge">
</p>

## 📜 Table of Contents

- [Introduction](#-introduction)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup (Flask)](#backend-setup-flask)
  - [Frontend Setup (React)](#frontend-setup-react)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)
- [Model Training](#-model-training)
- [Troubleshooting](#-troubleshooting)
- [Contributors](#-contributors)
- [License](#-license)

## 📖 Introduction

**HAI (Health AI)** helps users assess their risk for common health conditions by leveraging the power of machine learning. By inputting key health metrics, users receive real-time predictions for **Diabetes** and **Heart Disease**. The application features a clean, interactive frontend built with React and a robust backend API powered by Flask, serving pre-trained models.


> **Note:** Replace the link above with a real screenshot of your application's UI.

## ✨ Key Features

-   **🔍 Dual-Disease Prediction:** Assesses risk for both diabetes and heart disease.
-   **🧠 ML-Powered:** Utilizes models trained on real-world clinical datasets for accurate predictions.
-   **⚛️ Interactive UI:** Modern, responsive user interface built with React.
-   **🚀 Fast & Scalable API:** Backend powered by Flask to serve model predictions efficiently.
-   **📦 Pre-packaged Models:** Comes with serialized `.pkl` models and scalers, ready for immediate use.

## 🛠️ Tech Stack

| Component         | Technology/Library                                         |
| ----------------- | ---------------------------------------------------------- |
| **Frontend**      | `React`, `JavaScript`, `HTML/CSS`                          |
| **Backend**       | `Flask`, `Python`                                          |
| **ML / Data**     | `Scikit-learn`, `Pandas`, `NumPy`, `Seaborn`, `Matplotlib`   |
| **Environment**   | `venv`, `npm`                                              |

## 📂 Project Structure

The project repository is organized as follows:

```
HAI/
├── 🐍 Flask_heart.py            # Flask backend for Heart Disease prediction
├── 🐍 Flask_diabetes.py         # Flask backend for Diabetes prediction
│
├── 📓 diabetes_prediction.ipynb # Jupyter Notebook for Diabetes model training
├── 📓 heart_disease_prediction.ipynb # Jupyter Notebook for Heart Disease model training
│
├── 📦 best_model_d.pkl          # Serialized model for Diabetes
├── 📦 scaler_D.pkl              # Serialized scaler for Diabetes
├── 📦 model.pkl                 # Serialized model for Heart Disease
├── 📦 scaler.pkl                # Serialized scaler for Heart Disease
│
├── 📊 diabetes.csv              # Dataset for Diabetes model
├── 📊 framingham.csv            # Dataset for Heart Disease model
│
├── 📝 requirements.txt          # Python dependencies
├── 📄 README.md                 # This file
│
└── 🌐 frontend/                 # (Not included in this repo) React frontend code
```

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

-   [Git](https://git-scm.com/)
-   [Python](https://www.python.org/downloads/) (3.8 or newer)
-   [Node.js and npm](https://nodejs.org/en/) (for the frontend)

### Backend Setup (Flask)

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/HAI.git
    cd HAI
    ```

2.  **Create and activate a virtual environment:**
    ```bash
    # For macOS/Linux
    python3 -m venv venv
    source venv/bin/activate

    # For Windows
    python -m venv venv
    venv\Scripts\activate
    ```

3.  **Install Python dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
    > **Tip:** If `requirements.txt` is missing, generate it via `pip freeze > requirements.txt` after installing the packages listed in the old README.

4.  **Run the Flask server:**
    Choose which prediction server you want to run.
    ```bash
    # To run the diabetes prediction server
    python Flask_diabetes.py

    # To run the heart disease prediction server
    python Flask_heart.py
    ```
    The API will be available at `http://127.0.0.1:5000`.

### Frontend Setup (React)

> **Note:** The frontend code is not included in this repository snapshot. These are general instructions.

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install npm dependencies:**
    ```bash
    npm install
    ```

3.  **Start the React development server:**
    ```bash
    npm start
    ```
    The application UI will be available at `http://localhost:3000`. Ensure the frontend is configured to send API requests to the correct Flask URL (`http://127.0.0.1:5000`).

## 💻 Usage

1.  Open your web browser and navigate to `http://localhost:3000`.
2.  Select either the "Diabetes Prediction" or "Heart Disease Prediction" form.
3.  Fill in the required health parameters.
4.  Click the "Predict" button.
5.  View the prediction result returned from the backend model.

---

## 🔗 API Endpoints

### 1. Predict Diabetes

-   **Endpoint:** `/predict/diabetes`
-   **Method:** `POST`
-   **Description:** Submits user data to predict the likelihood of diabetes.
-   **Request Body (JSON):**
    ```json
    {
      "Pregnancies": 2,
      "Glucose": 120,
      "BloodPressure": 70,
      "SkinThickness": 20,
      "Insulin": 79,
      "BMI": 25.6,
      "DiabetesPedigreeFunction": 0.3
    }
    ```
-   **Success Response (JSON):**
    ```json
    {
      "prediction": "The person is likely to be Diabetic.",
      "prediction_value": 1
    }
    ```

### 2. Predict Heart Disease

-   **Endpoint:** `/predict/heart`
-   **Method:** `POST`
-   **Description:** Submits user data to predict the likelihood of heart disease.
-   **Request Body (JSON):**
    ```json
    {
      "age": 54, "sex": 1, "cp": 0, "trestbps": 130, "chol": 250, "fbs": 0,
      "restecg": 1, "thalach": 187, "exang": 0, "oldpeak": 1.0, "slope": 2,
      "ca": 0, "thal": 2
    }
    ```
-   **Success Response (JSON):**
    ```json
    {
      "prediction": "The person is likely to have Heart Disease.",
      "prediction_value": 1
    }
    ```

## 🧠 Model Training

The machine learning models were trained using the following configurations:

| Prediction Target      | Notebook                           | Dataset           | Models Tested                                             | Saved Files                      |
| ---------------------- | ---------------------------------- | ----------------- | --------------------------------------------------------- | -------------------------------- |
| **🩺 Diabetes**        | `diabetes_prediction.ipynb`        | `diabetes.csv`    | KNN, SVC, Decision Tree, Random Forest, Gradient Boosting | `best_model_d.pkl`, `scaler_D.pkl` |
| **❤️ Heart Disease**   | `heart_disease_prediction.ipynb`   | `framingham.csv`  | KNN, SVC, Decision Tree, Random Forest, Gradient Boosting | `model.pkl`, `scaler.pkl`          |

To retrain the models, open the corresponding Jupyter Notebook, modify the code as needed, and run the cells to generate new `.pkl` files.

## 🔌 Troubleshooting

-   **CORS Errors:** If the React frontend cannot connect to the Flask API, ensure CORS is enabled in your Flask app.
    ```python
    from flask_cors import CORS
    # Add this after initializing your app
    CORS(app)
    ```
-   **Model Not Found (`FileNotFoundError`):** Make sure all `.pkl` model and scaler files are located in the same directory as your Flask script.
-   **Dependency Issues:** Ensure you are using the correct virtual environment (`source venv/bin/activate`) and that all packages in `requirements.txt` are installed.

## 🧑‍💻 Contributors

-   **[ADAMFUTUR](https://github.com/ADAMFUTUR)** - Development, Model Training, Integration

We welcome contributions! Please feel free to fork the repository, make improvements, and submit a pull request.

## 📄 License

This project is licensed under the **MIT License**. See the `LICENSE` file for more details.
