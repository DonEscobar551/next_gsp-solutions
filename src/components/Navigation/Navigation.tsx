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
                <Link scroll={false} href={'/'} className={styles.logo}></Link>
                <Link scroll={false} href={'/datenschutz'} className={styles.navigation_item}>Datenschutzservice</Link>
                <Link scroll={false} href={'/seminare'} className={styles.navigation_item}>Seminare</Link>
                <Link scroll={false} href={'/consulting'} className={styles.navigation_item}>Business Consulting</Link>
                <Link scroll={false} href={'/hinweisgeberschutzgesetz'}
                      className={styles.navigation_item}>Hinweisgeberschutzgesetz</Link>
                <Link scroll={false} href={'/unser-team'} className={styles.navigation_item}>Unser Team</Link>
                <Link scroll={false} href={'/faq'} className={styles.navigation_item}>FAQ</Link>
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
                        <Link scroll={false} href={'/datenschutz'}
                              className={styles.navigation_item}>Datenschutzservice</Link>
                        <Link scroll={false} href={'/seminare'} className={styles.navigation_item}>Seminare</Link>
                        <Link scroll={false} href={'/consulting'} className={styles.navigation_item}>Business
                            Consulting</Link>
                        <Link scroll={false} href={'/hinweisgeberschutzgesetz'}
                              className={styles.navigation_item}>Hinweisgeberschutzgesetz</Link>
                        <Link scroll={false} href={'/unser-team'} className={styles.navigation_item}>Unser Team</Link>
                        <Link scroll={false} href={'/faq'} className={styles.navigation_item}>FAQ</Link>
                    </div>
                </dialog>
                <div className={styles.navigation_spacer}></div>
            </div>
        </div>)
}
