import './Tarefa.css'
import {useState} from 'react'
import * as B  from '../tarefas/Cssfix'
import { Item } from '../../types/Item'
type Props = {
    item : Item;

}
export const Tarefa = ({item}: Props) => {
    const [ischeck , setIschecked] = useState(item.done);
    return(
        <B.Container done={ischeck}>
            <input type="checkbox" checked={ischeck} onChange={e => setIschecked(e.target.checked)} />
            <label >{item.name}</label>
        </B.Container>  
    )
}