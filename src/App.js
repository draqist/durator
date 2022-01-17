import './App.css';
import React, {useState} from 'react';
import axios from 'axios'
import Infopage from './Info';


function App() {
  const [value, setValue] = useState('')
  const [result, setResult] = useState()
  const [check, setCheck] = useState(false)

  async function getInfo(value) {
    let data = {url: value, type: 'meta'}
    const info = await axios.post('https://metaworker.herokuapp.com/convert', data)
    const newData = info.data
    const ndata = newData.data
    const fdata = ndata.uuid 
    const mainData = await axios.get(`https://metaworker.herokuapp.com/fetch/${fdata}`)
    const preqData = mainData.data
    const Datamains = preqData.data
    const Data = Datamains.result
    const finalData = Data.format
    setResult(finalData)
    setCheck(true)
  }
  return (
    <div className="App">
      <div className = 'h1'>D.u.r.a.t.o.r</div>
      <div className = 'search' >
        <input type='search' placeholder='Paste your URL here' value = {value} onChange = {(e)=> setValue(e.target.value)} />
        <button onClick = {() => getInfo(value)}  >
          Generate
        </button>
      </div>
        {/* <input type = 'file' name = 'fileName' className = 'file' /> */}
      {
        check && <Infopage format = {result.format_name} bit_rate = {result.bit_rate} duration = {result.duration} size = {result.size} start_time = {result.start_time} nb_streams = {result.nb_streams}   />
      }
      <div className = 'appInfo'>
        <span> This app is a Golang based file metadata service that fetches the metadata/details of any media file with just its URL. </span>
      </div>
    </div>
  );
}

export default App;
