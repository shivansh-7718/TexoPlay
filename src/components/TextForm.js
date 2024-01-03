import React ,{useState}from 'react'


export default function TextForm (props)
 {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","Sucess");

    }

    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","Sucess");

    }

    const handleClear=()=>{
        let newText=" ";
        setText(newText);
        props.showAlert("Text Cleared","Sucess");

    }

    const handleCopy = () => {
      navigator.clipboard.writeText(text);
      props.showAlert("Text Copied","Sucess");
    }



    const handleOnChange=(e)=>{
        console.log("on change");
        setText(e.target.value);

    }
  
  const[text,setText]=useState("")
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
       <h1>{props.heading}</h1> 
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#343a40':'white', color: props.mode==='light'?'black':'white'}}  id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>  
       <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
       <button className='btn btn-primary m-4' onClick={handleLoClick}>Convert to Lowercase</button>
       <button className='btn btn-primary m-4' onClick={handleClear}>Clear</button>
       <button className='btn btn-primary m-4' onClick={handleCopy}>Copy</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } Minutes Reading Time</p>
        <h1>Preview</h1>
        <p>{text.length>0?text:"Enter Something Above"}</p>
    </div>
    </>
  )
}

