import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../productCart/ProductCart';
import { addToDB } from '../../utils/fackBD';
import { CartContext, ProductContext } from '../../App';

const Shop = () => {
//  const data = useLoaderData();
const [newArr,setNewArr] = useContext(CartContext)

    // const data = useContext(ProductContext);

const data = useContext(ProductContext);




    const handelbtn = (product) =>{

    let newCart =[];
    const exist = newArr.find(existingproduct=>existingproduct.id === product.id)
    if(!exist){
        product.quantity =1;
        newCart = [...newArr,product]


    }
    else{

        const rest = cart.filter(existingproduct=>existingproduct.id !== product.id)
        exist.quantity = exist.quantity + 1;
        newCart = [...rest,exist]

    }

       setNewArr(newCart)
        addToDB(product.id);
    }
    return (
        <div className='my-container product-container'>
         
            {
                data.map(products=><ProductCard key={products.id} product = {products}
                    handelbtn ={handelbtn}
                >

                </ProductCard>)
            }
        </div>
    );
};

export default Shop;