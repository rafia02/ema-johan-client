import { getStoredCard } from "../utilities/fakedb"


export const addToCart = async()=>{
    const productData = await fetch('products.json')
    const products = await productData.json()
    
    const saveCard = getStoredCard()
    const previesProduct = []
    for(const id in saveCard){
        if(saveCard){
            const addedProduct = products.find(product => product.id === id)
            const quantity = saveCard[id]
            addedProduct.quantity = quantity
            previesProduct.push(addedProduct)
        }
    }


    return {products, previesProduct}
}