import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "./cart.css";
import Modal from "react-modal";
import { connect } from "react-redux";
import Content from "../Content";
import ModalForm from "../ModalForm";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  const [openModal, setOpenModal] = useState(false);
  const makeModalOpen = () => {
    setOpenModal(true);
  };
  Modal.setAppElement("#root");
  return (
    <div id="cartContainer">
      {cart.length === 0 ? (
        <div className="yourCart">
          <h2>Your Cart Is Empty!</h2>
        </div>
      ) : (
        <div className="yourCart">
          <h2>Your Cart</h2>
          <div className="ui segments">
            {cart.map((item) => (
              <CartItem key={item.id} itemData={item} />
            ))}
          </div>
          <div>
            <div>
              <h3>Summary</h3>
            </div>
            <div className="ui segment" id="summary-box">
              <div id="items-and-price">
                <span id="itemCount">{totalItems} Items</span>
                <span>
                  <b>$ {totalPrice.toFixed(2)}</b>
                </span>
              </div>
              <button className="positive ui button" onClick={makeModalOpen}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      <Modal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        id="modal"
        className="ui fluid card"
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            maxHeight: "100%",
            padding: "3rem",
          },
          content: {
            maxWidth: "600px",
            margin: "auto",
            padding: "1.5rem",
            maxHeight: '80%',
            overflow: 'auto'
          },
        }}
      >
        <div></div>
        <div>
          <ModalForm totalPrice={totalPrice} setOpenModal={setOpenModal} />
        </div>
      </Modal>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);

//AIzaSyA5GNEPKXOC5dF7-Koa9I8qZYnVam3Kj9M
