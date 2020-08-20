 export const initialState={
     basket: [
    {

        id:"123455",
        title:"Xbox One Wireless Controller with Bluetooth (With 3.5 mm Jack) (White)",
        price:18.53,
        rating:4,
        image:"https://cdn.cnn.com/cnnnext/dam/assets/191004113818-underscored-iosgames-xbox-live-video.jpg"
    
     },

     {

        id:"123455",
        title:"Xbox One Wireless Controller with Bluetooth (With 3.5 mm Jack) (White)",
        price:18.53,
        rating:4,
        image:"https://cdn.cnn.com/cnnnext/dam/assets/191004113818-underscored-iosgames-xbox-live-video.jpg"
    
     }
    
    
    ],  
        user: null,  
 };


 export const getBasketTotal= (basket) =>
 basket?.reduce((amount, item)=>item.price + amount,0);

const reducer = (state, action)=>{

console.log(action);

    switch(action.type)
    {
        case "ADD_TO_BASKET":
        //Logic for adding item to basket
         return{
             ...state,
             basket:[...state.basket, action.item] 
            };  
        
        
        case "REMOVE_FROM_BASKET":
        //Logic for removing item from the basket


            //we cloned the basket
        let newBasket= [...state.basket];



        //we check if there is item in the basket
        const index=state.basket.findIndex((basketItem)  => basketItem.id=== action.id);
        if(index >=0)
        {
                // item is there---remove it

                newBasket.splice(index, 1);
                

        }else{
                console.warn(
                    'Can not remove product  (id : ${action.id}) as it is not in Basket! '
                 );
        }



        return{ ...state, basket: newBasket }; 
        

        default: 
            return state;
    }
};

export default reducer;