function fun() {
  const br = document.createElement("br");
  //form1
  const form = document.createElement("form");
  form.action = "/task"; // You can set your desired action URL
  form.method = "POST";

  // //form2
  // const updateform = document.createElement("form");
  // updateform.action = "/task"; // You can set your desired action URL
  // updateform.method = "PUT";
  // const updateBtn = document.createElement("button");
  // updateform.appendChild(

  const input = document.createElement("input");
  input.type = "text";
  input.name = "task";
  input.placeholder = "Enter your task";
  input.required = true;

  const inputprio = document.createElement("input");
  inputprio.type = "text";
  inputprio.name = "priority";
  inputprio.placeholder = "Enter your task";
  inputprio.required = true;

  form.appendChild(br);

  form.appendChild(input);
  form.appendChild(inputprio);

  // Optionally add a submit button
  const btn = document.createElement("button");
  btn.type = "submit";
  btn.textContent = "Submit";

  form.appendChild(btn);

  document.body.appendChild(form);
}
