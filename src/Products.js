import React, {Component} from 'react';
import data from "./data.json";
import Productslist from "./components/productslist";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import {store} from  "./redux/store"
import {Provider} from "react-redux";
class Products extends Component {
    constructor(props) {
        super(props);
        this.state={
            products:data.products,
            cartItems: JSON.parse(localStorage.getItem("cartItems"))?JSON.parse(localStorage.getItem("cartItems")):[],
            size:"",
            sort:'',
        };
        this.filterProducts = this.filterProducts.bind(this);
    }
    createOrder=(order)=>{
        alert("Need to save order for "+ order.name);
    }

    removeFromcart=(product)=>{
        const cartItems=this.state.cartItems.slice();
        this.setState({
            cartItems:cartItems.filter(x=>x.id!==product.id)
        })
        localStorage.setItem("cartItems",JSON.stringify(
            cartItems.filter(x=>x.id!==product.id)));


    }

    addToCart=(pruduct)=>{
        const cartItems=this.state.cartItems.slice();
        let alreadyInCart=false;
        cartItems.forEach(item=>{
            if(item.id===pruduct.id){
                item.count++;
                alreadyInCart=true;

            }
        });
        if(!alreadyInCart){
            cartItems.push({...pruduct,count:1})
        }
        this.setState({
            cartItems:cartItems
        })
        localStorage.setItem("cartItems",JSON.stringify(cartItems));

    };
    sortProducts=(event)=>{
        const sort=event.target.value;
        this.setState((state)=>({
            sort:sort,
            products:this.state.products
                .slice()
                .sort((a,b)=>
                    sort==="lowest"
                    ?a.price < b.price ? -1:1
                        :sort==="highest"?
                        a.price>b.price ? -1:1
                        : a._id>b._id? -1:1
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
            <Provider store={store}>
            <div className='container-fluid'>

                <div className='row'>
                    <div className='col-9 main'>
                        <Filter count={this.state.products}
                                size={this.state.size}
                                sort={this.state.sort}
                                filterProducts={this.filterProducts}
                                sortProducts={this.sortProducts}
                        /><hr className='border-info'/>
                        <Productslist products={this.state.products} addToCart={this.addToCart}/>
                    </div>
                    <div className="col-3 sidebar">
                        <Cart
                            createOrder={this.createOrder}
                            removeFromcart={this.removeFromcart}
                            cartItems={this.state.cartItems}/>
                    </div>
                </div>
            </div>
            </Provider>
        );
    }
}

export default Products;