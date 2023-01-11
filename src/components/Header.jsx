import React from 'react';
import styles from './Header.module.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';

const Header = () => {
  const [{basket}] = useStateValue();
  return (
    <div className={styles.header}>
      <Link to='/'>
        <img
          className={styles.header__logo}
          src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='amazon-logo'
        />
      </Link>
      <div className={styles.header__search}>
        <input
          className={styles.header__searchInput}
          type='text'
          name=''
          id=''
        />
        <SearchIcon className={styles.header__searchIcon} />
      </div>
      <div className={styles.header__nav}>
        <Link to='/login'>
          <div className={styles.header__option}>
            <span className={styles.header__optionLineOne}>Hello Guest</span>
            <span className={styles.header__optionLineTwo}>Sign In</span>
          </div>
        </Link>
        <div className={styles.header__option}>
          <span className={styles.header__optionLineOne}>Returns</span>
          <span className={styles.header__optionLineTwo}>& Orders</span>
        </div>
        <div className={styles.header__option}>
          <span className={styles.header__optionLineOne}>Your</span>
          <span className={styles.header__optionLineTwo}>Prime</span>
        </div>
        <Link to='/checkout'>
          <div className={styles.header__optionBasket}>
            <ShoppingBasketIcon />
            <span
              className={`${styles.header__optionLineTwo} ${styles.header__basketCount}`}
            >
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
