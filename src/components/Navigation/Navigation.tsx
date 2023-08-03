'use client'

import styles from './Navigation.module.css'
import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Link from 'next/link'

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => setMenuOpen(!menuOpen)

    const closeMenu = () => setMenuOpen(false)

    return (
        <div className={styles.container + ' text--default'}>
            <div className={styles.navbar_desktop}>
                <Link href={'/'} className={styles.logo}></Link>
                <Link href={'/datenschutz'} className={styles.navigation_item}>Datenschutzservice</Link>
                <Link href={'/seminare'} className={styles.navigation_item}>Seminare</Link>
                <Link href={'/consulting'} className={styles.navigation_item}>Business Consulting</Link>
                <Link href={'/hinweisgeberschutzgesetz'} className={styles.navigation_item}>Hinweisgeberschutzgesetz</Link>
                <Link href={'/unser-team'} className={styles.navigation_item}>Unser Team</Link>
                <Link href={'/faq'} className={styles.navigation_item}>FAQ</Link>
            </div>
            <div className={styles.navbar_mobile}>
                <div className={styles.burger_menu} onClick={toggleMenu}>
                    {menuOpen ? (<></>)
                        : (<FaBars size={30} style={{color: '#ffffff'}}/>)}
                </div>
                <a href={'/'} className={styles.logo}></a>
                <dialog
                    open={menuOpen}
                >
                    <div className={styles.navigation_mobile_list}>
                        <div className={styles.burger_menu} onClick={closeMenu}>
                            <FaTimes size={30} style={{color: '#ffffff'}}/>
                        </div>
                        <Link href={'/datenschutz'} className={styles.navigation_item}>Datenschutzservice</Link>
                        <Link href={'/seminare'} className={styles.navigation_item}>Seminare</Link>
                        <Link href={'/consulting'} className={styles.navigation_item}>Business Consulting</Link>
                        <Link href={'/hinweisgeberschutzgesetz'} className={styles.navigation_item}>Hinweisgeberschutzgesetz</Link>
                        <Link href={'/unser-team'} className={styles.navigation_item}>Unser Team</Link>
                        <Link href={'/faq'} className={styles.navigation_item}>FAQ</Link>
                    </div>
                </dialog>
                <div className={styles.navigation_spacer}></div>
            </div>
        </div>)
}
