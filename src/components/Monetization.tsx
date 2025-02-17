import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, AlertCircle, CheckCircle, XCircle, Settings } from 'lucide-react';

export function Monetization() {
  const [isEligible, setIsEligible] = useState(false);
  const requirements = {
    subscribers: 1000,
    watchHours: 4000,
    contentGuidelines: true,
    copyrightStrikes: 0
  };

  const currentStats = {
    subscribers: 850,
    watchHours: 3200,
    contentGuidelines: true,
    copyrightStrikes: 0
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <div className="flex items-center gap-3 mb-8">
        <DollarSign size={32} className="text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-800">Monetization Settings</h2>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-purple-800 mb-4">Monetization Status</h3>
        <div className="flex items-center gap-2 mb-4">
          {isEligible ? (
            <CheckCircle size={24} className="text-green-500" />
          ) : (
            <AlertCircle size={24} className="text-yellow-500" />
          )}
          <span className="text-gray-800 font-medium">
            {isEligible ? 'Your channel is eligible for monetization' : 'Your channel is not yet eligible for monetization'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Requirements</h3>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <span className="text-gray-600">1,000 Subscribers</span>
              {currentStats.subscribers >= requirements.subscribers ? (
                <CheckCircle size={20} className="text-green-500" />
              ) : (
                <span className="text-sm text-gray-500">{currentStats.subscribers}/1,000</span>
              )}
            </li>
            <li className="flex items-center justify-between">
              <span className="text-gray-600">4,000 Watch Hours</span>
              {currentStats.watchHours >= requirements.watchHours ? (
                <CheckCircle size={20} className="text-green-500" />
              ) : (
                <span className="text-sm text-gray-500">{currentStats.watchHours}/4,000</span>
              )}
            </li>
            <li className="flex items-center justify-between">
              <span className="text-gray-600">Content Guidelines</span>
              {currentStats.contentGuidelines ? (
                <CheckCircle size={20} className="text-green-500" />
              ) : (
                <XCircle size={20} className="text-red-500" />
              )}
            </li>
            <li className="flex items-center justify-between">
              <span className="text-gray-600">No Copyright Strikes</span>
              {currentStats.copyrightStrikes === 0 ? (
                <CheckCircle size={20} className="text-green-500" />
              ) : (
                <XCircle size={20} className="text-red-500" />
              )}
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Monetization Rules</h3>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start gap-2">
              <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
              <span>$1 per 1,000 views on your videos</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
              <span>Additional revenue from premium viewers</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
              <span>Super Chat and channel memberships available</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
              <span>Monthly payments for earnings over $100</span>
            </li>
          </ul>
        </div>
      </div>

      <button
        disabled={!isEligible}
        className={`w-full py-3 rounded-lg font-semibold ${
          isEligible
            ? 'bg-purple-600 text-white hover:bg-purple-700'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        {isEligible ? 'Enable Monetization' : 'Not Eligible for Monetization'}
      </button>
    </motion.div>
  );
}