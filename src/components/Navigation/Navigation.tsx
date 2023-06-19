'use client'

import styles from './Navigation.module.css'
import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => setMenuOpen(!menuOpen)

    const closeMenu = () => setMenuOpen(false)

    return (
        <div className={styles.container + ' text--default'}>
            <div className={styles.navbar_desktop}>
                <a href={'/'} className={styles.logo}></a>
                <a href={'/datenschutz'} className={styles.navigation_item}>Datenschutz</a>
                <a href={'/unser-team'} className={styles.navigation_item}>Unser Team</a>
                <a href={'/faq'} className={styles.navigation_item}>FAQ</a>
            </div>
            <div className={styles.navbar_mobile}>
                <div className={styles.burger_menu} onClick={toggleMenu}>
                    {menuOpen ? (<FaTimes size={30} style={{color: '#ffffff'}}/>)
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
                        <a href={'/datenschutz'} className={styles.navigation_item}>Datenschutz</a>
                        <a href={'/unser-team'} className={styles.navigation_item}>Unser Team</a>
                        <a href={'/faq'} className={styles.navigation_item}>FAQ</a>
                    </div>
                </dialog>
            </div>
        </div>)
}
