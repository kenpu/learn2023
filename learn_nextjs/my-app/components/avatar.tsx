import Image from 'next/image'
import styles from './avatar.module.css'

export const Avatar = () => {
    return <Image className={styles.avatar} src="/images/myimage.jpg" height={144} width={144} alt="xyz" />
}