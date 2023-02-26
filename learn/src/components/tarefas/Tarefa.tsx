import './Tarefa.css'
import {useState} from 'react'
import * as C  from './Tarefa'
import { Item } from '../../types/Item'
type Props = {
    item : Item;

}
export const Tarefa = ({item}: Props) => {
    const [ischeck , setIschecked] = useState(item.done);
    return(
        <C.Container>
            <input type="checkbox" checked={ischeck} onChange={e => setIschecked(e.target.checked)} />
            <p className=''>{item.name}</p>
        </C.Container>
    )
}