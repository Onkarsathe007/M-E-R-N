let url = "http://universities.hipolabs.com/search?name=";


let btn = document.querySelector("button");

function show(clgArr){
    let list = document.querySelector("#list");
    list.innerHTML = "";
    for(clg of clgArr)
    {
        console.log(clg);
        let li =  document.createElement("li");
        li.innerHTML = `${clg.name} <br> State : ${clg["state-province"]}`;
        list.append(li)
        console.log(clg.name);
    }
}
btn.addEventListener("click", async ()=>{
    let country = document.querySelector("input").value;
    let colleges =await getColleges(country);
    // console.log(colleges);
    show(colleges)
});

async function getColleges(country) {
    try{
      let res =   await axios.get(url + country);
    //   console.log(res.data)
      return res.data;
    }catch(e){
        console.log(e);
        return [];
    }
}