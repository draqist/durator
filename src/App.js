import './App.css';

function App() {
  async function getInfo(url) {
    const info = await fetch('https://metaworker.herokuapp.com/convert', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(irl)
    })
    console.log(info)
    }
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
