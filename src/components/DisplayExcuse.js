import styles from '../modules/excuser.module.css';
const DisplayExcuse = ({office,family,party,college,cat,click}) => {
    return ( 
        <>
            <div className={styles.body}>
            <video autoPlay muted loop className={styles.bgvideo} >
            <source src="animatedcss.mp4" type="video/mp4" />
        </video>
        <center>
            <p className={styles.p}>Excuser</p>
            <div>
                <div className={styles.category} onClick={office}>Office</div>
                <div className={styles.category} onClick={family}>Family</div>
                <div className={styles.category} onClick={party}>Party</div>
                <div className={styles.category} onClick={college}>College</div>
            </div>
                
              

                <br /><br /><br /> <br />

                <div className={styles.display}>
                   Category: <br />
                    <div className={styles.text1}>
                    {cat}<br />
                    </div>
                    Excuse: <br />
                    <div className={styles.text}>
                     {click}
                    </div>

                </div>

        </center>
            </div>
        </>
     );
}
 
export default DisplayExcuse;