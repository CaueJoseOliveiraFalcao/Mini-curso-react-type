import { useState } from 'react';
import  Header  from './components/Header';
import Footer from './components/Footer';
export default function App(){
  const [name,setName] = useState('caue');
  const [age,setAge] = useState(19)

  const [bg,setBg] = useState("#FF0000")
  const anovinte = () => {
    setAge(20)
  }
  const anonoventa = () => {
    setAge(90)
  }

  return(
    <div style={{backgroundColor:bg}}>
      <Header name={name} age={age}/>
      <button onClick={anovinte}>tenho 20</button>
      <button onClick={anonoventa}>tenho 90</button>
      
      <Footer/>
    </div>
    
  )
}

