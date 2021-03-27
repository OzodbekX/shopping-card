import React, {Component} from 'react';
import {filterProducts, sortProducts} from "../redux/actions/productActions";
import {connect} from "react-redux";

class Filter extends Component {
    render() {
        return (
            !this.props.filteredProducts?<h3>Loading...</h3>:
            <div className='d-flex justify-content-between'>
                <div className="filter-result">{this.props.filteredProducts.length} Products</div>
                <div className="filter-sort d-flex">
                    Order by price:
                    <div className="invisible" >s</div>
                    <select value={this.props.sort} onChange={(e)=>
                        this.props.sortProducts(this.props.filteredProducts,e.target.value)}>
                        <option value='latest'>The Latest</option>
                        <option value='lowest'>The lowest</option>
                        <option value='highest'>The highest</option>
                    </select>
                </div>
                <div className=' d-flex' >Processor Types
                    <div className="invisible" >s</div>

                    <select value={this.props.types} onChange={(e)=>
                        this.props.filterProducts(this.props.filteredProducts,e.target.value)}>
                        <option value="">ALL</option>
                        <option value="i3">Core i3</option>
                        <option value="i5">Core i5</option>
                        <option value="i7">Core i7</option>
                        <option value="i9">Core i9</option>
                        <option value="i11">Core i11</option>
                    </select>
                </div>
            </div>
        );
    }
}
export default connect((state)=>({
    types:state.products.types,
    sort:state.products.sort,
    products:state.products.items,
    filteredProducts:state.products.filteredItems,
}),{
    filterProducts,
    sortProducts,

}) (Filter);