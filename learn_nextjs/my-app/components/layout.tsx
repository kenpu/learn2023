import { ReactNode } from "react"
import Link from "next/link"
import styles from './layout.module.css'

import { Input, Label, Menu } from 'semantic-ui-react'

type Pages = 'home' | 'about'

const Navbar = ({currentPage} : {currentPage : Pages} ) => (
    <div className="navbar">
        <Menu vertical>
            <Menu.Item name="home" active={currentPage == 'home'}>
                <Link href="/">Home</Link>
            </Menu.Item>
            <Menu.Item name="about" active={currentPage == 'about'}>
                <Link href="/about">About</Link>
            </Menu.Item>
        </Menu>
    </div>
)

export default function Layout({children, currentPage} : {
    children: ReactNode,
    currentPage: Pages,
}) {
    return <div className={styles.container}>
        <Navbar currentPage={currentPage} />
        {children}
    </div>
}