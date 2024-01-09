import React ,{useEffect,useRef} from "react"
import  Chart  from "chart.js/auto"

const LineChart =()=>{
    const ChartRef =useRef(null);
    const ChartInstance =useRef(null)

    useEffect(()=>{
        if (ChartInstance.current){
            ChartInstance.current.destroy();
        }
        const myChartRef=ChartRef.current.getContext("2d")
        ChartInstance.current=new Chart(myChartRef,{
            type:"line",
            data:{
                labels:["12AM","1AM","2AM","3AM","4AM","5AM","6AM","7AM","8AM","9AM","10AM","Now","11AM","12AM","1PM","1.59PM"],
                datasets:[
                    {
                        label: 'revenue',
                        data:[12,13,15,16,20,20,29,19,23,21,25,23],
                        fill:false,
                        borderColor:"skyblue",
                        borderWidth:3,
                        backgroundColor:"skyBlue"
                    },
                    {
                        label: 'Expenses',
                        data: [10,9,11,13,15,16,15,18,17,16,14,13,15,16,17,15],
                        borderColor: 'rgba(255, 99, 132, 1)',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                      },
                ]
                
            }
            
        })
        return()=>{
            if(ChartInstance.current){
                ChartInstance.current.destroy()
            }
        }
    },[])

    return(
         <canvas ref={ChartRef} style={{width:"100%",height:'150px'}}/>
    )
}
export default LineChart