import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import { textAlign } from '@mui/system';

export default function Footer() {
  return (

    <MDBFooter className='text-center' color='white' bgColor='black'>

      <MDBContainer className='p-5' style={{ marginLeft: '-2%' }}>
        <MDBRow className='d-flex align-items-center justify-content-center'>
          <MDBCol md='4'>
            <img src='logo-white.png' alt='Image' className='img-fluid' />
          </MDBCol>

          <MDBCol md='7' style={{ marginTop: '2%' }}>
            <form action=''>
              <MDBRow className='align-items-center'>
                <MDBCol md='auto' style={{ marginBottom: '5%', fontSize: '13px' }}>
                  <strong>Sign up for our newsletter:</strong>
                </MDBCol>
                <MDBCol md='5'>
                  <MDBInput contrast type='email' placeholder='Email' className='mb-5' />
                </MDBCol>
                <MDBCol md='auto'>
                  <MDBBtn outline color='light' type='submit' className='mb-5' size='lg'>
                    Subscribe
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </MDBCol>

          <MDBCol style={{ fontSize: "15px" }}>
              <ul className='list-unstyled mb-1'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBCol md='auto'>
        <MDBBtn outline color='light' href='#!' role='button'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn outline color='light' href='#!' role='button'>
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn outline color='light' href='#!' role='button'>
          <MDBIcon fab icon='google' />
        </MDBBtn>

        <MDBBtn outline color='light' href='#!' role='button'>
          <MDBIcon fab icon='instagram' />
        </MDBBtn>

        <MDBBtn outline color='light' href='#!' role='button'>
          <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>

        <MDBBtn outline color='light' href='#!' role='button'>
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </MDBCol>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 MDBootstrap.com
      </div>
    </MDBFooter>


  );
}