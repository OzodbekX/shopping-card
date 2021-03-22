import React, {Component} from 'react';
import Fade from "react-reveal/Fade";

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
        this.setState({[e.target.name]:e.target.value})
    }
    creatOrder=(e)=>{
        e.preventDefault();
        const order={
            name:this.state.name,
            email:this.state.email,
            address:this.state.address,
            cartItems:this.state.cartItems,

        }
        this.props.createOrder(order);

    }


    render() {
        const {cartItems}=this.props;
        return (
            <div>
                {cartItems.length===0 ?(<div>Card is empty</div>):(
                    <div>You have {cartItems.length} items  in the cart {""}</div>
                )}                        <hr className='border-info border-bottom-1'/>

                <div>
                   <Fade left cascade>
                       <ul className='cart-items'>
                           {cartItems.map(item=>(
                               <li className='list-unstyled' key={item.id}>
                                   <div className='d-flex'>
                                       <img className=' w-25 h-25' src={item.image} alt="#"/>
                                       <div>
                                           <div className='h5'>{item.title}</div>
                                           <div className='d-flex'>
                                               {item.count}x $ {item.price} <div className='invisible'>d</div>
                                               <button onClick={()=>this.props.removeFromcart(item)} className='btn btn-sm btn-secondary'>Remove</button>
                                           </div>
                                       </div>
                                   </div>
                               </li>
                           ))}
                       </ul>
                   </Fade>
                </div>
                {cartItems.length!==0 && (
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
                            <form onSubmit={this.creatOrder} action="">
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input
                                        name="email"
                                        type="email" className="form-control" required id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Enter email"
                                        onChange={this.handleInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail2">Name</label>
                                    <input
                                        required
                                        name="name"
                                        type="text" className="form-control" id="exampleInputEmail2"
                                        onChange={this.handleInput}
                                        placeholder="Enter name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail3">Address</label>
                                    <input
                                        required
                                        name="address"
                                        onChange={this.handleInput}
                                        type="text" className="form-control" id="exampleInputEmail3"
                                        placeholder="Enter name"/>
                                </div>
                                <button className='btn btn-success' type='submit' >Submit</button>
                            </form>

                        </div>
                    </Fade>
                )}


            </div>
        );
    }
}

export default Cart;