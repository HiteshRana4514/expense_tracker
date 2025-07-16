import React, { useState } from 'react';
import Header from '../components/Header';
import MobMenu from '../components/MobMenu';
import SideBar from '../components/SideBar';
import { isMobile } from '../hooks/isMobile';
import { motion, AnimatePresence } from 'framer-motion';

function Dashboard() {
  const mobile = isMobile();
  const [showMenu, setShowMenu] = useState(false);

  const sidebarVariants = {
    hidden: {
      x: -300,
      opacity: 0,
      transition: { duration: 0.3 },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <Header />
      {mobile ? <MobMenu setShowMenu={setShowMenu} showMenu={showMenu} /> : null}
      <div className="flex relative">
        <AnimatePresence>
          {mobile && showMenu ? (
            <motion.div
              key="mobile-sidebar"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sidebarVariants}
              className="absolute top-0 left-0 h-[calc(100vh-133px)] w-[300px] bg-gray-100 p-4 z-50"
            >
              <SideBar setShowMenu={setShowMenu} />
            </motion.div>
          ) : null}
        </AnimatePresence>

        {!mobile && (
          <div className="w-1/6 bg-gray-100 p-4 h-[calc(100vh-76px)]">
            <SideBar setShowMenu={setShowMenu} />
          </div>
        )}

        <div className={mobile ? 'w-full p-4' : 'w-3/4 p-4'}>
          <h2 className="text-lg font-bold">Dashboard Content</h2>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
