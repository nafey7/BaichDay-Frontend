import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.pic}
          alt="Item"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
          {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div style={{fontSize: "150%"}}>
                <b>${props.curr_bid}</b>
                <br/>
                <b>{props.time} hours left</b>
            </div>
          
          
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}