import styles from './Education.module.css'
import {GoDotFill} from  'react-icons/go'

const Education = () => {
  return (
    <div className={styles.education} id="education">
        <div className={styles.heading}>
           <h2>Occupation</h2> 
        </div>
    <div  className={styles.main}>
      <div className={styles.divider}>
        <div className={styles.point}><GoDotFill/><span className={styles.clg}>BE. Computer Engineering From Savitribai Phule Pune University <br></br> <year>-- 2020-2024</year> </span></div>
        <div className={styles.point}><GoDotFill/><span className={styles.hsc}>12'th with 64.31% From Maharashtra State Board <br></br><year>-- 2019-2020</year></span></div>
        <div className={styles.point}><GoDotFill/><span className={styles.ssc}>10'th with 89.40% From Maharashtra State Board <br></br><year>-- 2017-2018</year></span></div>

      </div>

    </div>
    </div>
  )
}

export default Education
