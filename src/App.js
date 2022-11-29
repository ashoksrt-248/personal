import logo from './logo.svg';
import './App.css';
import { Audio, BallTriangle, Dna, RotatingTriangles } from 'react-loader-spinner';
import Ashok from './images/Ashok img.png';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='animate-charcter'>Ashok personal portfolio</h1>
        <div>
        <img  className='ashokPhoto' src={Ashok} alt={"ashok"}/>
        
        </div>
        <marquee  direction="left"><h2>Ashok Amara</h2></marquee>
        
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
        </div>
      </header>
    </div>
  );
}

export default App;
