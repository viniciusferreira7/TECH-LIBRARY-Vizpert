import React,{useState, useEffect} from 'react'
import './styles/Clock.css'

function Clock() {

    const [seg, setSeg] = useState(0)
    const [min, set] = useState(0)

   useEffect(() => {
       const time = setInterval(()=>{
            setSeg(seg => seg + 6)
       },1000)
       return () => {
           clearInterval(time)
       }
   }, [])



   console.log(seg)

    return (

        <div className='clock'>
            <div className="wraperMin">
                <figure id="longerPointer"></figure>
            </div>
            <div className="wraperHours">
                <figure id="smallPointer"></figure>
            </div>
            <div className="wraperSeg" style={{transform:`rotate(${seg}deg)`}}>
                <figure id="finePointer"></figure>
            </div>
        </div>
    )
}

export default Clock

