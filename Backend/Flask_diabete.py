from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)  # Allow all origins for all routes

# Load model and scaler
with open('best_model_d.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

with open('scaler_D.pkl', 'rb') as scaler_file:
    scaler = pickle.load(scaler_file)

@app.route('/predict_d', methods=['POST'])  # Ensure POST is allowed
def predict_d():
    try:
        data = request.json  # Ensure it's getting JSON data

        input_data = [
            data['Pregnancies'], data['Glucose'], data['BloodPressure'],
            data['SkinThickness'], data['Insulin'], data['BMI'],
            data['DiabetesPedigreeFunction'], data['Age']
        ]

        input_data_scaled = scaler.transform([input_data])
        prediction_prob = model.predict_proba(input_data_scaled)[0][1] * 100
        prediction_prob = min(prediction_prob, 99.99)

        return jsonify({
            'probability': round(prediction_prob, 2),
            'prediction': "Diabetic" if prediction_prob >= 50 else "Non-Diabetic"
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8000)  # Make sure it runs on all network interfaces
