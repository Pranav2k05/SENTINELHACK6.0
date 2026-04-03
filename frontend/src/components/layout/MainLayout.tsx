
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-[#080a16] to-[#04060d] relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-30 z-0"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_8%,rgba(237,27,118,0.28),transparent_32%),radial-gradient(circle_at_82%_24%,rgba(6,123,123,0.2),transparent_36%),radial-gradient(circle_at_50%_92%,rgba(34,232,255,0.12),transparent_38%)]"></div>
      <div className="absolute inset-0 z-0 opacity-[0.08] mix-blend-soft-light bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.6)_1px,transparent_0)] bg-[size:3px_3px]"></div>
      <div className="absolute inset-0 z-0 opacity-[0.08] bg-[linear-gradient(180deg,transparent_0%,rgba(237,27,118,0.4)_48%,transparent_100%)] bg-[size:100%_4px]"></div>
      <div className="absolute top-[-160px] left-[-120px] w-[460px] h-[460px] bg-fuchsia-500/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[-190px] right-[-130px] w-[520px] h-[520px] bg-cyan-500/15 rounded-full blur-3xl z-0"></div>
      
      <Navbar />
      <motion.main 
        className="flex-grow relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default MainLayout;
