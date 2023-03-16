import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import DisplayCards from './DisplayCards';
import Box from '@mui/material/Box';
import {useNavigate} from "react-router-dom";



function UserHome(props){
    const [dataprops,setDataprops] = React.useState([{name: "", image: "img.png", bid: [0]}]);
    let navigate = useNavigate();
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
  
    },[])
    return(
        <div>            
            <Box sx={{ display: 'flex' }}>
                    
                <DisplayCards test={dataprops}/>
                <div style={{backgroundColor: 'grey', width: '20%',marginTop: '30px'}}>
                    <br/>
                    <h3>Advert</h3>
                    <br/>
                    <h4>Get your adds featured now!</h4>
                </div>                
            </Box>
            <br/>
            <br/>
        </div>
        
    )
}



export default UserHome;