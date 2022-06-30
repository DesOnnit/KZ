import TextField from '@mui/material/TextField';
export const Input = (props) =>{
    return (
        <TextField label={props.label} name={props.name} value={props.value} onChange={props.onChange} variant="outlined" type={props.type} size="small" required margin="normal"/>
    )
}