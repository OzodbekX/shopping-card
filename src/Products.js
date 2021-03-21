import React, {Component} from 'react';
import data from "./data.json";
import Productslist from "./components/productslist";

class Products extends Component {
    constructor() {
        super();
        this.state={
            products:data.products,
            size:'',
            sort:'',
        }
    }
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-9 main'>
                        <Productslist/>
                    </div>
                    <div className="col-3 sidebar">
                        Card Items
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;