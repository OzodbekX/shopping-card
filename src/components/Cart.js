import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import { removeFromCart} from "../redux/actions/cartActions";
import {connect} from "react-redux";
import {clearOrder, createOrder} from "../redux/actions/createOrder";
import {Modal} from "react-modal";
import {Zoom} from "react-reveal";


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"",
            email:"",
            address:"",
            showCheckout:false
        }

    }
    handleInput=(e)=>{
        console.log(e)
        console.log(this.state)
        this.setState({[e.target.name]:e.target.value})
    }

    createOrder=(e)=>{
            const order=    {
            name:this.state.name,
            email:this.state.email,
            address:this.state.address,
            cartItems:this.state.cartItems,
            total:this.props.cartItems.reduce((a,c)=>(a+c.price*c.count),0 ),
        }
        this.props.createOrder(order);
    }
    closeModal=()=>{
        this.props.clearOrder();
    }
    render() {
        const { cartItems,order }=this.props;
        return (
            <div>
                {cartItems.length===0 ?(<div>Card is empty</div>):(
                    <div>You have {cartItems.length} items  in the cart {""}</div>
                )}

                <hr className='border-info border-bottom-1'/>
                {order &&
                <Modal isOpen={true}
                    onRequestClose={this.closeModal}
                >
                    <button onClick={this.closeModal}>X</button>
                    <Zoom>
                        <div className="cart">
                            <h3>Your order has ben placed</h3>
                            <h2>Order number : {order._id}</h2>
                            <h2>Name : {order.name}</h2>
                            <h2>Email : {order.email}</h2>
                            <h2>Address : {order.address()}</h2>
                            <h2>Total :$ {order.total}</h2>
                            <h2>cart items : {order.cartItems.map(item=>(
                                <div>
                                    {item.count}X{item.title}
                                </div>
                            ))}</h2>
                        </div>
                    </Zoom>
                </Modal>}
                <div>
                   <Fade left cascade>
                       <ul className='cart-items'>
                           {cartItems.map(items=>(
                               <li className='list-unstyled' key={items._id}>
                                   <div className='d-flex'>
                                       <img className=' w-25 h-25' src={items.image} alt="#"/>
                                       <div>
                                           <div className='h5'>{items.title}</div>
                                           <div className='d-flex'>
                                               {items.count}x $ {items.price} <div className='invisible'>d</div>
                                               <button onClick={()=>this.props.removeFromCart(this.props.cartItems,items)} className='btn btn-sm btn-secondary'>Remove</button>
                                           </div>
                                       </div>
                                   </div>
                               </li>
                           ))}
                       </ul>
                   </Fade>
                </div>
                {!(this.props.cartItems.length===0) && (
                    <div>
                        <div>
                        <div className='d-flex text-center'>
                            <div>
                                Total:
                                ${" "}
                                {cartItems.reduce((a,c)=>a+c.price*c.count,0)}
                            </div>
                            <div className='invisible'>d</div>
                            <button onClick={()=>this.setState({showCheckout:true})} className='rounded btn-success btn-sm py-0'>Boooking</button>
                        </div>
                    </div>
                    </div>)}
                {this.state.showCheckout &&(
                    <Fade right>
                        <div>
                            <form onSubmit={this.createOrder}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input
                                        name="email"
                                        type="email" className="form-control" required id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Enter email"
                                        onChange={(e)=>this.handleInput(e)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail2">Name</label>
                                    <input
                                        required
                                        name="name"
                                        type="text" className="form-control" id="exampleInputEmail2"
                                        onChange={(e)=>this.handleInput(e)}
                                        placeholder="Enter name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail3">Address</label>
                                    <input
                                        required
                                        name="address"
                                        onChange={(e)=>this.handleInput(e)}
                                        type="text" className="form-control" id="exampleInputEmail3"
                                        placeholder="Enter name"/>
                                </div>
                                <button  className='btn btn-success' type='submit' >Submit</button>
                            </form>

                        </div>
                    </Fade>
                )}
            </div>
        );
    }
}
const mapStateToProps=state=>({
    cartItems: state.cart.items,
    order:state.order.order
})

export default connect(mapStateToProps,{removeFromCart, createOrder, clearOrder})(Cart);