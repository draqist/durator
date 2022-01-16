import './App.css';
import React, {useState, useEffect} from 'react';


function App() {
  const [res, setRes] = useState('')
  let data = {url: 'https://pagalnew.com/mp3-songs/bollywood-mp3-songs/humko-humise-chura-lo-mohabbatein-128-kbps-sound.mp3'}
  useEffect(() => {
    async function getInfo(data) {
    const info = await fetch('https://metaworker.herokuapp.com/convert', {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify(data)
    })
      .then(res => {
        console.log(res.json())
        setRes(res.uuid)
      })
      .catch(err => console.log(err.message))
    }
    getInfo(data)
  }, [data])
  return (
    <div className="App">
        <h1>{res}</h1>
    </div>
  );
}

export default App;
