import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Card.css'
export  const ActionCard =(props)=> {
    function createMarkup(item) {
        return { __html: item.body };
    }
    return (
      <Card className='card' style={{width:props.width}} onClick={()=>props.showNews(props.card)}>
        <CardActionArea>
          <CardMedia
            component="img"
            className="card__img"
            image={props.card.image_url}
            alt={props.card.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
            {props.card.title}
            </Typography>
            <Typography  variant="h8" color="text.secondary" dangerouslySetInnerHTML={createMarkup(props.card)}>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }