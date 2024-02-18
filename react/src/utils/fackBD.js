
   //* Add Data To Local Storage */
const addToDB  =(id) =>{
  
    let shoppingCart = {}
    //getPrevious Data From Local Storage.........
   const storeCart = localStorage.getItem('shopping-Cart');
   
   if(storeCart){
       shoppingCart = JSON.parse(storeCart);
   }
   //add quantity....:>:<:
   const quantity = shoppingCart[id];
   
   if(quantity){
       const newquantity= quantity + 1;
        shoppingCart[id] = newquantity;
   }
   else{
       shoppingCart[id]=1
   }  
   localStorage.setItem('shopping-Cart',JSON.stringify(shoppingCart));
       //localStorage.setItem('shopping-cart',id);
   }

// get stored data form cart::


const getStoreCart = () =>{
    let shoppingCart ={}

    const data = localStorage.getItem('shopping-Cart')
    if(data){
         shoppingCart = JSON.parse(data)
    }
    return shoppingCart
}

//Remove Specifie Element From Local Storage....
const removeFromDb = id=>{

    const storeCart = localStorage.getItem('shopping-Cart')
    if(storeCart){
        const shoppingCart = JSON.parse(storeCart)
        if(id in shoppingCart)
        {
            delete shoppingCart[id];
            localStorage.setItem('shopping-Cart',JSON.stringify(shoppingCart));
        }
    }

}
// clear All Data From Local Storage...
const deleteshoppingCart = () =>{

    localStorage.removeItem('shopping-Cart')

}





export {addToDB,getStoreCart,removeFromDb,deleteshoppingCart}