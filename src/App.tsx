import React, { useState } from 'react';
import { Heart, Activity, AlertCircle, Home, Info } from 'lucide-react';
import DiabetesForm from './components/DiabetesForm';
import CHDForm from './components/CHDForm';
import ResultCard from './components/ResultCard';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [diabetesResult, setDiabetesResult] = useState<any>(null);
  const [chdResult, setCHDResult] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Heart className="h-8 w-8 text-red-500" />
                <span className="ml-2 text-xl font-bold text-gray-800">HealthAI</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <button
                  onClick={() => setActiveTab('home')}
                  className={`${
                    activeTab === 'home'
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  <Home className="mr-1 h-4 w-4" />
                  Home
                </button>
                <button
                  onClick={() => setActiveTab('diabetes')}
                  className={`${
                    activeTab === 'diabetes'
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  <Activity className="mr-1 h-4 w-4" />
                  Diabetes Risk
                </button>
                <button
                  onClick={() => setActiveTab('chd')}
                  className={`${
                    activeTab === 'chd'
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  <Heart className="mr-1 h-4 w-4" />
                  Heart Disease Risk
                </button>
                <button
                  onClick={() => setActiveTab('about')}
                  className={`${
                    activeTab === 'about'
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  <Info className="mr-1 h-4 w-4" />
                  About
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile navigation */}
      <div className="sm:hidden bg-white border-t border-gray-200 fixed bottom-0 w-full z-10">
        <div className="grid grid-cols-4">
          <button
            onClick={() => setActiveTab('home')}
            className={`${
              activeTab === 'home' ? 'text-indigo-600' : 'text-gray-500'
            } flex flex-col items-center py-2`}
          >
            <Home className="h-6 w-6" />
            <span className="text-xs">Home</span>
          </button>
          <button
            onClick={() => setActiveTab('diabetes')}
            className={`${
              activeTab === 'diabetes' ? 'text-indigo-600' : 'text-gray-500'
            } flex flex-col items-center py-2`}
          >
            <Activity className="h-6 w-6" />
            <span className="text-xs">Diabetes</span>
          </button>
          <button
            onClick={() => setActiveTab('chd')}
            className={`${
              activeTab === 'chd' ? 'text-indigo-600' : 'text-gray-500'
            } flex flex-col items-center py-2`}
          >
            <Heart className="h-6 w-6" />
            <span className="text-xs">Heart</span>
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`${
              activeTab === 'about' ? 'text-indigo-600' : 'text-gray-500'
            } flex flex-col items-center py-2`}
          >
            <Info className="h-6 w-6" />
            <span className="text-xs">About</span>
          </button>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20 sm:pb-8">
        {activeTab === 'home' && (
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to HealthAI</h1>
            <p className="text-xl text-gray-600 mb-8">
              Advanced AI-powered health risk assessment tools
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-500 p-4">
                  <Activity className="h-10 w-10 text-white mx-auto" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Diabetes Risk Assessment</h2>
                  <p className="text-gray-600 mb-4">
                    Evaluate your risk of diabetes based on key health indicators and personal factors.
                  </p>
                  <button
                    onClick={() => setActiveTab('diabetes')}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                  >
                    Check Diabetes Risk
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-red-500 p-4">
                  <Heart className="h-10 w-10 text-white mx-auto" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Heart Disease Risk Assessment</h2>
                  <p className="text-gray-600 mb-4">
                    Assess your risk of coronary heart disease (CHD) based on your health metrics.
                  </p>
                  <button
                    onClick={() => setActiveTab('chd')}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                  >
                    Check Heart Disease Risk
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-indigo-600">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Enter Your Data</h3>
                  <p className="text-gray-600">
                    Provide your health metrics and personal information securely.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-indigo-600">2</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">AI Analysis</h3>
                  <p className="text-gray-600">
                    Our advanced AI models analyze your data to assess health risks.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-indigo-600">3</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Get Results</h3>
                  <p className="text-gray-600">
                    Receive instant risk assessment results with detailed insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'diabetes' && (
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Diabetes Risk Assessment</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <DiabetesForm setResult={setDiabetesResult} />
              </div>
              <div>
                {diabetesResult && (
                  <ResultCard 
                    title="Diabetes Risk Assessment"
                    result={diabetesResult.prediction}
                    probability={diabetesResult.probability}
                    type="diabetes"
                  />
                )}
                {!diabetesResult && (
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">About Diabetes Risk Assessment</h2>
                    <p className="mb-4">
                      This tool uses machine learning to estimate your risk of diabetes based on several health factors.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-md">
                      <h3 className="font-medium text-blue-800 mb-2">Key Factors:</h3>
                      <ul className="list-disc pl-5 text-blue-800">
                        <li>Number of pregnancies (for females)</li>
                        <li>Glucose levels</li>
                        <li>Blood pressure</li>
                        <li>Skin thickness</li>
                        <li>Insulin levels</li>
                        <li>BMI (Body Mass Index)</li>
                        <li>Diabetes pedigree function (family history)</li>
                        <li>Age</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'chd' && (
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Heart Disease Risk Assessment</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <CHDForm setResult={setCHDResult} />
              </div>
              <div>
                {chdResult && (
                  <ResultCard 
                    title="Heart Disease Risk Assessment"
                    result={chdResult.prediction}
                    probability={chdResult.confidence}
                    type="chd"
                  />
                )}
                {!chdResult && (
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">About Heart Disease Risk Assessment</h2>
                    <p className="mb-4">
                      This tool evaluates your risk of coronary heart disease (CHD) based on key health metrics.
                    </p>
                    <div className="bg-red-50 p-4 rounded-md">
                      <h3 className="font-medium text-red-800 mb-2">Key Factors:</h3>
                      <ul className="list-disc pl-5 text-red-800">
                        <li>Systolic blood pressure</li>
                        <li>BMI (Body Mass Index)</li>
                        <li>Total cholesterol</li>
                        <li>Age</li>
                        <li>Glucose levels</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">About HealthAI</h1>
            <p className="text-lg text-gray-700 mb-6">
              HealthAI is an advanced health risk assessment platform that uses artificial intelligence to help you understand your risk factors for common health conditions.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Our Technology</h2>
            <p className="text-gray-700 mb-6">
              Our platform uses machine learning models trained on extensive health datasets to provide accurate risk assessments. The predictions are based on established medical risk factors and validated against clinical outcomes.
            </p>
            
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-8">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Disclaimer</h3>
                  <p className="text-yellow-800">
                    HealthAI is designed to provide informational assessments only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Privacy & Security</h2>
            <p className="text-gray-700 mb-6">
              We take your privacy seriously. All data entered into HealthAI is processed securely and is not stored or shared with third parties. Our risk assessments are performed in real-time, and your information is not retained after you leave the site.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Heart className="h-6 w-6 text-red-400 mr-2" />
              <span className="text-xl font-bold">HealthAI</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} HealthAI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;