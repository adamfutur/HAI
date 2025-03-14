import React, { useState } from 'react';

interface CHDFormProps {
  setResult: (result: any) => void;
}

const CHDForm: React.FC<CHDFormProps> = ({ setResult }) => {
  const [formData, setFormData] = useState({
    sysBP: 120,
    BMI: 25,
    totChol: 200,
    age: 40,
    glucose: 85
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
      const response = await fetch('http://192.168.110.133:8080/predict', {
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
              Systolic Blood Pressure
              <span className="text-xs text-gray-500 ml-1">(mm Hg)</span>
            </label>
            <input
              type="number"
              name="sysBP"
              value={formData.sysBP}
              onChange={handleChange}
              min="80"
              max="250"
              className="w-full p-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
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
              className="w-full p-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Total Cholesterol
              <span className="text-xs text-gray-500 ml-1">(mg/dL)</span>
            </label>
            <input
              type="number"
              name="totChol"
              value={formData.totChol}
              onChange={handleChange}
              min="100"
              max="500"
              className="w-full p-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Age
              <span className="text-xs text-gray-500 ml-1">(years)</span>
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="18"
              max="120"
              className="w-full p-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Glucose
              <span className="text-xs text-gray-500 ml-1">(mg/dL)</span>
            </label>
            <input
              type="number"
              name="glucose"
              value={formData.glucose}
              onChange={handleChange}
              min="50"
              max="300"
              className="w-full p-2 border border-gray-300 rounded focus:ring-red-500 focus:border-red-500"
            />
          </div>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
        >
          {loading ? 'Processing...' : 'Calculate Heart Disease Risk'}
        </button>
      </form>
    </div>
  );
};

export default CHDForm;