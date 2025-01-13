"use client";

import { assets } from "@/assets/assets"
import Image from "next/image"
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
    // useRef - DOM요소나 상태를 직접 참조할 수 있는 객체를 생성하는 훅
    // 렌더링 되도 동일한 객체를 유지! -> DOM요소 직접 수정이나 추적에 용이함
    const sideMenuRef = useRef(false);
    const [isScroll, setIsScroll] = useState(false);

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        });
    }, []);

  return (
      <>
          <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[80%]">
              <Image src={assets.header_bg_color} alt="bg-color" className="w-full " />
          </div>
          <nav className={`w-full flex items-center justify-between fixed px-5 lg:px-8 xl:px-[8%] py-4 
            ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
              <a href="#top" >
                  <Image
                      className="cursor-pointer w-28 mr-14"
                      src={assets.logo} alt="logo" />
              </a>
              <ul className={`items-center hidden gap-6 px-12 py-3 ${isScroll ? "" : "bg-white bg-opacity-50 shadow-md"}rounded-full  md:flex lg:gap-8 `}>
                  <li><a className="font-Ovo" href="#top">Home</a></li>
                  <li><a className="font-Ovo"  href="#about">About me</a></li>
                  <li><a className="font-Ovo"  href="#services">Services</a></li>
                  <li><a className="font-Ovo"  href="#work">My Work</a></li>
                  <li><a className="font-Ovo"  href="#contact">Contact me</a></li>
              </ul>

              <div className="flex items-center gap-4">
                  <button>
                      <Image src={assets.moon_icon} alt="darkMode" className="w-6" />
                  </button>
                  <a className="items-center hidden gap-3 px-10 lg:flex py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
                      href="#contact">Contact <Image alt="arrow-icon" className="w-3" src={assets.arrow_icon} /></a>
                  
                  <button onClick={openMenu} className="block ml-3 md:hidden">
                      <Image src={assets.menu_black} alt="menu-black" className="w-6" />
                  </button>
              </div>

              {/* ---- mobile menu ---- */}
              <ul ref={sideMenuRef}
                  className="fixed top-0 bottom-0 z-50 flex flex-col w-64 h-screen gap-4 p-10 transition duration-500 md:hidden -right-64 bg-rose-50">
                  
                  <div onClick={closeMenu} className="absolute right-6 top-6">
                      <Image
                          src={assets.close_black} alt="menu close" className="w-5 cursor-pointer" />
                  </div>

                  <li><a className="font-Ovo" onClick={closeMenu} href="#top">Home</a></li>
                  <li><a className="font-Ovo" onClick={closeMenu}  href="#about">About me</a></li>
                  <li><a className="font-Ovo" onClick={closeMenu}  href="#services">Services</a></li>
                  <li><a className="font-Ovo" onClick={closeMenu}  href="#work">My Work</a></li>
                  <li><a className="font-Ovo" onClick={closeMenu}  href="#contact">Contact me</a></li>
              </ul>
        </nav>
      </>
  )
}

export default Navbar