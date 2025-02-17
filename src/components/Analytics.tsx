import { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

const viewsData = [
  { date: 'Mar 1', views: 2400 },
  { date: 'Mar 2', views: 3600 },
  { date: 'Mar 3', views: 3200 },
  { date: 'Mar 4', views: 4500 },
  { date: 'Mar 5', views: 4200 },
  { date: 'Mar 6', views: 5800 },
  { date: 'Mar 7', views: 7200 }
];

const earningsData = [
  { date: 'Mar 1', earnings: 24 },
  { date: 'Mar 2', earnings: 36 },
  { date: 'Mar 3', earnings: 32 },
  { date: 'Mar 4', earnings: 45 },
  { date: 'Mar 5', earnings: 42 },
  { date: 'Mar 6', earnings: 58 },
  { date: 'Mar 7', earnings: 72 }
];

export function Analytics() {
  const [timeRange, setTimeRange] = useState('week');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Analytics Dashboard</h2>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="week">Last 7 Days</option>
          <option value="month">Last 30 Days</option>
          <option value="year">Last Year</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { icon: TrendingUp, label: 'Total Views', value: '125.4K', color: 'bg-blue-500' },
          { icon: Users, label: 'Subscribers', value: '12.8K', color: 'bg-purple-500' },
          { icon: DollarSign, label: 'Revenue', value: '$1,245', color: 'bg-green-500' },
          { icon: Clock, label: 'Watch Time', value: '45.2K hrs', color: 'bg-orange-500' }
        ].map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl border border-gray-200 p-6"
          >
            <div className={`inline-block p-3 ${stat.color} rounded-lg text-white mb-4`}>
              <stat.icon size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{stat.label}</h3>
            <p className="text-2xl font-bold text-purple-600">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Views Over Time</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={viewsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="views" stroke="#8b5cf6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Earnings Over Time</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={earningsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="earnings" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </motion.div>
  );
}