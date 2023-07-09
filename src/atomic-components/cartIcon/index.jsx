import styles from '../cart-icon.module.scss'
import React from 'react';
import cartIconSvg from '../../assets/cart_icon.svg'; 

const CartIcon = ({ cartItemsCount }) => {
  const {container,icon, count__notif} = styles;
  return (
    <div className={container}>
      <div>
        <img className={icon} src={cartIconSvg} alt='cart icon🛒' /> 
      </div>
      {cartItemsCount && (
        <span className={count__notif
        }>
          {cartItemsCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
