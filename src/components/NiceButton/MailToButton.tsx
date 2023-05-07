'use client'
import styles from './NiceButton.module.css'
import React from 'react'

export default function MailToButton({label}: { label:string }
) {
    return <button className={'text--default ' + styles.niceButton} type={'button'}
                   onClick={() => {
                       window.open('mailto:stephan@gspsolutions.de?subject=GSP Anfrage für ein Erstgespräch', '_blank')
                   }
                   }>{label}</button>

}
