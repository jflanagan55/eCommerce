import React,{useState, useEffect} from 'react'
import CartItem from './CartItem'
import './cart.css'
import Modal from 'react-modal'
import {connect} from 'react-redux'
import Content from '../Content'
import ModalForm from '../ModalForm'

const Cart = ({cart}) =>{
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)

    useEffect(()=>{
        let items = 0;
        let price = 0;
        
        cart.forEach(item =>{
            items += item.qty;
            price += item.qty*item.price
        })

        setTotalPrice(price)
        setTotalItems(items)
    },[cart, totalPrice, totalItems, setTotalPrice, setTotalItems])

    const[openModal, setOpenModal] = useState(false);
    Modal.setAppElement('#root')
    return (
    <div>
        <h2>Your Cart</h2>
        <div className='cartItemContainer'>
            {cart.map((item) =>(
                <CartItem key = {item.id} itemData = {item}/>
            ))}
        </div>
        <div className='cartSummary'>
            <div>
                <h3>Summary</h3>
            </div>
            <div className='itemsAndPrice'>
                <span id='itemCount'>{totalItems} Items</span>
                <span><b>$ {totalPrice.toFixed(2)}</b></span>
            </div>
            <button className='positive ui button' onClick={()=> setOpenModal(true)}>Checkout</button>
            
        </div>
        <Modal isOpen={openModal}  onRequestClose={()=>setOpenModal(false)} id ='modal'
        style = {
            {
                overlay:{
                    backgroundColor: 'rgba(0,0,0,0.6)'
                }
                
            }
        }
        > 
        <div>
        </div>
            <div>
                <ModalForm totalPrice={totalPrice}/>
            </div>
        </Modal>
    </div>
    )
}
const mapStateToProps = state =>{
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Cart);

//AIzaSyA5GNEPKXOC5dF7-Koa9I8qZYnVam3Kj9M