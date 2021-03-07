// 6. Grocery App
import React from 'react';
const Product = props => {
    const plus = () => {

  props.onVote('+', props.index)
    };
    const minus = () => {
      props.onVote('-', props.index)
    };
    return (
       <div>

      <li>
        <span>{props.products.name}</span> - <span>votes: {props.products.votes}</span>
        <button onClick={plus}>+</button>{" "}
        <button onClick={minus}>-</button>
        
      </li>
   
       </div>
    );
  };
  
  const GroceryApp = (props) => {
    let [products, setProducts] = React.useState(props.products);
    const onVote = (dir, index) => {
      if(dir === '+'){ 
          const newProduct = [...products];
          const product = products[index];
          newProduct[index] = {...products,name:product.name, votes:product.votes + 1}
        setProducts( newProduct )

    }else{
        const newProduct = [...products];
          const product = products[index];
          newProduct[index] = {...products,name:product.name, votes:product.votes - 1}
        setProducts( newProduct )

    }
}
    return (
    <div>
      <ul>
       {products.map((item, id) => (
           <Product key={item.id} 
            index={id}
            onVote={onVote} 
            products={item} 
           />

       ))}
      </ul>
      
        <p>--------------#6-Grocery App-------------</p></div>
    );
  }
  
export default GroceryApp