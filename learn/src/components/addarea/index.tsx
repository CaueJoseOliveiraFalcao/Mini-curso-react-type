import { useState , KeyboardEvent } from 'react';
import * as C from '../addarea/styles'
type Props = {
    onEnter : (taskName : string) => void
}
export const AddArea = ({onEnter} : Props) =>{
    const [tarefa,setTarefa] = useState("")
    const handleKey = (e : KeyboardEvent) =>{
        if(e.code == 'Enter' && tarefa != ''){
            onEnter(tarefa)
        }
    }
    return(
        <C.Container>
            <div className='image'>➕</div>
            <input 
            type="text" 
            value={tarefa}
             onChange={e => setTarefa(e.target.value)}
              placeholder='digite sua tarefa'
            onKeyUp={handleKey} />
        </C.Container>
    );
}