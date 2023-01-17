/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react';

function Header() {
  const [hoverMenu, setHoverMenu] = useState(true);
  const [clickMenu, setClickMenu] = useState(true);
  const [hoverclose, setHoverclose] = useState(true);

  return (
    <>
      <Head>
        <title>Pulsy BACKEKOLO</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
          <div className={styles.logo}>
            <Link href={'/'}>PULSY</Link>
          </div>
          {/* menu burger */}
          <div className={styles.menu} onMouseOver={()=>{
              setHoverMenu((prevHoverMenu) => !prevHoverMenu)
            }} onClick={()=>{
              setClickMenu((prevClickMenu) => !prevClickMenu)
            }}>
            <div className={styles.menu1}></div>
            <div className={styles.menu1}></div>
            <div className={styles.menu2} style={{width: hoverMenu ? "30px" : "50px"} }></div>
          </div>
          {/* menu  */}
          <div className={styles.menuderou} style={{width: clickMenu ? "0vw" : "100vw"}}>

            <div className={styles.close} onMouseOver={()=>{
              setHoverclose((prevHoverclose) => !prevHoverclose)
            }} onClick={()=>{
              setClickMenu((prevClickMenu) => !prevClickMenu)
            }} style={{display: clickMenu ? "none" : "block"}}>
              <div className={styles.close1} style={{width: hoverclose ? "50px" : "30px"}}></div>
              <div className={styles.close2} style={{width: hoverclose ? "50px" : "30px"}}></div>

            </div>
            <ul style={{display: clickMenu ? "none" : "block"}}>
              <li><Link href={'/#aboutme'}>A propos de Moi</Link></li>
              <li><Link href={'/#projet'}>Mes Projets</Link></li>
              <li><Link href={'/#contact'}>Me contacter</Link></li>
            </ul>

          </div>
        </header>
    </>
  )
}

export default Header;
