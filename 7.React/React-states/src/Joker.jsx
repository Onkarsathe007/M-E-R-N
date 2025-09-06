import { useState } from "react";

function Joker() {
  const api = "https://api.github.com/users/Theprimeagen"; 

  const [data, setData] = useState({
    location: "",
    login:""
  });

  async function fetchData() {   
    try {
      const response = await fetch(api);
      const jsonData = await response.json();

      setData((prevData) => ({
        ...prevData,
        location: jsonData.location,
        login: jsonData.login
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div>
      <p>{data.location}</p> {/* show from state */}
      <p>{data.login}</p> {/* show from state */}
      <button type="button" onClick={fetchData}>Click</button>
    </div>
  );
}

export default Joker;

