import Button from '@mui/material/Button';
export const Btn = (props) => {
    return(
        <Button style={props.disable?{display:'none'}:{display:'block'}} className='button' variant="contained" size="medium" type={props.type} onClick={props.onClick}>{props.text}</Button> 
    )
}