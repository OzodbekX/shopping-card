import React, {Component} from 'react';
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
class Productslist extends Component {
    constructor() {
        super();
        this.state={
            modalpro:null,
        }
    }
    openModal=(product)=>{
        this.setState({
            modalpro:product
        }        )
    }
    closeModal=(product)=>{
        this.setState({
            modalpro:null
        }        )
    }
    render() {

        return (
            <div className='filter'>
                <Fade bottom cascade>
                    <ul className='products d-flex flex-wrap'>
                        {this.props.products.map((product)=>(
                            <div  key={product.id} className='li col-4 h-100'>
                                <div className="product h-100">
                                    <a onClick={()=>this.openModal(product)}  href={'#'+product._id}>
                                        <img className='img-fluid' src={product.image} alt="#"/>
                                        <p>
                                            {product.title}
                                        </p>
                                    </a>
                                    <div className='producPrise card-footer d-flex justify-content-around'>
                                        <div>
                                            $ {(product.price) }
                                        </div>
                                        <button onClick={()=>this.props.addToCart(product)}
                                                className='btn-sm btn-primary rounded mb-1'>
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ul>
                </Fade>
                {
                    this.state.modalpro &&

                        <Zoom>
                            <Modal isOpen={true}>
                                <Zoom>
                                    <button className='close' onClick={this.closeModal} >&times;</button>
                                    <div className='d-flex'>
                                        <img src={this.state.modalpro.image} alt=""/>
                                        <div>
                                            <div>{this.state.modalpro.title}</div>
                                            <div>{this.state.modalpro.weight}</div>
                                            <div>{this.state.modalpro.price}</div>
                                            <div>Available processor type: {this.state.modalpro.processorType.map(
                                                (types)=>(
                                                    <span>
                                                        {" "}
                                                        <button
                                                            className='btn btn-success'> {types}</button>
                                                    </span>
                                                )
                                            )}
                                            </div>
                                            <button
                                                onClick={()=>{
                                                    this.closeModal();
                                                    this.props.addToCart(this.state.modalpro)
                                                }}
                                                className='btn-success'>
                                                Add To Cart

                                            </button>
                                        </div>
                                    </div>
                                </Zoom>
                            </Modal>
                        </Zoom>
                }
            </div>
        );
    }
}

export default Productslist;