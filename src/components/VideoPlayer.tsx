import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import { Heart, Share2, MessageCircle, Bookmark, Gift, Coins, Eye, Clock, DollarSign } from 'lucide-react';
import { useState } from 'react';

interface VideoPlayerProps {
  url: string;
  title: string;
  author: string;
  views: string;
  timestamp: string;
}

export function VideoPlayer({ url, title, author, views, timestamp }: VideoPlayerProps) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showStats, setShowStats] = useState(false);

  const videoStats = {
    earnings: 245.50,
    watchTime: '2.5K hours',
    engagement: '8.2%',
    subscribers: '+120'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="premium-card group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-premium"
    >
      <div className="aspect-w-16 aspect-h-9 relative rounded-t-xl overflow-hidden">
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          controls
          playing={false}
          className="react-player"
        />
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-effect px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 text-purple-600"
          >
            <Gift size={14} />
            Premium
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-effect px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 text-green-600"
          >
            <DollarSign size={14} />
            Monetized
          </motion.div>
        </div>
      </div>
      
      <div className="p-4 bg-white rounded-b-xl border border-gray-100">
        <h2 className="text-xl font-semibold mb-2 group-hover:premium-text transition-colors">{title}</h2>
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-gray-600 font-medium hover:text-purple-600 cursor-pointer transition-colors">{author}</p>
              <span className="glass-effect px-2 py-0.5 rounded-full text-xs font-medium flex items-center gap-1 text-purple-600">
                <Coins size={12} />
                Creator
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Eye size={14} />
                {views}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {timestamp}
              </span>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLiked(!liked)}
              className={`p-2 rounded-full transition-colors ${
                liked ? 'text-red-500 bg-red-50' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Heart size={20} fill={liked ? "currentColor" : "none"} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <Share2 size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <MessageCircle size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSaved(!saved)}
              className={`p-2 rounded-full transition-colors ${
                saved ? 'text-purple-500 bg-purple-50' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Bookmark size={20} fill={saved ? "currentColor" : "none"} />
            </motion.button>
          </div>
        </div>

        {showStats && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="glass-effect rounded-lg p-4 mt-4"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-sm text-gray-600">Earnings</p>
                <p className="text-lg font-semibold text-green-600">${videoStats.earnings}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Watch Time</p>
                <p className="text-lg font-semibold premium-text">{videoStats.watchTime}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Engagement</p>
                <p className="text-lg font-semibold text-blue-600">{videoStats.engagement}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">New Subs</p>
                <p className="text-lg font-semibold text-indigo-600">{videoStats.subscribers}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}