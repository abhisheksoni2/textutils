import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Upper case was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = ()=>{
        //console.log("Upper case was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = ()=>{
        //console.log("Upper case was clicked" + text)
        let newText = "";
        setText(newText)
    }

    const handleOnChange = (event)=>{
        //console.log("On Changed")
        setText(event.target.value)
    }

    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    const [text, setText] = useState('');
    // text = "new text"; //Wrong way to change the state
    // setText = ("new text"); //Wrong way to change the state
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange}  value= {text} style={{backgroundColor: props.mode === 'dark'?'#042743':'white' ,
            color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-dark" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-dark mx-1" onClick={handleLowClick}>Convert to Lower Case</button>
            <button className="btn btn-dark mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
            <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear Text</button>


        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length}-Words and {text.length}-Characters</p>
            <p>{0.008 * text.split(" ").length} takes minutes to read this.</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter in the above box to preview it !"}</p>
        </div>
        </>
  )
}
 