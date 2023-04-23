import styles from './Textblock.module.css'
import React from 'react'

export default function Textblock(props:{children?:string|JSX.Element}) {
    return <div className={'text--default ' + styles.textblock}>{props.children}</div>
}
