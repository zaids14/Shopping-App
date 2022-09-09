import React, { Component } from 'react';
import {ProductData} from '';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '';
import './App.css';
class Accessories extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data : ProductData,
         }
    }
    render() { 
        return ( 
        <div>
                <Navbar />
                <div >
                    <ProductConsumer>
                        {(value) =>{
                            return(
                                <div className="rowitem my-5 mx-5">
                                    {value.products.filter(elem => elem.category === "access").map(fdata => (
                                    
                                            <card className=" cardrow mx-5 my-4 " >
                        
                                                <div class="card"  style={{width:350}} onChange={()=>{value.handleDetailsss(fdata.id)}}  >
                                                <Link to='/details'> <img class="card-img-top" src={fdata.image} alt="Card image" style={{ height:400}} /></Link>
                                                    <div class="card-body">
                                                        <h4 class="card-title">{fdata.title}</h4>
                                                        <p class="card-text" >{fdata.desc}</p>
                                                        <h4 class="card-title"><i class="fa fa-inr" aria-hidden="true"></i> {fdata.price}</h4>
                                                        <div style={{display:"flex"}}>
                                                        <button class="btn btn-primary"  disabled={fdata.inCart} onClick={()=>{value.buybtnHandler(fdata.id)}}> {fdata.inCart === true ? <span>In Cart</span> : <i class="fa fa-shopping-cart fa-2x"  aria-hidden="true"></i>  } </button >
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
            </div>  
        </div>);
    }
}
 
export default Accessories;





























// import React, { Component } from 'react'
// import './App.css'


// export default class Accessories extends Component {
//     render() {
//         return (
//             <div className="access">
        
//         <div class="container mx-auto mt-4">
//   <div class="row">
//     <div class="col-md-4">
//       <div class="card" style={{width: '18rem' }}>
//   <img src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Shoes</h5>
//         <h6 class="card-subtitle mb-2 text-muted">(All Brands Shoes)</h6>
//         <p class="price">$19.99</p>
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
//   <img src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Watch</h5>
//         <h6 class="card-subtitle mb-2 text-muted">(Luxurious Collection Watches)</h6>
//         <p class="price">$28.99</p>
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
//   <img src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Bags</h5>
//         <h6 class="card-subtitle mb-2 text-muted">(Purse,Bags,Wallets)</h6>
//         <p class="price">$22.99</p>
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
//   <img src="https://images.unsplash.com/photo-1486250944723-86bca2b15b06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Glasses</h5>
//         <h6 class="card-subtitle mb-2 text-muted">(All type of Goggles)</h6>
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
//   <img src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80" class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Jewelleries</h5>
//         <h6 class="card-subtitle mb-2 text-muted">(Jewellery,Ornaments)</h6>
//         <p class="price">$40.99</p>
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
//   <img src="https://images.unsplash.com/photo-1620327489477-ff3c8420eab1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Caps</h5>
//         <h6 class="card-subtitle mb-2 text-muted">(All types of Caps)</h6>
//         <p class="price">$12.99</p>
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
