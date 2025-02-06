import "./Box.css";

function Box(Props){
    let styles = {color : Props.message == "hello" ? "green" : "red"};
    return(<>
            <p style={styles}>{Props.message}</p>
        </>
    )
}
function MessageBox(){
    return <div id="message">
        <Box message="hello"/>
        <Box message="bye"/>
    </div>
}
export default MessageBox;