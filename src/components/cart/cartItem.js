import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import './cartItem.css';
import { addCart, removeCart } from '../../redux/action';
import { Link } from 'react-router-dom';

const CartItem = () => {
  const cartItems = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const total = cartItems.reduce((cur, item) => cur + item.subtotal, 0);

  const handleAddButton = (product) => {
    dispatch(addCart(product));
  };

  const tableContent = cartItems.map((item) => {
    return (
      <tr className='cart-list' key={item.id}>
        <td>
          <img src={item.imageUrl} alt={item.name} />
        </td>
        <td>{item.name}</td>
        <td>${item.price}</td>
        <td>
          <div className='btns'>
            <button className='minus' onClick={() => handleRemoveButton(item)}>
              <AiOutlineMinus />
            </button>
            <span>{item.qty}</span>
            <button
              className='plus'
              onClick={() => {
                handleAddButton(item);
              }}
            >
              <AiOutlinePlus />
            </button>
          </div>
        </td>
        <td>$ {item.subtotal.toFixed(2)}</td>
      </tr>
    );
  });

  const handleRemoveButton = (product) => {
    dispatch(removeCart(product));
  };

  const emptyCart = (
    <div className='emptyCart'>
      <h3>
        Your cart is empty <BsCart3 size={50} />
      </h3>
    </div>
  );

  return (
    <div className='cart_lists'>
      <table className='cart_list'>
        <tbody>
          <tr className='cart-list list-flex'>
            <th>image</th>
            <th>product</th>
            <th>price</th>
            <th>quanity</th>
            <th>subtotal</th>
          </tr>
          {cartItems.length === 0 ? emptyCart : tableContent}
        </tbody>
      </table>
      <div className='cart_totals'>
        <h1 className='cart_heading'>cart totals</h1>
        <div className='totals'>
          <div className='sub_totals'>
            <p className='sub'>Subtotal</p>
            <p className='sub_price'>${total.toFixed(2)}</p>
          </div>
          <div className='final_totals'>
            <p className='final'>Total</p>
            <p className='final_price'>${total.toFixed(2)}</p>
          </div>
        </div>
        <Link to='/thanks' className='total_btn'>
          proceed to checkout
        </Link>
      </div>
    </div>
  );
};

export default CartItem;
