import ProductCard from "../ProductCard/ProductCard";
import Effect from "../Effect/Effect";
import { useState, useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";
function Products() {
    

  let [products, setProducts] = useState([]);

  console.log(useWindowSize());
  useEffect(() => {
    fetch("#").then(
      (response) => {
        return response.json();
      }
    ).then((res) => {
      console.log(res);
      setProducts(res);
    })
  }, [])

  
    return (
      <div>
          <div><Effect /></div>
            {
                products.map(function (item, index) {
                  return (<ProductCard key={index}  title={item.title} price={item.price} />)
                })
            }
        </div>
    )
}
export let a = 10;
export let b = 20;
export default Products;

//ProductCard(title)
//named export 
//default export
// One default export
// multiple named exports

//   return (
//     <div>
//       <ul id="ul" className="list">
//         <li id="item-1"><a>Item 1</a></li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//         {show && <li>Item 4</li>}
//       </ul>
//       <button onClick={() => setShow(!show)}>
//         Toggle
//       </button>
//     </div>
//   )
// }


// VDOM -> JSON reprentation of DOM
// let currentVdom = {
//   nodeName: 'div',
//   children: [
//     {
//       nodeName: 'ul',
//       properties: {
//         className: 'list',
//         children: [
//           {
//             nodeName: 'li',
//             properties: {
//               id: 'item-1',
//               children: [
//                 {
//                   nodeName: 'a',
//                   children: ['Item 1']
//                 }
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 2'
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 3'
//               ]
//             }
//           }
//         ]
//       }
//     },
//     {
//       nodeName: 'button',
//       children: ['Toggle']
//     }
//   ]
// }

// let newVDom = {
//   nodeName: 'div',
//   children: [
//     {
//       nodeName: 'ul',
//       properties: {
//         className: 'list',
//         children: [
//           {
//             nodeName: 'li',
//             properties: {
//               id: 'item-1',
//               children: [
//                 {
//                   nodeName: 'a',
//                   children: ['Item 1']
//                 }
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 2'
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 3'
//               ]
//             }
//           },
//           {
//             nodeName: 'li',
//             properties: {
//               children: [
//                 'Item 4'
//               ]
//             }
//           }
//         ]
//       }
//     },
//     {
//       nodeName: 'button',
//       children: ['Toggle']
//     }
//   ]
// }

// diff = diffAndApplyChanges(vDom, newVdom);
// {
//   action: 'addNode',
//   nodeDetails: {
//     nodeName: 'li',
//     properties: {
//       children: [
//         'Item 4'
//       ]
//     }
//   }
// }

// oldDom = [
//   <ProductCard title="Title 1" />,
//   <ProductCard title="Title 2" />,
//   <ProductCard title="Title 3" />
// ]

// newDom = [
//   <ProductCard title="Title 1" />,
//   <ProductCard title="Title 4" />,
//   <ProductCard title="Title 2" />,
//   <ProductCard title="Title 3" />
// ]

// title 2 has changed to 4
// title 3 has changed to 2
// product card with title 3 has to be added


// oldDom = [
//   <ProductCard key={i1} title="Title 1" />,
//   <ProductCard  key={i2} title="Title 2" />,
//   <ProductCard  key={i3} title="Title 3" />
// ]

// newDom = [
//   <ProductCard  key={i1} title="Title 1" />,
//   <ProductCard  key={i4} title="Title 4" />,
//   <ProductCard  key={i2} title="Title 2" />,
//   <ProductCard  key={i3} title="Title 3" />
// ]

// product card with key i4 and title 4 has to be added
// oldDom = [
//   <ProductCard key={0} title="Title 1" />,
//   <ProductCard key={1} title="Title 2" />,
//   <ProductCard key={2} title="Title 3" />
// ]

// newDom = [
//   <ProductCard key={0} title="Title 1" />,
//   <ProductCard key={1} title="Title 4" />,
//   <ProductCard key={2} title="Title 2" />,
//   <ProductCard key={3} title="Title 3" />
// ]

// change title 2 to 4
// change title 3 2
// add product card with key 3 and title 3