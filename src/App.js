import React, { useState } from "react"
import './index.css';

function App() {
  // state
  const [length, setLength] = useState('')
  const [payload, setPayload] = useState('')
  const [wheelbase, setWheelbase] = useState('')
  const [i, setI] = useState('')
  const [haviestaxis, setHaviestaxis] = useState('')

  const [mst, setMst] = useState('')
  const [message, setMessage] = useState('')

  let calMst = (event) =>{
    //prevent submitting
    event.preventDefault()

    if (payload === '' || wheelbase === '' || i === '' || haviestaxis === ''){
      alert('Silahkan lengkapi data tersebut')
    } else{
      let calPayload = (+payload * +i/+wheelbase)
      let mst =(+haviestaxis + +calPayload)

      setMst('MST kendaraanmu: '+parseFloat(mst).toFixed(1)+'Kg')
    
      //logic for message
      if (mst <= 8000 && length <= 9000){
        setMessage('kelas 3 adalah rekomendasi jalan yang engkau lalui')
      }else if(mst <= 8000 && length <= 12000){
        setMessage('kelas 2 adalah rekomendasi jalan yang engkau lalui')
      }else if(mst <= 10000 && length <= 13000){
        setMessage('kelas 1 adalah rekomendasi jalan yang engkau lalui')
      }else{
        setMessage('kelas khusus adalah rekomendasi jalan yang engkau lalui')
      }
    }
  }

  let handleClick = (event) =>{
    event.preventDefault()
    setMst()
    setPayload('')
    setWheelbase('')
    setI('')
    setHaviestaxis('')
    setLength('')
    setMessage()
  }

  return (
    <div className="form-contain">
      <h3>Bagaimana menghitung muatan sumbu terberat?</h3>
      <p>Dump truk, Tangki dan Bus cocok untuk kalkulator ini. Ambillah sumbu terbesar, rata-rata sumbu terbesar berada pada sumbu belakang</p>
        <form class="sign-up-form" onSubmit={calMst}>
          <div class="form-group row my-2">
            <label class="col-2 col-form-label">Length</label>
            <div class="offset-2 col-8">
              <input class="form-control rounded-pill" type="number" value={length} onChange={(event) => setLength(event.target.value)}/>
            </div>
          </div>
          <div class="form-group row my-2">
            <label class="col-2 col-form-label">Payload</label>
            <div class="offset-2 col-8">
              <input class="form-control rounded-pill" type="number" value={payload} onChange={(event) => setPayload(event.target.value)}/>
            </div>
          </div>
          <div class="form-group row my-2">
            <label class="col-2 col-form-label">Wheelbase</label>
            <div class="offset-2 col-8">
              <input class="form-control rounded-pill" type="number" value={wheelbase} onChange={(event) => setWheelbase(event.target.value)}/>
            </div>
          </div>				
          <div class="form-group row my-2">
            <label class="col-2 col-form-label">q</label>
            <div class="offset-2 col-8">
              <input class="form-control rounded-pill" type="number" value={i} onChange={(event) => setI(event.target.value)}/>
            </div>
          </div>
          <div class="form-group row my-2">
            <label class="col-2 col-form-label">Haviest axis</label>
            <div class="offset-2 col-8">
              <input class="form-control rounded-pill" type="number" value={haviestaxis} onChange={(event) => setHaviestaxis(event.target.value)}/>
            </div>
          </div>

        <div class="text-center row justify-content-center">
          <button class="btn btn-success col-5 m-2" type="submit">Submit</button>
          <button class="btn btn-outline-primary col-5 m-2" onClick={handleClick}>Clear</button>
        </div>
    </form>
    <div className="text-center mt-2">
    <h5>{mst}</h5>
    <p>{message}</p>
    </div>
    </div>
  );
}

export default App;
