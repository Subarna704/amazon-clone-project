export const cart =[];

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