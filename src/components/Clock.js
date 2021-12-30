import React,{useState,useEffect} from 'react'
import './styles/Clock.css'

function Clock() {

    const [upadate, setSeg] = useState(0)

    //Serves to update the page
   useEffect(() => {
       const time = setInterval(()=>{
        setSeg(seg => seg + 1);
       },1000)
       return () => {
           clearInterval(time)
       }
   }, [upadate])

   const seconds = new Date().getSeconds();
   const minutes = new Date().getMinutes();
   const hours = new Date().getHours();

   var degress = hours > 12 ? 15 : 30

   console.log(hours * 30)

    return (

        <div className='clock'>
            <div className="center"></div>
            <div className="wraperSeg" style={{transform:`rotate(${seconds * 6}deg)`}}>
                <figure id="finePointer"></figure>
            </div>
            <div className="wraperMin" style={{transform:`rotate(${minutes * 6}deg)`}}>
                <figure id="longerPointer"></figure>
            </div>
            <div className="wraperHours" style={{transform:`rotate(${hours * degress}deg)`}}>
                <figure id="smallPointer"></figure>
            </div>
        </div>
    )
}

export default Clock

