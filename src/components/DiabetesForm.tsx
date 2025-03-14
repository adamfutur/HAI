import React, { useState } from 'react';

interface DiabetesFormProps {
  setResult: (result: any) => void;
}

const DiabetesForm: React.FC<DiabetesFormProps> = ({ setResult }) => {
  const [formData, setFormData] = useState({
    Pregnancies: 0,
    Glucose: 100,
    BloodPressure: 70,
    SkinThickness: 20,
    Insulin: 80,
    BMI: 25,
    DiabetesPedigreeFunction: 0.5,
    Age: 30
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseFloat(value)
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    
    try {
      
      const response = await fetch('http://192.168.110.133:8000/predict_d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError('Failed to get prediction. Please ensure the server is running.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Enter Your Health Data</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pregnancies
              <span className="text-xs text-gray-500 ml-1">(number)</span>
            </label>
            <input
              type="number"
              name="Pregnancies"
              value={formData.Pregnancies}
              onChange={handleChange}
              min="0"
              max="20"
              className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Glucose
              <span className="text-xs text-gray-500 ml-1">(mg/dL)</span>
            </label>
            <input
              type="number"
              name="Glucose"
              value={formData.Glucose}
              onChange={handleChange}
              min="0"
              max="300"
              className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Blood Pressure
              <span className="text-xs text-gray-500 ml-1">(mm Hg)</span>
            </label>
            <input
              type="number"
              name="BloodPressure"
              value={formData.BloodPressure}
              onChange={handleChange}
              min="0"
              max="200"
              className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Skin Thickness
              <span className="text-xs text-gray-500 ml-1">(mm)</span>
            </label>
            <input
              type="number"
              name="SkinThickness"
              value={formData.SkinThickness}
              onChange={handleChange}
              min="0"
              max="100"
              className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Insulin
              <span className="text-xs text-gray-500 ml-1">(μU/mL)</span>
            </label>
            <input
              type="number"
              name="Insulin"
              value={formData.Insulin}
              onChange={handleChange}
              min="0"
              max="1000"
              className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              BMI
              <span className="text-xs text-gray-500 ml-1">(kg/m²)</span>
            </label>
            <input
              type="number"
              name="BMI"
              value={formData.BMI}
              onChange={handleChange}
              min="10"
              max="70"
              step="0.1"
              className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Diabetes Pedigree Function
              <span className="text-xs text-gray-500 ml-1">(family history)</span>
            </label>
            <input
              type="number"
              name="DiabetesPedigreeFunction"
              value={formData.DiabetesPedigreeFunction}
              onChange={handleChange}
              min="0"
              max="2.5"
              step="0.01"
              className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Age
              <span className="text-xs text-gray-500 ml-1">(years)</span>
            </label>
            <input
              type="number"
              name="Age"
              value={formData.Age}
              onChange={handleChange}
              min="0"
              max="120"
              className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
        >
          {loading ? 'Processing...' : 'Calculate Diabetes Risk'}
        </button>
      </form>
    </div>
  );
};

export default DiabetesForm;