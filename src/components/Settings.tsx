import { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings as SettingsIcon, Camera, User, Bell, Lock, Globe, Palette } from 'lucide-react';

export function Settings() {
  const [profileImage, setProfileImage] = useState('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop');
  const [username, setUsername] = useState('CreatorName');
  const [bio, setBio] = useState('Digital content creator passionate about technology and innovation.');
  const [email, setEmail] = useState('creator@example.com');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <div className="flex items-center gap-3 mb-8">
        <SettingsIcon size={32} className="text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-800">Account Settings</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="space-y-6">
            <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600">
              <User size={20} />
              Profile
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600">
              <Bell size={20} />
              Notifications
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600">
              <Lock size={20} />
              Privacy
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600">
              <Globe size={20} />
              Language
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600">
              <Palette size={20} />
              Appearance
            </button>
          </div>
        </div>

        <div className="md:col-span-2 space-y-8">
          <div className="text-center">
            <div className="relative inline-block">
              <img
                src={profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-purple-100"
              />
              <label className="absolute bottom-0 right-0 bg-purple-600 text-white p-2 rounded-full cursor-pointer hover:bg-purple-700">
                <Camera size={20} />
                <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
              </label>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                Bio
              </label>
              <textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                Cancel
              </button>
              <button className="px-6 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}