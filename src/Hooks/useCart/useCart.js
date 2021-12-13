import { useContext } from "react";
import { UserContext } from "../../App";

export const useCart = () => {
  const { cartItems, setCartItems } = useContext(UserContext)

  const handleClear = () => {
    localStorage.clear();
  }

  const doubleAdded = (products, count) => {
    const exist = cartItems.find((x) => x._id === products._id);
    if (exist) {
      setCartItems(cartItems.map((x) => x._id === products._id ? { ...exist, qty: exist.qty + count } : x))
    } else {
      setCartItems([...cartItems, { ...products, qty: count }]);
    }
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
    }
  }


  return {
    onAdd,
    doubleAdded,
    onRemove,
    onItemRemove,
    handleClear
  }
}