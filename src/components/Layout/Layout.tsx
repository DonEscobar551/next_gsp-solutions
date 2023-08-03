'use client'

import React, {Children, useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {usePathname} from 'next/navigation'

export default function Layout({children}: {
    children: React.ReactNode
}) {
    const pathName = usePathname()


    return (
        <AnimatePresence>
            <motion.div
                style={{'opacity': 0}}
                key={pathName}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                    duration: 1,
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )

}
