import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const[data,setdata] = useState("");
  useEffect(() => {
    const handleAPI = async ()=> {
      try{
        let result = await axios.get('http://localhost:3000/app/v1/test/testController');
        // console.log(result);
        if(result){
          setdata(result.data.result);
        }
      }
      catch(error){
        console.log(error);
      }
    }
    handleAPI();
  },[])

  return (
    <div className="App">
      <h1>{data}  </h1>
    </div>
  );
}

export default App;
