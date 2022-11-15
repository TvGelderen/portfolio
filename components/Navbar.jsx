import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { RiContactsLine } from 'react-icons/ri'
import { NavbarData } from "./NavbarData"
import { useAppContext } from "../context/AppContext"
import LanguageSelector from "./LanguageSelector"
import { useRouter } from "next/router"

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [color, setColor] = useState('bg-transparent')
    const [textColor, setTextColor] = useState('white')
    const [shadow, setShadow] = useState('')
    const [logo, setLogo] = useState('/logos/logo_white.png')

    const { language, setLanguage } = useAppContext()

    const router = useRouter();
    const { lang } = router.query

    const navItems = NavbarData(language)

    const handleOpen = () => {
        setOpen(!open)
    }

    useEffect(() => {
        setLanguage(lang === undefined ? 'en' : lang)
    }, [])

    useEffect(() => {
        const body = document.getElementById('body')

        const changeColor = () => {            
            if (body.scrollTop >= 90) {
                setColor('bg-white dark:bg-secondary')
                setTextColor('black')
                setShadow('shadow-md')
                setLogo('/logos/logo_purple.png')
            } else {
                setColor('bg-transparent')
                setTextColor('white')
                setShadow('')
                setLogo('/logos/logo_white.png')
            }
        }

        document.getElementById('body').addEventListener('scroll', changeColor);
    }, []);

    return (
        <div 
          className={`fixed left-0 top-0 w-full z-10 md:pr-4 ease-in duration-300 ${shadow} ${color} shadow-dark-900`}
        >
            <div className="max-w-[1280px] m-auto h-full flex justify-between px-2 items-center text-white">
                <Link href='/' className="py-1">
                    <Image 
                      src={logo}
                      alt="logo"
                      width='240'  
                      height='50'
                      className="w-[140px] md:w-[180px] lg:w-[220px] object-cover"
                    />
                </Link>
                <ul className="hidden md:flex h-full uppercase lg:pt-7" style={{ color: `${textColor}` }}>
                    {navItems.map(item => {
                        return (
                        <li key={item.id}>
                            <a
                              className={`lg:px-4 lg:pt-4 lg:my-4 md:px-[8px] md:my-3 md:pt-4 border-b-4 border-transparent cursor-pointer ${textColor === 'white' ? 'lg:pb-[14px] md:pb-[12px] hover:bg-black/10' : 'hover:border-gray-300 dark:hover:border-dark-600 hover:text-gray-500 lg:pb-[29px] md:pb-[23px]'}`}
                              onClick={() => {document.getElementById(item.id).scrollIntoView()}}
                            >
                                {item.name}
                            </a>
                        </li>
                    )})}
                    <li className="lg:mb-6 md:mt-[-4px] md:mx-1 lg:mx-5">
                        <LanguageSelector />
                    </li>
                </ul>

                <div className="flex justify-between md:hidden mr-6 z-10 cursor-pointer" onClick={handleOpen}>
                    {!open && <AiOutlineMenu size={20} style={{ color: `${textColor}`}} />}
                </div>

                {open && (
                    <div className="fixed md:hidden left-0 top-0 w-full h-screen bg-black/50">
                        <div className="relative md:hidden left-0 top-0 w-[70%] sm:w-[55%] h-screen bg-white dark:bg-secondary px-4 py-2 ease-in duration-500">
                            <div className="flex w-full items-center justify-between pb-3 border-b-2 dark:border-dark-600">
                                <Image 
                                  src='/logos/logo_purple.png'
                                  alt='logo'
                                  width='190'  
                                  height='50'
                                />
                                <div 
                                  className="mb-4 p-2 rounded-full shadow-md shadow-dark-500 dark:shadow-dark-900 dark:bg-tertiary cursor-pointer"
                                  onClick={handleOpen}
                                >
                                    <AiOutlineClose size={20} className="text-black dark:text-dark-100" />
                                </div>
                            </div>
                            <div>
                                <ul className="text-slate-900 uppercase pt-4">
                                    {navItems.map(item => {
                                        return (
                                        <li className="py-4" key={item.id}>
                                            <a
                                              className="py-4 text-xl cursor-pointer hover:text-dark-100"
                                              onClick={() => {
                                                document.getElementById(item.id).scrollIntoView()
                                                setOpen(false)
                                              }}
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    )})}
                                </ul>
                            </div>
                            <div className="w-[70%] sm:w-[55%] text-slate-900 fixed bottom-0 left-0 px-4">
                                <p className="uppercase pl-4">Get in touch</p>
                                <div className="flex items-center justify-between w-full mb-2">
                                    <a 
                                      target="_blank"  
                                      href="https://www.linkedin.com/in/timen-van-gelderen/"
                                      className="rounded-full p-3 m-4 shadow-md shadow-dark-500 dark:shadow-dark-900 dark:bg-tertiary hover:scale-110">
                                        <BsLinkedin size={20} />
                                    </a>
                                    <a  
                                      target="_blank" 
                                      href="https://github.com/TvGelderen"
                                      className="rounded-full p-3 m-4 shadow-md shadow-dark-500 dark:shadow-dark-900 dark:bg-tertiary hover:scale-110">
                                        <BsGithub size={20} />
                                    </a>
                                    <a  
                                      target="_blank" 
                                      href="#"
                                      className="rounded-full p-3 m-4 shadow-md shadow-dark-500 dark:shadow-dark-900 dark:bg-tertiary hover:scale-110">
                                        <AiOutlineMail size={20} />
                                    </a>
                                    <a  
                                      target="_blank" 
                                      href="#"
                                      className="rounded-full p-3 m-4 shadow-md shadow-dark-500 dark:shadow-dark-900 dark:bg-tertiary hover:scale-110">
                                        <RiContactsLine size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
