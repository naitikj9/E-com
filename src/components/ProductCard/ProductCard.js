import './ProductCard.css';
import AddToCart from '../AddToCart/AddToCart';
import { useRef, useState } from 'react';
import logo1 from '../../assests/logo1.png';
function ProductCard({ title, price }) {
  var a = 10;
  a = a + 1;
  let pRef = useRef(0);
  let iRef = useRef(0);
  let oRef = useRef(0);
  let [inputV, setInputV] = useState('Class');

  // setInput(value);
  function printTitle() {
    // console.log("printTitle");
    // console.log(pRef.current.innerText);
    if (pRef.current.style.display === "none") {
      pRef.current.style.display = "block";
    } else {
      pRef.current.style.display = "none";
    }
  }
  // console.log("Rerendered", inputV);
  function displayOutput(e) {
    // console.log(iRef.current);
    // console.log(oRef.current);
    // oRef.current.innerText = `Output here: ${ iRef.current.value }`;
    // oRef.current.innerText = oRef.current.innerText + iRef.current.value;
    setInputV(e.target.value);
  }

  return (
    <div className="product-card">
      <p onClick={printTitle}> {title}</p>
      <p ref={pRef}> {price.value}</p>
      <img src={logo1} />
      <input type="text" onChange={displayOutput} ref={iRef} value={inputV} />
      <p ref={oRef}>Over here the output would arrive - {inputV}</p>
      <AddToCart />
    </div>
    )
  }
  
export default ProductCard;
  

