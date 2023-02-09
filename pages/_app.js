import { Footer, Navbar } from '../components'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  
  return (<div>
    <Navbar></Navbar>
    <Component {...pageProps} />
    <Footer></Footer>
    </div>
  )
}
