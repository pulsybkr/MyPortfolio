import { useEffect } from "react";
import styles from '../styles/Home.module.css'

function Souris() {
  useEffect(()=>{
    
    let curseur = document.querySelector('#curseur');

    document.addEventListener('mousemove', e =>{
      curseur!.setAttribute('style', `top: ${e.pageY - 30}px; left: ${e.pageX - 30}px;}`)
    })
    
      
  }, [])
  return (
    <>
      <div id='curseur' className={styles.curseur}>

      </div>     
    </>
  )
}

export default Souris;
