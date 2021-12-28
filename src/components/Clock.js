import React,{useState, useEffect} from 'react'
import './styles/Clock.css'

function Clock() {

    const [seg, setSeg] = useState(0)
    const [min, setMin] = useState(0)
    const [hours, setHours] = useState(0)

   useEffect(() => {
       const time = setInterval(()=>{
            setSeg(seg => seg + 6)
       },1000)
       return () => {
           clearInterval(time)
       }
   }, [])

   if(seg === 360){
       setSeg(0)
    setMin(min + 6)
    }

    if(min === 360){
        setMin(0)
        setHours(hours + 6)
    }


    return (

        <div className='clock'>
            <div className="center"></div>
            <div className="wraperSeg" style={{transform:`rotate(${seg}deg)`}}>
                <figure id="finePointer"></figure>
            </div>
            <div className="wraperMin" style={{transform:`rotate(${min}deg)`}}>
                <figure id="longerPointer"></figure>
            </div>
            <div className="wraperHours" style={{transform:`rotate(${hours}deg)`}}>
                <figure id="smallPointer"></figure>
            </div>
        </div>
    )
}

export default Clock

