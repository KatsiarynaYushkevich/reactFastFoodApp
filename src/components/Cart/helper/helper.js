export const changeQuantity = (id, change,cart,setCart) => {
    const currItemQuantity = cart.find(item => item.id == id).quantity;
    if(currItemQuantity === 1 && change === -1){
        setCart(cart.filter(item => item.id !== id));
        return;
    }
    const itemsArray = cart.map((item) => {
        if (item.id === id) {
            const newQuantity = item.quantity + change;
            return {
                ...item, quantity: Math.max(1, newQuantity)
            }
        }
        return item
    })

    setCart(itemsArray);
};