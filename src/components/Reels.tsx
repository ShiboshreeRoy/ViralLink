import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player';
import { Heart, MessageCircle, Share2, Music2, Siren as Fire, Sparkles } from 'lucide-react';

interface Reel {
  id: string;
  url: string;
  author: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
  song: string;
}

const demoReels: Reel[] = [
  {
    id: '1',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    author: '@techcreator',
    description: 'Check out this amazing tech hack! 🚀 #tech #viral',
    likes: 45200,
    comments: 1200,
    shares: 8500,
    song: 'Tech Beats - Future Mix'
  },
  {
    id: '2',
    url: 'https://www.youtube.com/watch?v=C0DPdy98e4c',
    author: '@travelvibes',
    description: 'Beautiful sunset in Bali 🌅 #travel #wanderlust',
    likes: 32100,
    comments: 890,
    shares: 6200,
    song: 'Summer Vibes - Chill Mix'
  }
];

export function Reels() {
  const [currentReel, setCurrentReel] = useState(0);
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  const handleLike = (reelId: string) => {
    setLiked(prev => ({ ...prev, [reelId]: !prev[reelId] }));
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="h-[calc(100vh-4rem)] bg-black">
      <div className="relative h-full overflow-hidden">
        <AnimatePresence initial={false}>
          {demoReels.map((reel, index) => (
            <motion.div
              key={reel.id}
              className={`absolute inset-0 ${index === currentReel ? 'z-10' : 'z-0'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentReel ? 1 : 0 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 z-10" />
                <ReactPlayer
                  url={reel.url}
                  playing={index === currentReel}
                  loop
                  muted
                  width="100%"
                  height="100%"
                  className="!absolute top-0 left-0"
                  style={{ objectFit: 'cover' }}
                />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                  <div className="flex items-end justify-between">
                    <div className="text-white max-w-[80%]">
                      <div className="flex items-center gap-2 mb-2">
                        <img
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${reel.author}`}
                          alt={reel.author}
                          className="w-10 h-10 rounded-full border-2 border-white"
                        />
                        <div>
                          <h3 className="font-semibold flex items-center gap-2">
                            {reel.author}
                            <span className="bg-purple-600 text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                              <Sparkles size={12} />
                              Pro
                            </span>
                          </h3>
                          <p className="text-sm opacity-80 flex items-center gap-1">
                            <Music2 size={14} />
                            {reel.song}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm">{reel.description}</p>
                    </div>
                    
                    <div className="flex flex-col items-center gap-6">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleLike(reel.id)}
                        className="flex flex-col items-center"
                      >
                        <div className={`p-3 rounded-full bg-white/10 backdrop-blur-md ${liked[reel.id] ? 'text-red-500' : 'text-white'}`}>
                          <Heart size={24} fill={liked[reel.id] ? "currentColor" : "none"} />
                        </div>
                        <span className="text-white text-sm mt-1">{formatNumber(reel.likes)}</span>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex flex-col items-center"
                      >
                        <div className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white">
                          <MessageCircle size={24} />
                        </div>
                        <span className="text-white text-sm mt-1">{formatNumber(reel.comments)}</span>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex flex-col items-center"
                      >
                        <div className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white">
                          <Share2 size={24} />
                        </div>
                        <span className="text-white text-sm mt-1">{formatNumber(reel.shares)}</span>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex flex-col items-center"
                      >
                        <div className="p-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white">
                          <Fire size={24} />
                        </div>
                        <span className="text-white text-sm mt-1">Trending</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={() => setCurrentReel(prev => (prev > 0 ? prev - 1 : demoReels.length - 1))}
          className="absolute top-1/2 left-4 z-30 text-white/50 hover:text-white transition-colors"
        >
          ▲
        </button>
        <button
          onClick={() => setCurrentReel(prev => (prev < demoReels.length - 1 ? prev + 1 : 0))}
          className="absolute bottom-1/2 left-4 z-30 text-white/50 hover:text-white transition-colors"
        >
          ▼
        </button>
      </div>
    </div>
  );
}