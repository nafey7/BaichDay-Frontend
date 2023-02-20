import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Link} from 'react-router-dom';

export default function ActionAreaCard(props) {
  return (
    <Link to={{pathname:'/product'}} state= {{...props}} style={{ textDecoration: 'none' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea >
          <CardMedia
            component="img"
            height="140"
            image={props.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
            {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            <Box sx={{fontSize: "120%", display: "flex", justifyContent:"space-between", paddingLeft: '30px', paddingRight: '30px', marginTop: '0px 0px 0px 0px'}}>
              <Box flexGrow={1} marginRight={1}>
                <div >
                  <b>${props.bid[props.bid.length-1].bidCost}</b>
              </div> 
              </Box>
              <Box flexGrow={1} marginRight={1}>
                <div >
              <b>{props.bid.length-1} Bids</b>
              </div>
              </Box>
              <Box flexGrow={1}>
                <b>hours left</b>
              </Box>
            </Box>

            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}