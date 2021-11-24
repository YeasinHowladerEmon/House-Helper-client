import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";

export const useCart = () => {
    // const items = () => localStorage.getItem("cartItems")

    // const addItem = (item) => {
    //     const previousItems = items() || []
    //     const removedItems = previousItems.filter(i => i._id !== item._id) || []
    //     localStorage.setItem("cartItems", JSON.stringify([...removedItems, item]))
    // }
    // const removeItem = (id) => {
    //     const removedItems = items()?.filter(item => item._id !== id)
    //     localStorage.setItem("cartItems", JSON.stringify(removedItems))
    // }

    const { cartItems, setCartItems } = useContext(UserContext)

     const handleClear = () => { 
      localStorage.clear();
}

  const onAdd = (products) => {

    const exist = cartItems.find((x) => x._id === products._id);

    if (exist) {
      setCartItems(cartItems.map((x) => x._id === products._id ? { ...exist, qty: exist.qty + 1 } : x))

    } else {
      setCartItems([...cartItems, { ...products, qty: 1 }]);
    }
  }
  const onRemove = (products) => {
    const exist = cartItems.find((x) => x._id === products._id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== products._id))
    } else {
      setCartItems(cartItems.map((x) => x._id === products._id ? { ...exist, qty: exist.qty - 1 } : x))
    }
  }
  const onItemRemove = (products) => {
    const exist = cartItems.find((x) => x._id === products._id);
    if (exist.qty) {
      setCartItems(cartItems.filter((x) => x._id !== products._id))
    } else {
      setCartItems([...cartItems, { ...products, qty: 0 }]);
    }
  }




    return {
        onAdd,
       onRemove,
       onItemRemove,
       handleClear
    }
}