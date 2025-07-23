import React, { use, useEffect } from "react";
import { useState } from "react";
function MobMenu({setShowMenu, showMenu}) {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (isOpen) {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }
    }, [isOpen, setShowMenu]);
    useEffect(() => {
        if (showMenu) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [showMenu]);
  return (
    <>
      <div className="p-4 bg-[#1A1A2E]">
  <span
    className="border border-white w-[40px] h-[33px] block p-1 rounded-md relative cursor-pointer"
    onClick={() => setIsOpen(!isOpen)}
    role="button"
    aria-label="Toggle Menu"
  >
        <span
      className={`block h-[2px] bg-white transition-all duration-300 ease-in-out
        ${(isOpen && showMenu) ? "absolute top-0 left-[5px] bottom-0 my-auto w-[30px] rotate-45" : "w-full mb-2"}
      `}
    ></span>
    <span
      className={`block h-[2px] bg-white mb-2 transition-all duration-300 ease-in-out
        ${(isOpen && showMenu) ? "opacity-0" : "w-full"}
      `}
    ></span>
    <span
      className={`block h-[2px] bg-white  transition-all duration-300 ease-in-out
        ${(isOpen && showMenu) ? "absolute bottom-0 left-[5px] top-0 my-auto w-[30px] -rotate-45" : "w-full mb-2"}
      `}
    ></span>
  </span>
</div>

    </>
  );
}

export default MobMenu;
