import React from 'react'
import axios from 'axios'
import { reactLocalStorage } from 'reactjs-localstorage'
import { useFormik } from 'formik'
import { useLocation } from 'react-router-dom'


function Product() {
  const location = useLocation();
  const [props, setProps] = React.useState(location.state)
  console.log(props)
  
  const placeBid = () => {
    
  }
  return (
    <></>
  )
}