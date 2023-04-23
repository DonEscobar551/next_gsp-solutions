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
            <div className={styles.navbar}>
                <div className={styles.logo}></div>
                <a href={'/datenschutz'} className={styles.navigation_item}>Datenschutz</a>
                <a href={'#'} className={styles.navigation_item}>Unser Team</a>
                <a href={'#'} className={styles.navigation_item}>FAQ</a>
                <a href={'#'} className={styles.navigation_item}>Nav 4</a>
                <div className={styles.burger_menu} onClick={toggleMenu}>
                    {menuOpen ? (<FaTimes size={30} style={{color: '#ffffff'}}/>)
                        : (<FaBars size={30} style={{color: '#ffffff'}}/>)}
                </div>
            </div>
        </div>)
}
