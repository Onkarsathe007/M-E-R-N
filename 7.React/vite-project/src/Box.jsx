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
  function Box(){
    return (
       <div id="box">
        <Something title="Onkar sathe "/>
        <Description title = "onkar sathe"/>  
        <Label title = "   this is title "/>
       </div>
    )
  }
export default Box;