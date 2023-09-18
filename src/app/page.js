
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Main from '@/components/Main'
import 'normalize.css/normalize.css';
// import './../app/page.module.css'

export default function Home() {
  return (
    <>
      <Header />
      <Main />
        <div>
          Hello!
        </div>
      <Footer /> 
    </> 
  )
}
