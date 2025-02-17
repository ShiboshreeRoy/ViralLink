import { Search, Upload, Bell, User, Wallet, Crown, DollarSign, BarChart2, Settings, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface NavbarProps {
  onViewChange: (view: 'home' | 'analytics' | 'monetization' | 'settings') => void;
  onUploadClick: () => void;
}

export function Navbar({ onViewChange, onUploadClick }: NavbarProps) {
  const [balance, setBalance] = useState(2500);
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Your video reached 1M views!", isNew: true },
    { id: 2, message: "New subscriber: TechPro", isNew: true },
    { id: 3, message: "Earned 500 credits from views", isNew: false }
  ]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  const earnings = {
    total: 15420,
    today: 342,
    subscribers: 25000,
    avgViewsPerVideo: 50000
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <motion.h1 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-purple-600 flex items-center gap-2 cursor-pointer"
              onClick={() => onViewChange('home')}
            >
              <Crown className="text-yellow-500" size={24} />
              ViralLink
            </motion.h1>
          </div>
          
          <div className="flex-1 max-w-xl px-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search videos..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-purple-500"
              />
              <button type="submit" className="absolute right-3 top-2.5 text-gray-400 hover:text-purple-600">
                <Search size={20} />
              </button>
            </form>
          </div>

          <div className="flex items-center space-x-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full"
            >
              <Wallet size={18} />
              <span className="font-semibold">${(balance / 1000).toFixed(2)}K</span>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={onUploadClick}
              className="p-2 rounded-full bg-purple-100 hover:bg-purple-200"
            >
              <Upload size={24} className="text-purple-600" />
            </motion.button>

            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 relative"
              >
                <Bell size={24} className="text-purple-600" />
                {notifications.some(n => n.isNew) && (
                  <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
                )}
              </motion.button>
            </div>

            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="p-2 rounded-full bg-purple-100 hover:bg-purple-200"
              >
                <User size={24} className="text-purple-600" />
              </motion.button>

              {showProfileMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg py-2 z-50"
                >
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-semibold text-gray-800">Creator Studio</p>
                    <p className="text-xs text-gray-500">@creatorname</p>
                  </div>

                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Today's Earnings</span>
                      <span className="text-sm font-semibold text-green-600">${earnings.today}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Total Subscribers</span>
                      <span className="text-sm font-semibold text-purple-600">{earnings.subscribers.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="py-2">
                    <button
                      onClick={onUploadClick}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    >
                      <Upload className="mr-3 h-4 w-4 text-gray-400" />
                      Upload Video
                    </button>
                    <button
                      onClick={() => {
                        onViewChange('monetization');
                        setShowProfileMenu(false);
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    >
                      <DollarSign className="mr-3 h-4 w-4 text-gray-400" />
                      Monetization
                    </button>
                    <button
                      onClick={() => {
                        onViewChange('analytics');
                        setShowProfileMenu(false);
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    >
                      <BarChart2 className="mr-3 h-4 w-4 text-gray-400" />
                      Analytics
                    </button>
                    <button
                      onClick={() => {
                        onViewChange('settings');
                        setShowProfileMenu(false);
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                    >
                      <Settings className="mr-3 h-4 w-4 text-gray-400" />
                      Settings
                    </button>
                  </div>

                  <div className="border-t border-gray-100 mt-2">
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                      <LogOut className="mr-3 h-4 w-4" />
                      Sign Out
                    </a>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}