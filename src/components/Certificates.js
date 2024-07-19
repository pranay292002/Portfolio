import styles from './Certificates.module.css';






const Certificates = () => {
  return (
    <div>
      <div className={styles.main}  id='certificates'>
      <div className={styles.heading}>
       <h2> Certifications & LOR</h2>
      </div>

        <div className={styles.pdf}>
        <iframe src="https://drive.google.com/file/d/1vjNybpfGzR9fRnefpBiFiL0Sft0tVQtD/preview?usp=drive_link" title='certificate'></iframe>
        <iframe src="https://drive.google.com/file/d/1wBvpggja-0DnWDiZJQbtmFXfy8uygWo2/preview?usp=drive_link " title='certificate'></iframe>        
        <iframe src="https://drive.google.com/file/d/1iCDjfFPP1_yARnxiK6uHrSnV0_JYa889/preview?usp=drive_link" title='certificate'></iframe>       
        <iframe src="https://drive.google.com/file/d/1vwy-Lb60Xasqv8JQlrpOwygwriuCKIio/preview?usp=drive_link" title='certificate'></iframe>         
        <iframe src="https://drive.google.com/file/d/1w59dWeqqmHSEEnkTp23ubKF6r0r1NZh-/preview?usp=drive_link" title='certificate'></iframe>   
        <iframe src="https://drive.google.com/file/d/1vjMBYyslzjfK5xXZ2t2iNhyH_Iiiv6au/preview?usp=sharing" title='certificate'></iframe>   
        </div>
      </div>
    </div>
  )
}

export default Certificates
