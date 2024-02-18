
import { Link, useLoaderData } from 'react-router-dom';
import CartItem from '../cartItem/CartItem';
import { deleteshoppingCart, removeFromDb } from '../../utils/fackBD';
import { useContext } from 'react';
import { CartContext } from '../../App';
import toast, { Toaster } from 'react-hot-toast'

const Cart = () => {
    // const [cart,setCart] = useState([])
    // calculation Section
 
const orderNow = () =>{
  if(newArr.length>0){
    
    deleteshoppingCart()
    return toast.success('Order is confirm 💚')
   

  }

 return toast.error('This is an error 🔥!');

}


// ccc
const [newArr,setNewArr] = useContext(CartContext)

    // Orginal Data...
    // const {newArr,products} = useLoaderData();

    // const [cart,setCart] = useContext(CartContext)

    let total =0
    if(newArr.length>0){
       for(const product of newArr){
           total = total+product.price * product.quantity;
      }
      
    }
    // useEffect(()=>{
    //     // let newArr= [];
    //     // const saveCart =  getStoreCart();
    //     // for(const id in saveCart){
    //     //  const foundProduct= pData.find(product=>product.id==id)
     
    //     //  if(foundProduct){
    //     //      foundProduct.quantity = saveCart[id];
    //     //      newArr.push(foundProduct);
    //     //  }
         
    //     // }
    //     // setCart(newArr)
    // },[])
 
    // console.log(pData);
    // const data = localStorage.getItem('shopping-Cart')
 
   const handlebtn=(id)=>{
    const remaing = newArr.filter(product => product.id !== id)
    setNewArr(remaing)
    removeFromDb(id);
    
   }
  //  clear Data from cart...
  const clearCart = ()=>{
    console.log('Ckick')
    deleteshoppingCart()
  }
    return (
        <div className='my-container product-container'>

           <div className='flex main-h-screen items-start justify-start
                          bg-gray-100 text-gray-900'>
              <div className='flex flex-col max-w-3xl  p-6 space-y-4 sm:p-10'>
               <h2>{newArr.length?'Review Cart Items': 'CART IS EMPTY'}</h2>

               <ul className='flex flex-col divide-y divide-gray-700' >
                      
               {
                newArr.map( product=><CartItem handlebtn={handlebtn}  total={total} key={product.id} product= {product} ></CartItem> )
               }
                    
               </ul>
               <div className='space-y-1 text-right' >
                    <p>Total amount: <span className='font-semibold' >{total}$</span> </p>
                    <p className='text-sm text-gray-400'>
                        Not including taxes and shipping costs
                    </p>
               </div>
               <div className='mx-2px space-x-4 flex justify-end '>
{/*  <button onClick={handlebtn} className='font-small  transition duration-200  shadow-md  md:mb-0  px-2 py-1 md:px-2 md:py-1 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 
hover:bg-cyan-400 bg-cyan-200'>Back To Shop</button> */}
              
                {
                  newArr.length>0? (<button onClick={clearCart} className='font-small  transition duration-200  shadow-md  md:mb-0  px-2 py-1 md:px-2 md:py-1 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 
                  hover:bg-cyan-400 bg-cyan-200'>Clear Cart</button>):(  <Link to='/shop'> <button onClick={handlebtn} className='font-small  transition duration-200  shadow-md  md:mb-0  px-2 py-1 md:px-2 md:py-1 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 
                  hover:bg-cyan-400 bg-cyan-200'>Back To Shop</button> </Link>)
                }
              
              

               
                 <button onClick={orderNow} className='font-small  transition duration-200  shadow-md  md:mb-0  px-2 py-1 md:px-2 md:py-1 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200'>Order_Now</button>
              
               
                
               </div>
             
              {/* onclick={()=>{handlebtn}} */}
             
            </div>
           
        </div>
   

          
        </div>
    );
};

export default Cart;