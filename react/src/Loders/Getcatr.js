import { getStoreCart } from "../utils/fackBD";




const productData = async() =>{

    const productData = await fetch('products.json')
    const products = await productData.json()

    const saveCart =  getStoreCart();
    let newArr= [];
    for(const id in saveCart){
     const foundProduct= products.find(product=>product.id==id)
    
     if(foundProduct){
         foundProduct.quantity = saveCart[id];
         newArr.push(foundProduct);
     }
     
    }
    // setCart(newArr)
    return {newArr,products} 





}
export {productData}