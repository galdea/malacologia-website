'use client'
import AOS from 'aos'
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import MobileMenu from './MobileMenu'
import Footer13 from './footer/Footer13'
import Header25 from './header/Header25'

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }) {
    const [scroll, setScroll] = useState(0)
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => setMobileMenu(!isMobileMenu)

    useEffect(() => {
        AOS.init()

        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        }

        document.addEventListener("scroll", handleScroll)

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, [scroll]) // Add scroll as a dependency

    return (
        <>
            {headerStyle === 25 ? <Header25 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />

            {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

            {children}

            {footerStyle === 13 ? <Footer13 /> : null} {/* Render only Footer13 */}

            <BackToTop />
        </>
    )
}
