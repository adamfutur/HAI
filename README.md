HAI - Health AI Diagnostic Tool

HAI (Health AI) is a full-stack machine learning web application that predicts the likelihood of diabetes and heart disease from user-entered health data. It uses a React frontend, a Flask backend, and machine learning models trained on real clinical datasets.
Table of Contents

Introduction
Features
Project Structure
Installation
Usage
API Endpoints
Configuration
Model Training
Examples
Troubleshooting
Contributors
License

Introduction
This application helps users assess their risk for:

🩺 Diabetes
❤️ Heart Disease

Users input relevant health parameters, and the system responds with predictions based on trained machine learning models. The backend is powered by Flask, and the frontend is built with React for an interactive user experience.
Features

🔍 Predicts diabetes and heart disease using machine learning
⚛️ Interactive React-based user interface
🧠 Pre-trained models served via Flask API
📉 Cleaned and preprocessed real-world health datasets
📦 Packaged with serialized .pkl models and scalers

Project Structure
The project is organized as follows:
HAI/
├── Flask.py / Flask_diabete.py # Flask backends
├── templates/ # Flask HTML templates (if used)
├── *.ipynb # Notebooks for training ML models
├── *.pkl # Serialized ML models and scalers
├── *.csv # Training datasets
├── frontend/ # React frontend (not included in snapshot)
└── README.md # This file

Installation
Backend Setup (Flask + Python)

Create a virtual environment:
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate


Install dependencies:
pip install flask scikit-learn pandas numpy seaborn matplotlib


Run the Flask server:
python Flask.py        # or Flask_diabete.py



Frontend Setup (React)

Navigate to the frontend folder and run:
npm install
npm start


Ensure the frontend is configured to call the correct Flask API URL (e.g., http://localhost:5000).


Usage

Open the React UI in your browser (e.g., http://localhost:3000).
Fill in health parameters (e.g., glucose, BMI, age).
Submit the form.
View prediction results returned from the backend ML models.

Note: Consider adding a screenshot of the UI here for clarity:
![Usage Screenshot](path/to/screenshot.png)

API Endpoints

POST /predict/diabetes

Request Body: JSON with features (e.g., {"Pregnancies": 2, "Glucose": 120, ...})
Returns: Diabetes prediction from best_model_d.pkl


POST /predict/heart

Request Body: JSON with features (e.g., {"age": 54, "sex": 1, ...})
Returns: Heart disease prediction from model.pkl



Configuration

Edit Flask routes in Flask.py or Flask_diabete.py as needed.
Replace or retrain models by updating the corresponding .ipynb files and saving new .pkl models.
Modify frontend request URLs if the backend is hosted elsewhere.

Model Training
Model training is done in the following notebooks:

🩺 Diabetes Prediction (diabete_prediction.ipynb)

Dataset: diabetes.csv
Dropped: Age
Models:
KNN
SVC
Decision Tree
Random Forest
Gradient Boosting


Saved Model: best_model_d.pkl
Scaler: scaler_D.pkl


❤️ Heart Disease Prediction (heart_disease_prediction.ipynb)

Dataset: framingham.csv
Dropped: education
Models:
KNN
SVC
Decision Tree
Random Forest
Gradient Boosting


Saved Model: model.pkl
Scaler: scaler.pkl



Examples
Diabetes Input Example:
{
  "Pregnancies": 2,
  "Glucose": 120,
  "BloodPressure": 70,
  "SkinThickness": 20,
  "Insulin": 79,
  "BMI": 25.6,
  "DiabetesPedigreeFunction": 0.3
}

Heart Disease Input Example:
{
  "age": 54,
  "chol": 250,
  "bmi": 0,
  "sysbp": 1.0,
  "glc": 2
}

Troubleshooting

CORS Errors: Enable CORS in Flask:
from flask_cors import CORS
CORS(app)


Model Not Found: Ensure all .pkl model and scaler files are present in the root directory.

React not connecting: Double-check Flask port and CORS headers.


Contributors

ADAMFUTUR – Development, model training, and integration

License
This project is licensed under the MIT License.
Additional Notes

The frontend is not included in the repository snapshot. Ensure you have the frontend code available for a complete setup.
To enhance this README, consider adding screenshots or diagrams to illustrate the application’s interface.
For dependency management, you can generate a requirements.txt file by running:pip freeze > requirements.txt

Then, install dependencies using:pip install -r requirements.txt


For hosting the app, platforms like Heroku or AWS can be used. Contact the maintainer for assistance if needed.

