import classes from './CartItem.module.css';


const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const sizes = Object.entries(props.size).map(([size, quantity]) => (
    <div className={classes.amount} key={size}>
      <span>{size} </span>
      <span>-{quantity}</span>
    </div>
  ));

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          {sizes}
        </div>
      </div>
    </li >
  );
};

export default CartItem;