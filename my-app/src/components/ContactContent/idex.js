import styles from '@/components/ContactContent/ContactContent.module.css'
import { CiUser, CiLocationOn } from 'react-icons/ci';
import { BsEnvelope } from 'react-icons/bs';
const ContactContent = () => {
    return(
        <div className={`${styles.column} ${styles.left} `}>
            <p>Mauris volutpat arcu eu mi volutpat fermentum. Aenean vel dignissim orci. Vestibulum mollis elit vel tellus viverra dictum.</p>
            <div className={styles.icons}>
                <div className={styles.row}>
                    <i><CiUser /></i>
                    <div className={styles.info}>
                        <div className={styles.head}>
                            Empresa
                        </div>
                        <div className={styles.subTitle}>
                            Celke
                        </div>
                    </div>
                </div>

                <div className={styles.row}>
                    <i><CiLocationOn /></i>
                    <div className={styles.info}>
                        <div className={styles.head}>
                            Enderço
                        </div>
                        <div className={styles.subTitle}>
                            Avenida Winston Churchill
                        </div>
                    </div>
                </div>

                <div className={styles.row}>
                    <i><BsEnvelope /></i>
                    <div className={styles.info}>
                        <div className={styles.head}>
                            E-mail
                        </div>
                        <div className={styles.subTitle}>
                            cesar@celke.com.br
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactContent;