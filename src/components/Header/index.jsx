import styles from './header.module.scss';
import React from 'react';
import CartIcon from '../../atomic-components/cartIcon';

const Topbar = ({ restroName, tableNum }) => {
  const {container,restro__details, restro__title, table__num, cart__info } = styles;
  return (
    <div className={container}>
      <div className={restro__details}>
        <div className={restro__title}>{restroName}</div>
        <div className={table__num}>Table No.: {tableNum}</div>
      </div>
      <div className={cart__info}>
        <CartIcon cartItemsCount={1} />
      </div>
    </div>
  );
};

export default Topbar;
