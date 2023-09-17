
import styles from './page.module.css'
import Header from './../components/Header';
import Footer from '@/components/Footer';
import 'normalize.css/normalize.css';

export default function Home() {
  return (
    <>
      <Header />
        <div>
          Hello!
        </div>
      <Footer /> 
    </> 
  )
}
