export const cart =[{
    productId: "e43638ce-6aa0-4b85e1d07eb678c6",
    quantity: 2
    },
{   
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1
    
}, {
    productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    quantity: 2
}];

export function addToCart(productId){
    let selects = document.querySelectorAll(`.js-quantity-selector-${productId}`);
        let qnty;
     selects.forEach((select) => {
          qnty=Number(select.value);
        })
    let matchingItem;
  
          cart.forEach((cartItem) =>{
              if(productId===cartItem.productId){
                  matchingItem=cartItem;
              } 
          })
         
  
              if(matchingItem){
                  matchingItem.quantity += qnty;
                  
              }
              else {
                  cart.push({
                      productId: productId,
                      quantity: qnty
                  
                  })
              }
  }