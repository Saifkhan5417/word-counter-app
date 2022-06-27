// import React , {useState} from 'react'

export default function About(props) {
    // const [myStyle, setmyStyle] = useState(
    //   {  backgroundColor : 'black',
    //     color : 'white'}
    // ) 
    //  const [myStyle, setmyStyle] = useState( {
    //     backgroundColor : 'white',
    //        color : 'black'  
    // }) 
//     const [btn, setbtn] = useState('Enable Dark Mode')
//    const toggleStyle = () =>{
//        if (myStyle.color === 'white') {
//            setmyStyle( {
//             backgroundColor : 'white',
//                color : 'black' , 
//                border : '2px solid white'
//             })
//             setbtn("Dark Mode")
//         }
//         else{
//             setmyStyle( {
//                 backgroundColor : 'black',
//                 color : 'white'  ,
//                 border : '2px solid white'
//         })
//         setbtn("Light Mode")
//        }
//    }
const myStyle = {

      color:props.mode==='dark'?'white':'black',
      backgroundColor:props.mode==='dark'? '#05505b' : 'white'
    //   border : '2px solid',
    //   borderColor:(props.mode=== 'dark' ? 'white' : '#06353c'),
    //   border : 'none'
}
   
    return (
        // <div className = "container style">
            <> 
            <div className="container">
            <div className="container my-3 " style={ {color:props.mode==='dark'?'white':'black'}} >
            <h1>{props.about}</h1> 

            </div>

           
            <div   className="  accordion"  id="accordionExample">
                <div   className="accordion-item" style={myStyle}>
                    <h2   className="accordion-header"  id="headingOne">
                    <button   className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       About Me as App Developer
                    </button>
                    </h2>
                    <div id="collapseOne"   className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div   className="accordion-body">
                        <strong>Hello,  World</strong> I am Saif , I am bachelor of computer application, I complete my BCA from Makhan Lal Chaturvadi Univercity , Bhopal <strong> And I want to be a professional Software Developer</strong> Thank you.
                    </div>
                    </div>
                </div>
                <div   className="accordion-item" style={myStyle}>
                    <h2   className="accordion-header"  id="headingTwo">
                    <button   className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        About App
                    </button>
                    </h2>
                    <div id="collapseTwo"   className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div   className="accordion-body">
                        <strong>Hello, World </strong> This is words & letters counter app, you can count your words & letters and convert your text to uppercase to lowercase and removes extra spaces. This application is based on React And Bootstrap.<strong> It tells you how much time you need to read the text which is in text section </strong> Thank you,
                    </div>
                    </div>
                </div>
                {/* <button onClick = {toggleStyle} className="btn btn-primary my-3">{btn}</button> */}
                </div>
</div>    </>
        
    )
}
