import styles from './Projects.module.css'
import ss from './images/ss1.png'
import {motion} from 'framer-motion'

const Projects = () => {
  return (
    <div className={styles.main} id='projects'>
       <div className={styles.heading}>
       <h2>Projects</h2>
       </div>
    
    <div className={styles.container}>
     
     <motion.div className={styles.card}  
         initial={{ opacity: 0 , scale:0.5}}
         whileInView={{ opacity: 1 , scale:1}}

         transition={{
          duration:0.5
         }}
     >
         <img src={ss} alt="picture1"></img>
         <div className={styles.desc}>This project is based on machine learning and streamlit framework </div>
         
         <div className={styles.content}>
         <div className={styles.card_title}>
          Movie Recommender System
         </div>
          <div className={styles.card_btns}> 
          <button className={styles.github}>Github</button>
          <button className={styles.demo}>Demo</button>
         </div>
         </div>

    </motion.div>

    <motion.div className={styles.card}
    initial={{ opacity: 0 , scale:0.5}}
    whileInView={{ opacity: 1 , scale:1}}

    transition={{
     duration:0.5
    }}

    >
         <img src={ss} alt="picture1"></img>
         <div className={styles.desc}>This project is based on machine learning and streamlit framework </div>
         
         <div className={styles.content}>
         <div className={styles.card_title}>
          Movie Recommender System
         </div>
          <div className={styles.card_btns}> 
          <button className={styles.github}>Github</button>
          <button className={styles.demo}>Demo</button>
         </div>
         </div>

    </motion.div>

    <motion.div className={styles.card}
    initial={{ opacity: 0 , scale:0.5}}
    whileInView={{ opacity: 1 , scale:1}}

    transition={{
     duration:0.5
    }}

    >
         <img src={ss} alt="picture1"></img>
         <div className={styles.desc}>This project is based on machine learning and streamlit framework </div>
         
         <div className={styles.content}>
         <div className={styles.card_title}>
          Movie Recommender System
         </div>
          <div className={styles.card_btns}> 
          <button className={styles.github}>Github</button>
          <button className={styles.demo}>Demo</button>
         </div>
         </div>

    </motion.div>
    <motion.div className={styles.card}
    initial={{ opacity: 0 , scale:0.5}}
    whileInView={{ opacity: 1 , scale:1}}

    transition={{
     duration:0.5
    }}

    >
         <img src={ss} alt="picture1"></img>
         <div className={styles.desc}>This project is based on machine learning and streamlit framework </div>
         
         <div className={styles.content}>
         <div className={styles.card_title}>
          Movie Recommender System
         </div>
          <div className={styles.card_btns}> 
          <button className={styles.github}>Github</button>
          <button className={styles.demo}>Demo</button>
         </div>
         </div>

    </motion.div>
     
    <motion.div className={styles.card}
    initial={{ opacity: 0 , scale:0.5}}
    whileInView={{ opacity: 1 , scale:1}}

    transition={{
     duration:0.5
    }}

    >
         <img src={ss} alt="picture1"></img>
         <div className={styles.desc}>This project is based on machine learning and streamlit framework </div>
         
         <div className={styles.content}>
         <div className={styles.card_title}>
          Movie Recommender System
         </div>
          <div className={styles.card_btns}> 
          <button className={styles.github}>Github</button>
          <button className={styles.demo}>Demo</button>
         </div>
         </div>

    </motion.div>
     <motion.div className={styles.card}
    initial={{ opacity: 0 , scale:0.5}}
    whileInView={{ opacity: 1 , scale:1}}

    transition={{
     duration:0.5
    }}

    >
         <img src={ss} alt="picture1"></img>
         <div className={styles.desc}>This project is based on machine learning and streamlit framework </div>
         
         <div className={styles.content}>
         <div className={styles.card_title}>
          Movie Recommender System
         </div>
          <div className={styles.card_btns}> 
          <button className={styles.github}>Github</button>
          <button className={styles.demo}>Demo</button>
         </div>
         </div>

    </motion.div>
     </div>
     </div>
  )
}

export default Projects
