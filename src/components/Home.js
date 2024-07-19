import profile from './images/profile.jpg';
import styles from './Home.module.css'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import { Typewriter } from 'react-simple-typewriter'
import { motion} from 'framer-motion';

function Home() {

 const stagger ={
   hidden:{opacity:0},
   show:{ opacity:1,
    transition:{
      duration: 2,
      when: "beforeChildren",
    staggerChildren:1,
    delayChildren:1,
      
 }}
 }


  return (
    <>
    <div className={styles.home} id='home'>
      <div className={styles.main}>

        <motion.div 
         className={styles.heading}
          variants={stagger}
          initial="hidden"
          animate="show"
       >
          <motion.h1
          initial={{opacity:0, y:500}}
          animate={{opacity:1, y:0}}
          transition={{
            duration:1.5,
       
          }}
          >Hi There <span>&#128075;</span>,</motion.h1>
          <motion.h1
           initial={{opacity:0, y:500}}
           animate={{opacity:1, y:0}}
           transition={{
             duration:2,
        
           }}
          
          >I'm Pranay Parbate</motion.h1>
          <motion.h4
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{
             duration:2,
             delay:1.3,
           }}
          
          >{' '} <Typewriter
            words={['Computer Engineer', 'Web Developer', 'Software Engineer', 'App Developer']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={20}
            deleteSpeed={20}
            delaySpeed={1950}
         
          /></motion.h4>
          
         
          <motion.button 
        
        initial={{opacity:0}}
        animate={{opacity:1}}
        whileTap={{scale:0.8}}
        transition={{
          duration:2,
          delay:1.5,
        }}

          className={styles.btn_resume}>Download Resume</motion.button>
          <motion.div 
          
          initial={{opacity:0 , x:100}}
          animate={{opacity:1 , x:0}}
          transition={{
            type:"spring",
            bounce:0.85,
            duration:2,
            delay:1.8,
          }}
          className={styles.icons}>
            <ul>
            <li ><a href="https://www.linkedin.com/in/pranay-parbate-9358801a1" target="_blank" rel="noreferrer" > <BsLinkedin/></a>  </li>
            <li ><a href="https://github.com/pranay292002" target="_blank" rel="noreferrer"> <BsGithub/></a>  </li>
            <li ><a href="https://www.instagram.com/pranay_2903/" target="_blank" rel="noreferrer"> <FaInstagram/></a>  </li>
            <li ><a href="https://www.facebook.com/pranay.p.96/" target="_blank" rel="noreferrer"><BsFacebook/></a>  </li>
            <li ><a href="mailto:pranayparbate2002@gmail.com" target="_blank" rel="noreferrer"><MdEmail/></a>  </li>
            </ul>
          </motion.div>
        </motion.div>

        
        <motion.div 
        
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
          duration:2,
      
        }}
        className={styles.divider}>

        </motion.div>
       <div 
        
       className={styles.profile}>
         <img src={profile} alt="profile"></img>
       </div>
        
      </div>

    </div>
    </>
  )
};
export default Home;