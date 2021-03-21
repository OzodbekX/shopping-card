import React, {Component} from 'react';
import data from "../data.json"
class Productslist extends Component {
    constructor() {
        super();
        this.state={
            products:data.products
        }
    }


    render() {
        return (
            <div>
                <ul className='products d-flex flex-wrap'>
                    {this.state.products.map((product)=>(
                        <div  key={product.id} className='li col-4 h-100'>
                            <div className="product h-100">
                                <a className=''  href={'#'+product._id}>
                                    <img className='img-fluid' src={product.image} alt="#"/>
                                    <p>
                                        {product.title}
                                    </p>
                                </a>
                                <div className='producPrise card-footer d-flex justify-content-around'>
                                    <div>
                                        {product.price}
                                    </div>
                                    <button className='btn-sm btn-primary rounded mb-1'>
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>

            </div>
        );
    }
}

export default Productslist;