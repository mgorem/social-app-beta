import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/posts').then((response) => {
    console.log(response.data);  
    setListOfPosts(response.data)
    })
  }, []);

  return (
    <div className='App'>{listOfPosts.map((value, key) => {
      return <div className='post' key={key}>
              <div className='title' >{value.title}</div>
              <div className='body' >
                {value.postText}
              </div>
              <div className='footer' >{value.userName}</div>
             </div>
    })}</div>
  );
}

export default App;
