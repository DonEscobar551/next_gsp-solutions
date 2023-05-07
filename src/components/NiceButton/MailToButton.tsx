'use client'
import styles from './NiceButton.module.css'
import React, {useEffect, useState} from 'react'

interface INiceButton {
    label: string,
    onClick: Function,
    type: 'button' | 'submit' | 'reset'
}

export default function NiceButton({
                                       label,
                                       onClick,
                                       type
                                   }: INiceButton) {
    const [clicked, setClicked] = useState(false)
    useEffect(() => {
        if (clicked) {
            onClick()
            setClicked(false)
        }
    }, [clicked])
    return <button className={'text--default ' + styles.niceButton} type={type}
                   onClick={() => {
                       setClicked(true)
                   }}>{label}</button>

}
