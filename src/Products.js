import React, {Component} from 'react';
import data from "./data.json";
import Productslist from "./components/productslist";
import Filter from "./components/Filter";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state={
            products:data.products,
            size:"",
            sort:'',
        }
        this.filterProducts = this.filterProducts.bind(this);
    }
    sortProducts=(event)=>{
        const sort=event.target.value;
        this.setState((state)=>({
            sort:sort,
            products:this.state.products
                .slice()
                .sort((a,b)=>
                    sort==="lowest"
                    ?a.price < b.price ?
                        -1:1
                        :sort==="highest"?
                        a.price>b.price ?
                            -1:1
                        : a._id>b._id?
                            -1:1
                ),

        }))
    }
    filterProducts=(event)=>{
        if(event.target.value===""){
            this.setState({
                size:"",
                products:data.products})
        } else {this.setState({
            size:event.target.value,
            products:data.products.filter(
                product=>product.processorType.indexOf(event.target.value)>=0
            )
        })}

    }
    render() {
        return (
            <div className='container-fluid'>

                <div className='row'>
                    <div className='col-9 main'>
                        <Filter count={this.state.products}
                                size={this.state.size}
                                sort={this.state.sort}
                                filterProducts={this.filterProducts}
                                sortProducts={this.sortProducts}
                        /><hr className='border-info'/>
                        <Productslist products={this.state.products}/>
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