/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, QrCode, Download } from 'lucide-react';

const ApkLogoIcon = (props: any) => (
  // Image URL set to the avatar URL for now (since we can't extract the chat attachment URL directly). 
  // User can upload their own logo to catbox.moe and replace the link!
  <img 
    src="https://files.catbox.moe/gaxcfh.png" 
    alt="APK Logo" 
    className={`w-5 h-5 object-contain opacity-80 group-hover:opacity-100 transition-all ${props.className}`}
  />
);

const MediafireIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M11 2L5 10l-3-3-2 5 4.5 4.5 7.5-14.5zM12.5 3.5l-6 12.5-3.5-3.5 9 11.5h11l-4.5-7h-3.5l5.5-10h-8z"/>
  </svg>
);

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// You can edit this data to customize your bio link!
const profileData = {
  name: "Rafel Aldino",
  bio: "Pemula di bidang coding.",
  avatarUrl: "https://files.catbox.moe/gaxcfh.png",
  links: [
    { title: "Link AI", url: " https://ais-pre-vbn6yholm4iw2vusfk443t-674398475866.asia-east1.run.app", icon: ApkLogoIcon },
    { title: "APK AI", url: "https://www.mediafire.com/file/fbzih1ehu5q3h0y/FELL_AI_-_Google_Play_package.zip/file", icon: MediafireIcon },
    { title: "Fell Tools QR", url: "https://fellqrtools.netlify.app/", icon: QrCode },
    { title: "Tiktok Downloader", url: "https://fptikdownloader.up.railway.app/", icon: Download },
  ],
  socials: [
    { title: "WhatsApp", url: "https://wa.me/6289630475570", icon: WhatsappIcon },
    { title: "Tiktok", url: "https://www.tiktok.com/@fell_anakbaik?_r=1&_t=ZS-96jgMstnZzE", icon: TiktokIcon },
  ]
};

export default function App() {
  return (
    <div className="min-h-screen relative text-zinc-50 flex flex-col items-center py-16 px-4 selection:bg-indigo-500/30 overflow-hidden">
      
      {/* Background Video Placeholder */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://files.catbox.moe/s6t9qi.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to ensure text remains readable */}
        <div className="absolute inset-0 bg-zinc-950/70" />
      </div>

      <div className="w-full max-w-md mx-auto relative z-10 flex flex-col justify-center min-h-[calc(100vh-8rem)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 sm:p-8 shadow-2xl"
        >
          {/* Header Section */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-24 h-24 mb-5 rounded-full p-1 bg-gradient-to-tr from-white via-zinc-500 to-zinc-950 shadow-lg">
              <img
                src={profileData.avatarUrl}
                alt={profileData.name}
                className="w-full h-full rounded-full object-cover border-4 border-zinc-950"
                referrerPolicy="no-referrer"
              />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white mb-2">{profileData.name}</h1>
            <p className="text-zinc-300 text-sm font-medium px-4">{profileData.bio}</p>
          </div>

          {/* Links List */}
          <div className="flex flex-col gap-3">
            {profileData.links.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    default: { duration: 0.4, delay: 0.2 + index * 0.1 },
                    scale: { duration: 0.15 } 
                  }}
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between p-4 bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-700/50 hover:border-zinc-500 rounded-2xl transition-colors overflow-hidden shadow-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-zinc-500/10 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="font-medium text-zinc-100 relative z-10">{link.title}</span>
                  <Icon className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300 relative z-10 transform group-hover:translate-x-1" />
                </motion.a>
              );
            })}
          </div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center gap-6 mt-8"
          >
            {profileData.socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors p-3 hover:bg-zinc-800/50 rounded-full"
                  aria-label={social.title}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
