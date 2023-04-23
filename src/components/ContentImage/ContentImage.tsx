import Image, {StaticImageData} from 'next/image'
import styles from './ContentImage.module.css'

interface IContentImage {
    srcFile: StaticImageData;
    altText: string;
}

export default function ContentImage({srcFile, altText}: IContentImage) {
    return (
        <div className={styles.container}>
            <Image priority={false} fill={true} src={srcFile} alt={altText}></Image>
        </div>)
}
