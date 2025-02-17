import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { VideoPlayer } from './components/VideoPlayer';
import { Footer } from './components/Footer';
import { Analytics } from './components/Analytics';
import { Monetization } from './components/Monetization';
import { Settings } from './components/Settings';
import { UploadModal } from './components/UploadModal';
import { Reels } from './components/Reels';
import { TrendingUp, Flame, Star, Award, Crown, Clapperboard } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'reels' | 'analytics' | 'monetization' | 'settings'>('home');
  const [showUploadModal, setShowUploadModal] = useState(false);

  const featuredVideos = [
    {
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'Amazing Drone Footage of Northern Lights',
      author: 'Nature Explorer',
      views: '1.2M views',
      timestamp: '2 days ago'
    },
    {
      url: 'https://www.youtube.com/watch?v=C0DPdy98e4c',
      title: 'Future of AI Technology - 2025 Predictions',
      author: 'Tech Insights',
      views: '856K views',
      timestamp: '5 days ago'
    }
  ];

  const trendingVideos = [
    {
      url: 'https://www.youtube.com/watch?v=example1',
      title: 'The Future of Space Travel',
      author: 'Space Science',
      views: '2.5M views',
      timestamp: '1 day ago'
    },
    {
      url: 'https://www.youtube.com/watch?v=example2',
      title: 'Quantum Computing Explained',
      author: 'Tech Masters',
      views: '1.8M views',
      timestamp: '3 days ago'
    }
  ];

  const renderContent = () => {
    switch (currentView) {
      case 'reels':
        return <Reels />;
      case 'analytics':
        return <Analytics />;
      case 'monetization':
        return <Monetization />;
      case 'settings':
        return <Settings />;
      default:
        return (
          <>
            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
            >
              {[
                { icon: TrendingUp, label: 'Total Views', value: '125M+', color: 'bg-blue-500' },
                { icon: Flame, label: 'Active Users', value: '850K', color: 'bg-red-500' },
                { icon: Star, label: 'Premium Users', value: '250K', color: 'bg-yellow-500' },
                { icon: Award, label: 'Creator Revenue', value: '$15M+', color: 'bg-green-500' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl shadow-md p-6"
                >
                  <div className={`inline-block p-3 ${stat.color} rounded-lg text-white mb-4`}>
                    <stat.icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{stat.label}</h3>
                  <p className="text-2xl font-bold text-purple-600">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Reels Preview */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-12"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                  <Clapperboard className="text-purple-600" />
                  Trending Reels
                </h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setCurrentView('reels')}
                  className="px-6 py-2 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700"
                >
                  View All Reels
                </motion.button>
              </div>
            </motion.section>

            {/* Featured Videos */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-12"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Featured Videos</h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-2 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700"
                >
                  View All
                </motion.button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredVideos.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <VideoPlayer {...video} />
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Trending Section */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Trending Now</h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-2 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50"
                >
                  See More
                </motion.button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {trendingVideos.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  >
                    <VideoPlayer {...video} />
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Premium CTA */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-16"
            >
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full transform translate-x-32 -translate-y-32"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Crown className="text-yellow-400" size={32} />
                    <h2 className="text-3xl font-bold">Upgrade to Premium</h2>
                  </div>
                  <p className="text-lg mb-6 max-w-2xl">Unlock exclusive features, earn more from your content, and join a community of professional creators.</p>
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold"
                    >
                      Start Free Trial
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        onViewChange={setCurrentView}
        onUploadClick={() => setShowUploadModal(true)}
      />
      
      <main className={`${currentView === 'reels' ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20'}`}>
        {renderContent()}
      </main>

      {currentView !== 'reels' && <Footer />}
      
      <UploadModal
        isOpen={showUploadModal}
        onClose={() => setShowUploadModal(false)}
      />
    </div>
  );
}

export default App;