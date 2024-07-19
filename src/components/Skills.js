import {React , useState} from "react";
import styles from './Skills.module.css';
import cplus from "./images/cplus.png" 
import java from "./images/java.png" 
import python from "./images/python.png"
import html from "./images/html.png"
import css from "./images/css.png"
import js from "./images/js.png"
import php from "./images/php.png"
import kotlin from "./images/kotlin.png" 
import {motion} from "framer-motion"
import CanvasJSReact from '@canvasjs/react-charts';





var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const option1 = {
  animationEnabled: true,
  backgroundColor:"#ffffff00",
  theme: "dark1",
  fontFamily:"Poppins",
  title:{
    fontFamily: "Poppins",
    fontColor:"#2E002E",
    text: "Languages"
  },
 data: [{
    indexLabelFontFamily:"Poppins",
    indexLabelFontColor:"#2E002E",
    type: "pie",
    indexLabel: "{label} :  {y}%",		
    startAngle: -90,
    dataPoints: [
      { y: 45, label: "C++" },
      { y: 40, label: "Java" },
      { y: 35, label: "Python" },
      { y: 45, label: "PHP" },
      { y: 30, label: "Kotlin" },
      { y: 55, label: "HTML" },
      { y: 50, label: "CSS" }	,
      { y: 42, label: "Javascript" },
    ]
  }]
}


const option2 = {
  animationEnabled: true,
  backgroundColor:"#ffffff00",
  theme: "dark1",
  fontFamily:"Poppins",
  title:{
    fontFamily: "Poppins",
    fontColor:"#2E002E",
    text: "Web Development"
  },
 data: [{
    indexLabelFontFamily:"Poppins",
    indexLabelFontColor:"#2E002E",
    type: "pie",
    indexLabel: "{label} :  {y}%",		
    startAngle: -90,
    dataPoints: [
      { y: 55, label: "ReactJS" },
      { y: 40, label: "Nodejs" },
      { y: 35, label: "Mongodb" },
      { y: 35, label: "ExpressJs" },
      { y: 40, label: "Mysql" },
      { y: 45, label: "AngularJS" },
      { y: 50, label: "SpringBoot" }	,
      { y: 42, label: "Hibernate" },
    ]
  }]
}


const option3 = {
  animationEnabled: true,
  backgroundColor:"#ffffff00",
  theme: "dark1",
  fontFamily:"Poppins",
  title:{
    fontFamily: "Poppins",
    fontColor:"#2E002E",
    text: "App Development"
  },
 data: [{
    indexLabelFontFamily:"Poppins",
    indexLabelFontColor:"#2E002E",
    type: "pie",
    indexLabel: "{label} :  {y}%",		
    startAngle: -90,
    dataPoints: [
      { y: 75, label: "Android Studio" },
      { y: 70, label: "Firebase" },
      { y: 65, label: "Flutter" },
      { y: 35, label: "React Native" },
      { y: 57, label: "Mysql" },
     
    ]
  }]
}
const option4 = {
  animationEnabled: true,
  backgroundColor:"#ffffff00",
  theme: "dark1",
  fontFamily:"Poppins",
  title:{
    fontFamily: "Poppins",
    fontColor:"#2E002E",
    text: "Data Science"
  },
 data: [{
    indexLabelFontFamily:"Poppins",
    indexLabelFontColor:"#2E002E",
    type: "pie",
    indexLabel: "{label} :  {y}%",		
    startAngle: -90,
    dataPoints: [
      { y: 45, label: "Deep Learing" },
      { y: 50, label: "Machine Learning" },
      { y: 35, label: "Numpy" },
      { y: 45, label: "Pandas" },
      { y: 40, label: "Scikit-learn" },
      { y: 45, label: "Seaborn" },
      { y: 40, label: "Matplotlib" }	,
      { y: 42, label: "Tensorflow" },
    ]
  }]
}
const Skills = () => {

  const [ChartData,setChartData] =useState(option1)



  return (
<motion.div

className={styles.main} id="skills">
           <div className={styles.heading}>
                 <h2>My Skill Set</h2>
           </div>

           <div className={styles.content}>
                <div className={styles.content_in}>

                     <div className={styles.ranges}>
        

                                <div className={styles.container} onClick={() => setChartData(option1)}>
                                         <p>Languages</p>
                                         <div className={styles.skill_bar}><div className={styles.lang}>.</div></div>
                                </div>
                               <div className={styles.container} onClick={() => setChartData(option2)}>
                                         <p>Web Development</p>
                                         <div className={styles.skill_bar}><div className={styles.web}>.</div></div>
                               </div>
                               <div className={styles.container} onClick={() => setChartData(option3)}>
                                         <p>App Development</p>
                                         <div className={styles.skill_bar}><div className={styles.app}>.</div></div>
                                </div>
                                <div className={styles.container} onClick={() => setChartData(option4)}>
                                         <p>Data Science</p>
                                         <div className={styles.skill_bar}><div className={styles.data}>.</div></div>
                                 </div>


                      </div>
                      <div className={styles.skill_list}>
                        <img src={cplus} alt="logo"></img>
                        <img src={java} alt="logo"></img>
                        <img src={python} alt="logo"></img>
                        <img src={html} alt="logo"></img>
                        <img src={css} alt="logo"></img>
                        <img src={js} alt="logo"></img>
                        <img src={php} alt="logo"></img>
                        <img src={kotlin} alt="logo"></img>
                      </div>

      
                     
      
                </div>

  



                <div className={styles.graph}
                  
              
                >
                
                        
                           <CanvasJSChart options = {ChartData}  containerProps={{ width: '100%', height: '100%' }}/>
                         
                    </div>
                  
            </div>

        
                                

    </motion.div>
  );
};

export default Skills;
