import React, { useEffect, useState } from "react"
import Link from "next/link"
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { GetInTouch, NavbarData } from "./data/NavbarData"
import { useAppContext } from "../context/AppContext"
import LanguageSelector from "./LanguageSelector"
import { useRouter } from "next/router"
import { motion, AnimatePresence } from 'framer-motion'
import ThemeChanger from "./ThemeChanger"
import Logo from "./Logo"

const Navbar = () => {
    const [currentIdx, setCurrentIdx] = useState<number>(-1);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [background, setBackground] = useState<string>("");

    const textColor = 'text-[#121212] dark:text-[#eeeeee]';

    const { language, setLanguage } = useAppContext();
    const router = useRouter();
    const { lang } = router.query;

    const navItems = NavbarData(language === null ? 'en' : language);
    const getInTouch = GetInTouch(language === null ? 'en' : language);

    useEffect(() => {
        const body = document.getElementById("body");

        const onScroll = () => {
            if (body && body.scrollTop >= 50) {
                setBackground("shadow-[0_0_10px_0_rgba(0,0,0,0.25)] bg-light-secondary dark:bg-dark-secondary");
            } else {
                setBackground("");
            }
        }

        body?.addEventListener("scroll", onScroll);

        return () => body?.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (lang === null || lang === 'en') {
            setLanguage('en');
        } else {
            setLanguage('nl');
        }

        setLoaded(true);
    }, [lang])

    return (
        <div className={`z-[3] absolute left-0 top-0 w-full md:pr-2 ${background}`}>
            <div className="relative w-full">
                <div className="max-w-[1300px] m-auto h-full flex justify-between px-1 items-center">
                    <div className='lg:mx-4 mx-2'>
                        <Link href='/'>
                            <Logo color='#cb24ff' animate='once' />
                        </Link>
                    </div>
                    <ul className='hidden lg:flex h-full uppercase border-light-theme'>
                        {navItems.map((item, index) => {
                            if (loaded) {
                                const width = document?.getElementById(item.id + 'navbar')?.offsetWidth;

                                return (
                                    <motion.li
                                        key={item.id}
                                        className="p-4 group cursor-pointer"
                                        onHoverStart={() => setCurrentIdx(index)}
                                        onHoverEnd={() => setCurrentIdx(-1)}
                                        onClick={() => {
                                            if (document.getElementById(item.id)) {
                                                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                                            } else {
                                                router.push(`/${item.path}`);
                                            }
                                        }}
                                    >
                                        <div id={item.id + 'navbar'} className='group-hover:text-light-theme/75 group-hover:dark:text-dark-theme/75'>
                                            {item.name}
                                            <AnimatePresence>
                                                {index === currentIdx &&
                                                    <svg height="3px" viewBox={`0 0 ${width !== undefined ? width / 3 : 0} 1`} xmlns="http://www.w3.org/2000/svg" className="absolute">
                                                        <motion.line x1="0" y1="0" x2="100%" y2="0" stroke="rgba(203, 36, 255, 0.75)" strokeWidth={3}
                                                            initial="hidden"
                                                            animate="visible"
                                                            exit="hidden"
                                                            variants={{
                                                                hidden: { pathLength: 0, transition: { duration: 0.5 } },
                                                                visible: { pathLength: 1, transition: { duration: 0.5 } }
                                                            }}
                                                        />
                                                    </svg>}
                                            </AnimatePresence>
                                        </div>
                                    </motion.li>
                                )
                            }
                        })}
                        <li className='md:mx-3 lg:mx-2 mt-[18px]' >
                            <ThemeChanger />
                        </li>
                        <li className="mt-3 mx-4" >
                            <LanguageSelector />
                        </li>
                    </ul>

                    <div className="flex justify-between lg:hidden mt-[-4px]">
                        <motion.div
                            className={`mt-[3px] mr-2 z-10 ${textColor}`}
                            initial='hidden'
                            animate='visible'
                            variants={{
                                hidden: { y: -100 },
                                visible: { y: 0 }
                            }}
                        >
                            {!open && <ThemeChanger />}
                        </motion.div>
                        <motion.div
                            className={`mx-2 z-10 cursor-pointer ${textColor}`}
                            onClick={() => setOpen(true)}
                            initial='hidden'
                            animate='visible'
                            variants={{
                                hidden: { y: -100 },
                                visible: { y: 0 }
                            }}
                        >
                            {!open && <AiOutlineMenu size={22} className="w-5 sm:w-6 md:h-6 md:ml-1" />}
                        </motion.div>
                    </div>

                    {open && (
                        <div className="fixed lg:hidden left-0 top-0 w-full h-screen bg-black/50" />
                    )}

                    <div className="flex fixed lg:hidden left-0 top-0">
                        <AnimatePresence>
                            {open && (
                                <motion.div
                                    className="flex relative left-0 top-0 flex-col w-[280px] sm:w-[320px] h-screen bg-white dark:bg-dark-primary px-3 sm:px-4 py-1"
                                    initial={{ x: -320 }}
                                    animate={{ x: 0 }}
                                    exit={{ x: -320 }}
                                    transition={{ stiffness: 5 }}
                                >
                                    <div className="relative flex w-full items-center justify-between pb-1">
                                        <div className="w-[140px] sm:w-[170px]">
                                            <Logo color='#cb24ff' animate='none' />
                                        </div>
                                        <div
                                            className="mb-4 p-1 rounded-full shadow-md shadow-dark-400 dark:shadow-dark-900 dark:bg-dark-tertiary cursor-pointer"
                                            onClick={() => setOpen(false)}
                                        >
                                            <AiOutlineClose size={20} className="text-dark-900 dark:text-dark-100 w-4 h-4 sm:w-5 sm:h-5" />
                                        </div>
                                    </div>
                                    <ul className="text-dark-900 uppercase pt-4">
                                        {navItems.map((item, index) => {
                                            if (loaded) {
                                                const width = document.getElementById(item.id + 'nav')?.offsetWidth;

                                                return (
                                                    <motion.li
                                                        key={item.id}
                                                        className="py-2 sm:py-4"
                                                        onHoverStart={() => setCurrentIdx(index)}
                                                        onHoverEnd={() => setCurrentIdx(-1)}>
                                                        <a
                                                            id={item.id + 'nav'}
                                                            className="sm:text-xl cursor-pointer hover:text-dark-100"
                                                            onClick={() => {
                                                                if (document.getElementById(item.id))
                                                                    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                                                                else
                                                                    router.push(`/${item.path}`);

                                                                setOpen(false)
                                                            }}
                                                        >
                                                            {item.name}
                                                            <AnimatePresence>
                                                                {index === currentIdx &&
                                                                    <svg height="3px" viewBox={`0 0 ${width !== undefined ? width / 3 : 0} 1`} xmlns="http://www.w3.org/2000/svg" className="absolute">
                                                                        <motion.line x1="0" y1="0" x2="100%" y2="0" stroke="rgba(203, 36, 255, 0.75)" strokeWidth={3}
                                                                            initial="hidden"
                                                                            animate="visible"
                                                                            exit="hidden"
                                                                            variants={{
                                                                                hidden: { pathLength: 0, transition: { duration: 0.5 } },
                                                                                visible: { pathLength: 1, transition: { duration: 0.5 } }
                                                                            }}
                                                                        />
                                                                    </svg>}
                                                            </AnimatePresence>
                                                        </a>
                                                    </motion.li>
                                                )
                                            }
                                        })}
                                    </ul>
                                    <div className="py-4">
                                        <LanguageSelector />
                                    </div>
                                    <div className=" w-[280px] sm:w-[320px] text-slate-900 absolute bottom-0 left-0">
                                        <p className="uppercase sm:text-xl pl-4 text-light-theme dark:text-dark-theme">{getInTouch}</p>
                                        <div className="flex items-center justify-between w-full mb-2 px-2 sm:px-0">
                                            <a
                                                target="_blank"
                                                href="https://www.linkedin.com/in/timen-van-gelderen/"
                                                onClick={() => setOpen(false)}
                                                className="rounded-full p-2 m-2 sm:p-3 sm:m-4 shadow-md shadow-dark-500 dark:shadow-dark-900 dark:bg-dark-tertiary hover:scale-110"
                                            >
                                                <BsLinkedin size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </a>
                                            <a
                                                target="_blank"
                                                href="https://github.com/TvGelderen"
                                                onClick={() => setOpen(false)}
                                                className="rounded-full p-2 m-2 sm:p-3 sm:m-4 shadow-md shadow-dark-500 dark:shadow-dark-900 dark:bg-dark-tertiary hover:scale-110"
                                            >
                                                <BsGithub size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </a>
                                            <a
                                                onClick={() => {
                                                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                                                    setOpen(false);
                                                }}
                                                className="rounded-full p-2 m-2 sm:p-3 sm:m-4 shadow-md shadow-dark-500 dark:shadow-dark-900 dark:bg-dark-tertiary hover:scale-110"
                                            >
                                                <AiOutlineMail size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
