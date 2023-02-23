type Props = {
    name:string;
    age:number;
}
export default function Header(props:Props){
    return(
        <header>
            {props.name},{props.age}
        </header>
    )
}