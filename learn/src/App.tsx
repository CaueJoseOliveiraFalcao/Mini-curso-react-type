import { useState } from 'react';
import { Item } from './types/Item';
import { Tarefa } from './components/tarefas/Tarefa';
import './App.css'
import * as C from './App.styles'
export default function App(){
  const [list,setList] = useState<Item[]>([
    { id : 1 , name : 'Comprar Pao', done:false},
    { id : 2 , name : 'Comprar bolo', done:true}
  ]);
  return(
    <div>
      <C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>
          {}
          {list.map((item,index)=>(
            <Tarefa item={item} key={index}/>
          ))}
        </C.Area>
      </C.Container>
    </div>
    
  )
}

