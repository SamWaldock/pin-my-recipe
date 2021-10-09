import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <Image
            priority
            src="/images/logo.png"
            width="250px"
            height="60px"
            className={styles.logo}
            alt="logo"
          />
        </a>
      </Link>
    </header>
  )
}
