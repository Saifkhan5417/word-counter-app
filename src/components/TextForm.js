import React , {useState} from 'react';


export default function TextForm(props) {
   
    const handleUpClick = () =>{
        console.log("Upper Case Was clicked") 
        let newtext = (text.toUpperCase())
        setText(newtext);
        props.showAlert("Converted to Uppercase" , "success");
    }

    const handleLoClick = () =>{
        console.log("Upper Case Was clicked") 
        let newtext = (text.toLowerCase())
        setText(newtext);
        props.showAlert("Converted to Lowercase" , "success");
    }

    // const bold = () =>{
    //     console.log("Upper Case Was clicked") 
    //     let newtext = document.getElementById("mybox")
    //     // newtext.bold();
    //     setText(newtext.bold());
    //     props.showAlert("Converted to Lowercase" , "success");
    // }

    const handletrim = () =>{
         
        let newtext = (text.split(/[ ]+/))
        setText(newtext.join(" "));
        props.showAlert("Remove Extra Spaces" , "success");
    }
  
    
    const handlecopy = () =>{
        // alert("Your Text Copied") 

    
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard" , "success");
    }
    const Erase = () =>{
       
        let newtext = ("")
        setText(newtext);
        props.showAlert("Erased All Text" , "success");
    } 
  

 
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    //  BOLD BUTTON
    // let myStyle = {
    //   color:'blue'
    // }

    
    const [text, setText] = useState('');
 
    // if you want to change your text in future then, use setText to change the state 
    // setText("This is my update text") ;
    return (
        <>
        <div className=" container mb-3 my-5 ">

        <h1>{props.heading}</h1>

        {/* <label for="mybox" className="form-label">Example textarea</label> */}
        <textarea className="form-control" value= {text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'#06353c':'white',  color:props.mode==='dark'?'white':'black'}} id="mybox" rows="12"></textarea>
        <button disabled = {text.length===0} className="btn btn-primary my-5" onClick={handleUpClick}> Convert To UpperCase</button>
        <button disabled = {text.length===0} className="btn btn-primary my-5 mx-2" onClick={handleLoClick}> Convert To LowerCase</button>
        <button disabled = {text.length===0} className="btn btn-primary my-5 mx-2" onClick={Erase}> Erase </button>
        <button disabled = {text.length===0} className="btn btn-primary my-5 mx-2" onClick={handlecopy}>  Copy </button>
        <button disabled = {text.length===0} className="btn btn-primary my-5 mx-2" onClick={handletrim}> Remove Extra Spaces </button>
   
      </div>
      <div className="container"> 
      <h1>Configration of words and letters</h1>
         {text.split(/\s+/).filter((element)=>  {return element.length!==0}).length} words and {text.length} letters.
         {/* <h2>What Time Required For Learn</h2> */}
       <p>
           {0.008 * text.split("").filter((element)=> {return element.length!==0}).length } : Minutes Read.
           </p>  
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
      </>
    )
}


