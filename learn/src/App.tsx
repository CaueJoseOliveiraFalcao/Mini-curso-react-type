import  Header  from './components/Header';
import Footer from './components/Footer';
export default function App(){
  const name = 'caue';
  return(
    <div>
      <Header name={name}/>
      <Footer/>
    </div>
  )
}

