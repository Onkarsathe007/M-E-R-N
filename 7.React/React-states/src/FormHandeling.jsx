import {useState} from "react";
function Form() {
  const [formData,setForm] = useState({
    fullName:"",
    age:18
  });

   function setFormData(event) {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;
    setForm((prev)=>{
         return {...prev,[fieldName]:fieldValue}
    });
   }
    function setSubmit(e) {
        e.preventDefault();
    }

    return(
    <div> 
    <form onbSubmit={setSubmit}>
      <input 
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={setFormData}
        />

      <br/>
      <br/>

      <button type="">submit</button>
    </form>
    </div>
    )
}
export default Form; 
