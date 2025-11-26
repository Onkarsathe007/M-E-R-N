import {useState} from "react";
import UserInfo from "./UserInfo.jsx";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
function SearchAppBar() { 
  var [data,setData] = useState("");
  var [user,setUser] = useState(null);

  function chageHandler(event) {
    setData(event.target.value)
    console.log(event.target.value)
  } 

  async function fetchData(event) {
    event.preventDefault();
    try {
      const response = await fetch(`https://api.github.com/users/${data}`);
      const user = await response.json();
      setUser(user)
      console.log(user); 
    } catch (err) {
      console.error("Error fetching data:", err);
    }      
  }

  return(
    <div style={{
      display: "grid",
      placeItems: "center",
      height: "100vh"
    }}>
     <form>
        <TextField label="Outlined secondary" color="secondary"  name="data" onChange={chageHandler} focused />
        <br/>
        <br/>
        {data === "" ?<Alert severity="warning">enter any username please.</Alert>:""}
        <br/>
        <br/>
        <Button variant="outlined" type='submit' color="black" onClick={fetchData} >Fetch</Button> 
      </form>
    <UserInfo user = {user}/>
    </div>
  );
}

export default SearchAppBar;
