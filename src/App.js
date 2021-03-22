import React from "react"
import Products from "./Products";
class  App extends React.Component{

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
