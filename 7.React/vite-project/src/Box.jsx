import "./Box.css"

function Description(props){ //First way to pass the args
  console.log(props);
    return(
    <p>Hello this is {props.title}</p>
    )
}   

function Something(props) { //First way to pass the args
    return <p>This is the First {props.title}</p>
  }
  
  function Label() {
    return <p>this is the label</p>
  }  
  function PassArray(props){
    //creating an objects
    let object = {a : "hello", b : "bello" , c : "cello"};
    let features =["hi-tech","durable","creatice"];
    return(
      <>
            <p>{features}</p>
            <p>{object.c}</p>
      </>

    )
  }
  function Box(){
    return (
       <div id="box">
        <Something title="Onkar sathe "/>
        <Description title = "onkar sathe"/>  
        <Label title = "   this is title "/>
        <PassArray arr={["I am","onkar","sathe"]}/>
        <PassArray obj={{a : "I am",b : "onkar",c :"sathe"}}/>  
       </div>                                                                                             
    )
  }
export default Box;