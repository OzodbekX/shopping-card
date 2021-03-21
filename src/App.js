import React from "react"
import data from "./data.json";
import Products from "./Products";
class  App extends React.Component{
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
    <div className='grid-container'>
      <header>
        <a href="/">React Shoping Cart</a>
      </header>
        <main>

           <Products/>
        </main>
        <footer>
            All right is reserved
        </footer>


    </div>
  );}
}

export default App;
