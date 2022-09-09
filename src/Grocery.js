import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ProductData} from '';
import { ProductConsumer } from '';
class Grocery extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data : ProductData,
         }
    }
    render() { 
        return ( <div>
            <Navbar />
            <ProductConsumer>
                        {(value) =>{
                            return(
                                <div className="rowitem my-5 mx-5">
                                    {value.products.filter(elem => elem.category === "grocery").map(fdata => (
                                    
                                            <card className=" cardrow mx-5 my-4 " >
                        
                                                <div class="card"  style={{width:350}} onChange={()=>{value.handleDetailsss(fdata.id)}}  >
                                                <Link to='/details'> <img class="card-img-top" src={fdata.image} alt="Card image" style={{ height:400}} /></Link>
                                                    <div class="card-body">
                                                        <h4 class="card-title">{fdata.title}</h4>
                                                        <p class="card-text" >{fdata.desc}</p>
                                                        <h4 class="card-title"><i class="fa fa-inr" aria-hidden="true"></i> {fdata.price}</h4>
                                                        <div style={{display:"flex"}}>
                                                        <button class="btn btn-primary"  disabled={fdata.inCart} onClick={()=>{value.cartbtnHandler(fdata.id)}}> {fdata.inCart === true ? <span>In Cart</span> : <i class="fa fa-shopping-cart fa-2x"  aria-hidden="true"></i>  } </button >
                                                        <Link to='/cart' style={{marginLeft:20, paddingTop:10, paddingBottom:10}} onClick={()=>{value.buybtnHandler(fdata.id)}} class="btn btn-primary">Buy Now</Link>  
                                                        </div>
                                                    </div>
                            
                                                </div>
                                    </card>
                                        
                                    
                                        
                                        )
                                    )}

                                
                                </div>
                                
                            )
                        }}

                    </ProductConsumer> 
        </div> );
    }
}
 
export default Grocery;










































// import React, { Component } from 'react'
// import './App.css'

// export default class Grocery extends Component {
//     render() {
//         return (
//             <div className="groc">
                        
// <div class="container mx-auto mt-4">
//   <div class="row">
//     <div class="col-md-4">
//       <div class="card" style={{width: '18rem' }}>
//   <img src="https://media.istockphoto.com/photos/fresh-vegetables-on-grey-background-picture-id1251268582?b=1&k=20&m=1251268582&s=170667a&w=0&h=Glorxwa7bd9tNluwujNsOwt3nOKdv3exfmT3YGqlDi4=" class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Vegetables</h5>
//         <h6 class="card-subtitle mb-2 text-muted">(Fresh Veggies)</h6>
//         <p class="price">$9.99</p>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <form>
//   <label for="quantity">Quantity :</label>
//   <input className="quantity" type="number" id="quantity" name="quantity" min="1" max="9"/>
//   </form>
//     <a href="#" class="btn "><i class=""></i>Buy Now</a>
//     <a href="#" class="btn mr-2"><i class=""></i> Add to Cart</a>
//   </div>
//   </div>
//     </div>    
//        <div class="col-md-4">
// <div class="card" style={{width: '18rem'}}>
//   <img src="https://media.istockphoto.com/photos/variety-of-fresh-organic-vegetables-and-fruits-in-the-garden-picture-id1280856062?b=1&k=20&m=1280856062&s=170667a&w=0&h=wQu-c2ZjzeCBkAGEj69xpF611lx1i_xim48vOCj_Dw0=" class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Fruits</h5>
//         <h6 class="card-subtitle mb-2 text-muted">(Fresh fruits)</h6>
//         <p class="price">$11.99</p>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <form>
//   <label for="quantity">Quantity :</label>
//   <input className="quantity" type="number" id="quantity" name="quantity" min="1" max="9"/>
//   </form>
//     <a href="#" class="btn "><i class=""></i>Buy Now</a>
//     <a href="#" class="btn mr-2"><i class=""></i> Add to Cart</a>
//   </div>
//   </div>
//     </div>    
//           <div class="col-md-4">
// <div class="card" style={{width: '18rem'}}>
//   <img src="https://media.istockphoto.com/photos/non-perishable-food-on-rustic-wooden-table-copy-space-picture-id1283844624?b=1&k=20&m=1283844624&s=170667a&w=0&h=y52o6pkNyg6sKx-6WzQTVAU_VsdZQ1EJQ7jkYD4Tdro=" class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Perishables</h5>
//         <h6 class="card-subtitle mb-2 text-muted">(Fresh Products)</h6>
//         <p class="price">$17.99</p>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <form>
//   <label for="quantity">Quantity :</label>
//   <input className="quantity" type="number" id="quantity" name="quantity" min="1" max="9"/>
//   </form>
//     <a href="#" class="btn "><i class=""></i>Buy Now</a>
//     <a href="#" class="btn mr-2"><i class=""></i> Add to Cart</a>
//   </div>
//   </div>
//   </div>
  
//     <div class="col-md-4">
//       <div class="card" style={{width: '18rem'}}>
//   <img src="https://media.istockphoto.com/photos/most-common-dairy-products-shot-from-above-on-blue-striped-table-picture-id1084208252?b=1&k=20&m=1084208252&s=170667a&w=0&h=n0KS1Tg_Jy9FtKBGNBuzuRaPsDgBaTKk182WRQjqXOU=" class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Milk and Dairy foods</h5>
//         <h6 class="card-subtitle mb-2 text-muted">(Fresh Dairy Products)</h6>
//         <p class="price">$10.99</p>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <form>
//   <label for="quantity">Quantity :</label>
//   <input className="quantity" type="number" id="quantity" name="quantity" min="1" max="9"/>
//   </form>
//     <a href="#" class="btn "><i class=""></i>Buy Now</a>
//     <a href="#" class="btn mr-2"><i class=""></i> Add to Cart</a>
//   </div>
//   </div>
//     </div>    
//        <div class="col-md-4">
// <div class="card" style={{width: '18rem'}}>
//   <img src="https://media.istockphoto.com/photos/herbs-and-spices-in-bowels-picture-id1297420369?b=1&k=20&m=1297420369&s=170667a&w=0&h=4g6W-cnBEVeEaKG_4-dTOs6s86Q-XsrmIQbtErEi8PY=" class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Spices</h5>
//         <h6 class="card-subtitle mb-2 text-muted">(All types of Spices)</h6>
//         <p class="price">$20.99</p>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <form>
//   <label for="quantity">Quantity :</label>
//   <input className="quantity" type="number" id="quantity" name="quantity" min="1" max="9"/>
//   </form>
//     <a href="#" class="btn "><i class=""></i>Buy Now</a>
//     <a href="#" class="btn mr-2"><i class=""></i> Add to Cart</a>
//   </div>
//   </div>
//     </div>    
//           <div class="col-md-4">
// <div class="card" style={{width: '18rem'}}>
//   <img src="https://images.unsplash.com/photo-1531062916849-ac6624741870?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJldmVyYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Beverages</h5>
//         <h6 class="card-subtitle mb-2 text-muted">(Beverage Products)</h6>
//         <p class="price">$24.99</p>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <form>
//   <label for="quantity">Quantity :</label>
//   <input className="quantity" type="number" id="quantity" name="quantity" min="1" max="9"/>
//   </form>
//     <a href="#" class="btn "><i class=""></i>Buy Now</a>
//     <a href="#" class="btn mr-2"><i class=""></i> Add to Cart</a>
//   </div>
//   </div>
//   </div>
    
    
//   </div>
// </div> 
  
//             </div>
//         )
//     }
// }
