import styles from './Main.module.css'
import Image from 'next/image'


const Main = (props) => {
    return(
        <>
        <div>
            <section className={styles.sectionMain} >
                <h1 className={styles.sectionText}>Всім привіт! Мене зовуть Вікторія, і я крутий прсихолог</h1>
                    <div className={styles.mainWrapperP}>
                        <p className={styles.text_p}>Цей текст буде тут!!!</p>
                        <Image className={styles.image_main} src='/main_image.png' alt="maim image" width={523} height={632} /> 
                    </div>
            </section>
        </div>         
        </>
    );            
};

export default Main;