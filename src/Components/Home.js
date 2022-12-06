import React from 'react';
import { Audio, BallTriangle, Dna, RotatingTriangles, CirclesWithBar, Circles } from 'react-loader-spinner';
import Ashok from '../images/Ashok img.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css";
import Container from 'react-bootstrap/Container';
const Home = () => {
  return (
    <div>
        <div className='Container'>
        <h1 className='animate-charcter'>Ashok personal portfolio</h1>
        <div>
            <marquee><img  className='ashokPhoto' src={Ashok} alt={"ashok"}/><h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ashok Amara</h2></marquee>
        
        </div>
        
        
        <div className='flexBox'>
          <div>
            <Audio
              height="80"
              width="80"
              radius="9"
              color="yellow"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
          </div>
          
          <div>
            <Dna
              visible={true}
              height="100"
              width="100"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
          <div>
            <RotatingTriangles
              visible={true}
              height="80"
              width="80"
              ariaLabel="rotating-triangels-loading"
              wrapperStyle={{}}
              wrapperClass="rotating-triangels-wrapper"
              colors={['white','orange','green']}
            />
          </div>
          <div>
            <Circles
                height="80"
                width="80"
                color="#eb34b4"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
          </div>
        </div>

        </div>
    </div>
  )
}

export default Home;