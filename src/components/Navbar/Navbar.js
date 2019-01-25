import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li className={ `${classes.item} ${classes.active}` }>
          <a src="#">Profile</a>
        </li>
        <li className={classes.item}>
          <a src="#">Messages</a>
        </li>
        <li className={classes.item}>
          <a src="#">News</a>
        </li>
        <li className={classes.item}>
          <a src="#">Music</a>
        </li>
        <li className={classes.item}>
          <a src="#">Settings</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
