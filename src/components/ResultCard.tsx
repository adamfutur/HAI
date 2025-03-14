import React from 'react';
import { Heart, Activity, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

interface ResultCardProps {
  title: string;
  result: string;
  probability: number;
  type: 'diabetes' | 'chd';
}

const ResultCard: React.FC<ResultCardProps> = ({ title, result, probability, type }) => {
  const isPositive = result.toLowerCase().includes('risk') || 
                     result.toLowerCase().includes('diabetic');
  
  const getColorClass = () => {
    if (isPositive) {
      return {
        bg: type === 'diabetes' ? 'bg-blue-100' : 'bg-red-100',
        border: type === 'diabetes' ? 'border-blue-300' : 'border-red-300',
        text: type === 'diabetes' ? 'text-blue-800' : 'text-red-800',
        progress: type === 'diabetes' ? 'bg-blue-500' : 'bg-red-500',
      };
    } else {
      return {
        bg: 'bg-green-100',
        border: 'border-green-300',
        text: 'text-green-800',
        progress: 'bg-green-500',
      };
    }
  };

  const colors = getColorClass();

  return (
    <div className={`${colors.bg} border ${colors.border} rounded-lg shadow-md p-6`}>
      <div className="flex items-center mb-4">
        {type === 'diabetes' ? (
          <Activity className={`h-6 w-6 ${colors.text} mr-2`} />
        ) : (
          <Heart className={`h-6 w-6 ${colors.text} mr-2`} />
        )}
        <h2 className={`text-xl font-bold ${colors.text}`}>{title}</h2>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center mb-2">
          {isPositive ? (
            <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
          ) : (
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
          )}
          <span className={`text-lg font-semibold ${colors.text}`}>
            {result}
          </span>
        </div>
        <p className={`text-sm ${colors.text} opacity-80`}>
          {isPositive 
            ? "Based on your data, our model has detected potential risk factors."
            : "Based on your data, our model has not detected significant risk factors."}
        </p>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className={`text-sm font-medium ${colors.text}`}>Risk Level</span>
          <span className={`text-sm font-medium ${colors.text}`}>{probability}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className={`${colors.progress} h-2.5 rounded-full`} 
            style={{ width: `${Math.min(probability, 100)}%` }}
          ></div>
        </div>
      </div>
      
      <div className={`mt-6 p-4 rounded-md ${isPositive ? 'bg-white bg-opacity-50' : 'bg-white bg-opacity-50'}`}>
        <h3 className={`text-md font-semibold ${colors.text} mb-2`}>
          {isPositive ? "What should you do next?" : "Keep up the good work!"}
        </h3>
        <ul className={`list-disc list-inside text-sm ${colors.text}`}>
          {isPositive ? (
            <>
              <li>Consult with a healthcare professional</li>
              <li>Consider lifestyle modifications</li>
              <li>Monitor your health metrics regularly</li>
              <li>Learn more about risk factors and prevention</li>
            </>
          ) : (
            <>
              <li>Continue maintaining a healthy lifestyle</li>
              <li>Regular check-ups are still important</li>
              <li>Stay active and maintain a balanced diet</li>
              <li>Monitor your health metrics periodically</li>
            </>
          )}
        </ul>
      </div>
      
      <div className="mt-4 text-xs text-gray-500 italic">
        Note: This assessment is for informational purposes only and does not constitute medical advice.
      </div>
    </div>
  );
};

export default ResultCard;