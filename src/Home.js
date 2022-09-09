import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ProductData} from './ProductData'
import { ProductConsumer } from './ContextApi';
class Kitchen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data : ProductData,
         }
    }
    render() { 
        return ( <div>
            <ProductConsumer>
                        {(value) =>{
                            return(
                                <div className="rowitem my-5 mx-5">
                                    {value.products.filter(elem => elem.category === "kitchen").map(fdata => (
                                    
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
 
export default Kitchen;


















































// import React, { Component } from 'react'
// import './App.css'

// export default class Home extends Component {
//     render() {
//         return (
//             <div className="hmk">
                        
// <div class="container mx-auto mt-4">
//   <div class="row">
//     <div class="col-md-4">
//       <div class="card" style={{width: '18rem' }}>
//   <img src="https://media.istockphoto.com/photos/different-modern-streamlined-mirror-copper-chandeliers-bubble-metal-picture-id1082558358?b=1&k=20&m=1082558358&s=170667a&w=0&h=-m4juTXow_MznfKznPa5Zq3EWkAoi7I2TFEdmpAgOas=" class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Lights</h5>
//         <h6 class="card-subtitle mb-2 text-muted">(Lights,lanterns)</h6>
//         <p class="price">$18.99</p>
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
//   <img src="https://media.istockphoto.com/photos/chefs-tools-picture-id171154518?b=1&k=20&m=171154518&s=170667a&w=0&h=w46sN30D6LWmFZ7vG_WD1bVLabDDS4_v-0QlGFwwE0A=" class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Kitchen Items</h5>
//         <h6 class="card-subtitle mb-2 text-muted">(All types Kitchen Products)</h6>
//         <p class="price">$13.99</p>
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
//   <img src="https://media.istockphoto.com/photos/potted-snake-plants-inside-a-beautiful-new-flat-or-apartment-picture-id1268045137?b=1&k=20&m=1268045137&s=170667a&w=0&h=VlbskLfIUPMfIO917CJA355xca8kZIDG36wjmf_vHdE=" class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Indoor Plants </h5>
//         <h6 class="card-subtitle mb-2 text-muted">(All Types of Plants)</h6>
//         <p class="price">$26.99</p>
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
//   <img src="https://images.unsplash.com/photo-1509099260230-b032e6e135b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMzk1NDg3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Cups</h5>
//         <h6 class="card-subtitle mb-2 text-muted">(Cups,Jugs for Kitchen)</h6>
//         <p class="price">$5.99</p>
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
//   <img src="https://images.unsplash.com/photo-1571907483083-af70aeda3285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG8lMjBmcmFtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Photo Frames</h5>
//         <h6 class="card-subtitle mb-2 text-muted">(All Frames)</h6>
//         <p class="price">$14.99</p>
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
//   <img src="https://media.istockphoto.com/photos/flower-arrangement-picture-id1285437372?b=1&k=20&m=1285437372&s=170667a&w=0&h=0W3Pg57sCh1_lYRRU6QlvJMUBgsWbm1_D7HZqpxtb0c=" class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Home Decor</h5>
//         <h6 class="card-subtitle mb-2 text-muted">(All Home Products)</h6>
//         <p class="price">$35.99</p>
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
