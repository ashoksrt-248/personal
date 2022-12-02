import React from 'react';
import { Audio, BallTriangle, Dna, RotatingTriangles, CirclesWithBar, Circles } from 'react-loader-spinner';
import Ashok from '../images/Ashok img.png';
const Home = () => {
  return (
    <div>
        <div>
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
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#4fa94d"
              ariaLabel="ball-triangle-loading"
              wrapperClass={{}}
              wrapperStyle=""
              visible={true}
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
            <CirclesWithBar
                height="100"
                width="100"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                outerCircleColor="white"
                innerCircleColor="blue"
                barColor="orange"
                ariaLabel='circles-with-bar-loading'
            />
          </div>
          <div>
            <Circles
                height="80"
                width="80"
                color="#FFAF33"
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