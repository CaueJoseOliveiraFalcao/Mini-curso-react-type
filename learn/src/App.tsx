import { useState } from 'react';
import { Item } from './types/Item';
import { Tarefa } from '../src/components/tarefas/Tarefa';
import { AddArea } from './components/addarea';
import './App.css'
import * as C from './App.styles'
export default function App(){
  const [list,setList] = useState<Item[]>([
    { id : 1 , name : 'Comprar Pao', done:false},
    { id : 2 , name : 'Comprar bolo', done:true}
  ]);

  const handleaddtask = (taskname : string) => {
    let newList = [...list];
    newList.push({
      id : list.length + 1,
      name : taskname,
      done : false
    })
    setList(newList)
  }
  return(
    <div>
      <C.Container>
        <C.Area>
          <C.Header>Lista de Tarefas</C.Header>
          <AddArea onEnter=(handleaddtask) />
          {list.map((item,index)=>(
            <Tarefa item={item} key={index}/>
          ))}
        </C.Area>
      </C.Container>
    </div>
    
  )
}

