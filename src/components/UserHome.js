import React from 'react';
import axios from 'axios';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import DisplayCards from './DisplayCards';
import Box from '@mui/material/Box';



function UserHome(props){
    const [dataprops,setDataprops] = React.useState([{name: "", image: "img.png", bid: [0]}]);
    
    React.useEffect(()=> {
        if(props.title ==="Featured Products"){
          axios.get('https://pacific-sands-58031.herokuapp.com/product/')
          .then(function(res) {
              console.log(res.data.data)
              setDataprops(res.data.data)          
          }, dataprops)
          .catch(function(err) {
              console.log(err);
        })
        }else{
          console.log("in categories")
          axios.post('https://pacific-sands-58031.herokuapp.com/user/category/', {category: props.title})
          .then(function(res) {
              setDataprops(res.data.data)          
          }, dataprops)
          .catch(function(err) {
              console.log(err);
        })
        }
  
    })
    return(
        <div>
            <h1>{props.title}</h1>
            <Box sx={{ display: 'flex' }}>
                <List
                    sx={{ width: '30%', border: 1,borderRadius: '16px', maxWidth: 150, bgcolor: 'background.paper', margin: '0px 0px 0px 10px' }}
                    component="nav"
                >
                    <ListItemButton >
                        <ListItemText primary="Automobiles" primaryTypographyProps={{fontSize: '18px'}}/>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary="Furniture" primaryTypographyProps={{fontSize: '18px'}}/>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary="Clothes" primaryTypographyProps={{fontSize: '18px'}}/>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary="Decorations" primaryTypographyProps={{fontSize: '18px'}}/>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary="Wholesale" primaryTypographyProps={{fontSize: '18px'}}/>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary="Pets" primaryTypographyProps={{fontSize: '18px'}}/>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary="Art" primaryTypographyProps={{fontSize: '18px'}}/>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary="Electronics" primaryTypographyProps={{fontSize: '18px'}}/>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary="Fashion" primaryTypographyProps={{fontSize: '18px'}}/>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary="Other" primaryTypographyProps={{fontSize: '18px'}}/>
                    </ListItemButton>
                </List>
                    
                <DisplayCards test={dataprops}/>
                <div style={{backgroundColor: 'green', width: '20%',marginTop: '12px'}}>
                    <br/>
                    <h3>Advert</h3>
                    <br/>
                    <h4>Get your adds featured now!</h4>
                </div>
                
            </Box>
        </div>
        
    )
}



export default UserHome;