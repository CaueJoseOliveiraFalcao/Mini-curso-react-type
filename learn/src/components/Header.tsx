type Props = {
    name:string;
}
export default function Header(props:Props){
    return(
        <header>
            {props.name}
        </header>
    )
}