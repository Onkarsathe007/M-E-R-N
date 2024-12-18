let url = "https://jsonplaceholder.typicode.com/users/";
let btn = document.querySelector("button");
let paras =document.querySelectorAll("p");
btn.addEventListener("click",async ()=>{
    let alldata =  await getUser();
    // console.log(alldata);
    let randIndex = Math.floor(Math.random() * 10) + 1;
    
    paras[0].textContent = `ID : ${alldata[randIndex].id}`;
    paras[1].textContent = `Name : ${alldata[randIndex].name}`;
    paras[2].textContent = `Username: ${alldata[randIndex].username}`;
    paras[3].textContent = `Email : ${alldata[randIndex].email}`;
    paras[4].textContent = `Phone NO: ${alldata[randIndex].phone}`;

})
async function getUser()
{
    let res = await axios.get(url);
    return res.data;
}