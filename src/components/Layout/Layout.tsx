'use client'

import React from 'react'
import {AnimatePresence, motion} from 'framer-motion'

export default function Layout({children}: {
    children: React.ReactNode
}) {

    return (<AnimatePresence mode="wait" initial={false}>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{
                    duration: 1,
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
