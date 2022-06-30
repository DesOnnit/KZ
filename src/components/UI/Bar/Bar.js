import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Btn } from '../Button/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ButtonAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{justifyContent: 'space-between',margin:'20px 0'}}>
        <Stack direction="column" style={{alignItems: 'center'}}>
        <Avatar alt={props.name} src={props.src} style={{height: '100px',width: '100px'}} />
          <Typography variant="h6" component="div">
            {props.name}
          </Typography>
          </Stack>
          <Btn text="ВЫХОД" type="button" onClick={props.onClick}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
