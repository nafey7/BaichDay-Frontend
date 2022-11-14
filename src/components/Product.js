import React from 'react'
import axios from 'axios'
import { reactLocalStorage } from 'reactjs-localstorage'
import { useFormik } from 'formik'
import { useLocation } from 'react-router-dom'


function Product() {
  const location = useLocation();
  const [props, setProps] = React.useState(location.state)
  const [bid, setBid] = React.useState()
  console.log(props)
  
  const placeBid = () => {
    let userID = reactLocalStorage.get('userID', "", true);
    
  }
  return (
    <div style={{width: '100%', height: '100%', display:'flex', maxWidth: '1200px', flexWrap: 'wrap'}}>
      <div>
        <p>Ye nahi hona</p>
      </div>
    </div>
  )
}

export default Product