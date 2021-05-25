import React,{useEffect,useState} from 'react'
let pos = 0
let opa = 1
function Word(props) {
    const array=[" Skills"," career"," Projects"]
    const[text,setText] = useState("Skills");
    let count = 0;
    let styleCount = 0
    const classes=["fade-in","fade-out"]
    const [style,setStyle]= useState(classes[styleCount]) 
    const changeWord=(numberOfSeconds,array)=>{
     setInterval(()=>{
      
         count = count + 1 
         count = count % 3 
         setText(array[count])          
        },numberOfSeconds*1000) 
    }
    const changestyle=(numberOfSeconds,array)=>{
        setInterval(()=>{
           
            styleCount = styleCount + 1 
            styleCount = styleCount % 2
            setStyle(array[styleCount])          
           },numberOfSeconds*1000) 
       }

 

    useEffect(
        ()=>{
            changeWord(3,array)  
            changestyle(1.5,classes)         
        },[count]
    )
    return (      
             <span className={"word "+ style}>{text}</span>
        
    )
}

export default Word
