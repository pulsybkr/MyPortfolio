import { motion } from 'framer-motion';
import Link from 'next/link';
import { blur, translate } from './anim';
// import "../../styles/perso.css"

export default function Body({links, selectedLink, setSelectedLink}: any) {

    const getChars = (word: string) => {
        let chars: any[] = [];
        word.split("").forEach( (char: string, i: number) => {
          chars.push(
            <motion.span 
                custom={[i * 0.02, (word.length - i) * 0.01]} 
                variants={translate} initial="initial" 
                animate="enter" 
                exit="exit" 
                key={char + i}>
                {char}
            </motion.span>
            )
        })
        return chars;
    }

    const handleLinkClick = (href: string, index: number) => {
        setSelectedLink({ isActive: true, index });
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.warn(`Element with href ${href} not found.`);
        }
    };

    return (
        <div className="body">
        {
            links.map( (link: any, index: number) => {
                const { title, href } = link;
                return <Link key={`l_${index}`} href={href} onClick={(e) => {
                    e.preventDefault(); // Empêche le comportement par défaut du lien
                    handleLinkClick(href, index);
                }}>
                <motion.p 
                    onMouseOver={() => {setSelectedLink({isActive: true, index})}} 
                    onMouseLeave={() => {setSelectedLink({isActive: false, index})}} 
                    variants={blur} 
                    animate={selectedLink.isActive && selectedLink.index != index ? "open" : "closed"}>
                    {getChars(title)}
                </motion.p>
                </Link>
            })
        }
        </div>
    )
}
