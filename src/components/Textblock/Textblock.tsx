import styles from './Textblock.module.css'
import React, {ReactNode} from 'react'

export default function Textblock(props: { children?: string | JSX.Element | ReactNode }) {
    return <div className={'text--default ' + styles.textblock}>{props.children}</div>
}
