type Product = {
  id: number;
  name: string;
};

function Component1() {
  function handleClick() {
    alert("the click evern occred");
  }
  const products: Product[] = [
    { id: 1, name: "Onkar" },
    { id: 2, name: "Mayur" },
    { id: 3, name: "Suhas" },
  ];

  const listItems = products.map((product) => (
    <li key={product.id}>{product.name}</li>
  ));

  return (
    <>
      <ul>{listItems}</ul>
      <button onClick={handleClick}> click me </button>
    </>
  )
}

export default Component1;
