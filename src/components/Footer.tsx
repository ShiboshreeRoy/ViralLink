import { motion } from 'framer-motion';
import { Github, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-purple-500 mb-4">ViralLink</h3>
            <p className="text-gray-400">Share your stories with the world through video.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-500">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-500">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-500">Guidelines</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-gray-400 hover:text-purple-500"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-gray-400 hover:text-purple-500"
              >
                <Twitter size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-gray-400 hover:text-purple-500"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-gray-400 hover:text-purple-500"
              >
                <Youtube size={24} />
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © 2025 ViralLink. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}