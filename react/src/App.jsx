
import Header from './Component/Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import { createContext, useState } from 'react';



// export const ProductContext = React.createContext([]);
// export const CartContext = React.createContext([]); 
export const ProductContext = createContext([])
export const CartContext =    createContext([])

const App = () => {
  const { newArr, products } = useLoaderData()
  // for daynamic cart state..
  const[cart, setCart] = useState(newArr)
  console.log(products)
  console.log(cart)
  
  return (
<ProductContext.Provider value={products}>
  <CartContext.Provider value={[cart,setCart]}>   
     <Header></Header>
      <div className='min-h-[calc(100vh-137px)]' >
        <Outlet />
      </div>
      <Footer></Footer>
  </CartContext.Provider>
</ProductContext.Provider>

     


  

    

     


  );
};

export default App;