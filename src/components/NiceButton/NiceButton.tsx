import styles from './NiceButton.module.css'

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
    return <button className={'text--default '+styles.niceButton} type={type} onClick={onClick()}>{label}</button>

}
