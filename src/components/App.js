
import React,{useState,useEffect} from "react";
import './../styles/App.css';

const App = () => {
  const[data,setData] = useState([]);

  useEffect(() =>{
    fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((products) => setData(products))
  },[])
 
  return (
    <div>
        {/* Do not remove the main div */}
      <pre>{data}</pre>
    </div>
  )
}

export default App
