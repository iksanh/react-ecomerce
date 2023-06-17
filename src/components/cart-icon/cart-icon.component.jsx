import { useContext } from "react";
// import { ReactComponent as ShoopingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";
import { CartIconContainer, ShoopingIcon, ItemCount } from "./cart-icon.styles";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const isToggleCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={isToggleCartOpen}>
      <ShoopingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
