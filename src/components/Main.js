import styles from './Main.module.css'
import Image from 'next/image'


const Main = (props) => {
    return(
        <>
            <section className={styles.flex_container} >
                <h1 className={styles.text_container}>Мене зовуть Вікторія, і я крутий психолог!</h1>
                        <Image className={styles.image_main} src='/main_image.png' alt="maim image" width={523} height={632} />
                        <p className={styles.text_p}>Цей текст буде тут!!!11111111111</p>
            </section>        
        </>
    );            
};

export default Main;