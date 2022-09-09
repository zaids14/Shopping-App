import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ProductData} from './Productdata'
import { ProductConsumer } from './ContextApi'
class Clothes extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data : ProductData,
         }
    }
    render() { 
        return ( <div>
            <div>
            <ProductConsumer>
                        {(value) =>{
                            return(
                                <div className="rowitem my-5 mx-5">
                                    {value.products.filter(elem => elem.category === "clothes").map(fdata => (
                                    
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
            </div>
        </div> );
    }
}
 
export default Clothes;




















// import React, { Component } from 'react';
// import './App.css';


// export default class Clothes extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cart:'',
//       data:'',
//       products:'',
//     }
//   }


//   addCart = (id) =>{
//     const {products, cart} = this.state;
//     const check = cart.every(item =>{
//         return item._id !== id
//     })
//     if(check){
//         const data = products.filter(product =>{
//             // console.log(product._id)1234
//             // console.log(id)22 fixed
//             // console.log(this.state.quan)
//             return product._id === id
//         })
//         this.setState({cart: [...cart,...data]})
//     }else{
//         alert("The product has been added to cart.")
//     }
// };

//     render() {
//         return (
//             <><div className="cloth">
//             <div class="container mx-auto mt-4">
//               <div class="row">
//                 <div class="col-md-4">
//                   <div class="card" style={{ width: '18rem' }}>
//                     <img src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnR8ZW58MHx8MHx8&w=1000&q=80" class="card-img-top" alt="..." />
//                     <div class="card-body">
//                       <h5 class="card-title">T-Shirts</h5>
//                       <h6 class="card-subtitle mb-2 text-muted">(Cotton t-shirts)</h6>
//                       <p class="price">$15.99</p>
//                       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                       <form>
//                         <label for="quantity">Quantity :</label>
//                         <input className="quantity" type="number" id="quantity" name="quantity"  min="1" max="9" />
//                       </form>
//                       <a href="#" class="btn "><i class=""></i>Buy Now</a>
//                       <a href="#" onClick={this.addCart} class="btn mr-2"><i class=""></i> Add to Cart</a>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="col-md-4">
//                   <div class="card" style={{ width: '18rem' }}>
//                     <img src="https://images.unsplash.com/photo-1603252109612-24fa03d145c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="card-img-top" alt="..." />
//                     <div class="card-body">
//                       <h5 class="card-title">Shirts</h5>
//                       <h6 class="card-subtitle mb-2 text-muted">(Plain Shirts)</h6>
//                       <p class="price">$25.99</p>
//                       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                       <form>
//                         <label for="quantity">Quantity :</label>
//                         <input className="quantity" type="number" id="quantity" name="quantity" min="1" max="9" />
//                       </form>
//                       <a href="#" class="btn "><i class=""></i>Buy Now</a>
//                       <a href="#" class="btn mr-2"><i class=""></i> Add to Cart</a>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="col-md-4">
//                   <div class="card" style={{ width: '18rem' }}>
//                     <img src="https://images.unsplash.com/photo-1485218126466-34e6392ec754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" class="card-img-top" alt="..." />
//                     <div class="card-body">
//                       <h5 class="card-title">Women Top</h5>
//                       <h6 class="card-subtitle mb-2 text-muted">(High Quality Tops)</h6>
//                       <p class="price">$20.99</p>
//                       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                       <form>
//                         <label for="quantity">Quantity :</label>
//                         <input className="quantity" type="number" id="quantity" name="quantity" min="1" max="9" />
//                       </form>
//                       <a href="#" class="btn "><i class=""></i>Buy Now</a>
//                       <a href="#" class="btn mr-2"><i class=""></i> Add to Cart</a>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="col-md-4">
//                   <div class="card" style={{ width: '18rem' }}>
//                     <img src="https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="card-img-top" alt="..." />
//                     <div class="card-body">
//                       <h5 class="card-title">Jeans</h5>
//                       <h6 class="card-subtitle mb-2 text-muted">(Top-brand jeans)</h6>
//                       <p class="price">$30.99</p>
//                       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                       <form>
//                         <label for="quantity">Quantity :</label>
//                         <input className="quantity" type="number" id="quantity" name="quantity" min="1" max="9" />
//                       </form>
//                       <a href="#" class="btn "><i class=""></i>Buy Now</a>
//                       <a href="#" class="btn mr-2"><i class=""></i> Add to Cart</a>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="col-md-4">
//                   <div class="card" style={{ width: '18rem' }}>
//                     <img src="https://media.istockphoto.com/photos/fashion-clothes-on-a-rack-in-a-light-background-indoors-place-for-picture-id1257563298?b=1&k=20&m=1257563298&s=170667a&w=0&h=Hhf0-AsQp7Z7k9q8XKHfQUY86uPJvE8vmmGHXihWS_M=" class="card-img-top" alt="..." />
//                     <div class="card-body">
//                       <h5 class="card-title">Women Dress</h5>
//                       <h6 class="card-subtitle mb-2 text-muted">(Frocks,Tops,Shirts)</h6>
//                       <p class="price">$27.99</p>
//                       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                       <form>
//                         <label for="quantity">Quantity :</label>
//                         <input className="quantity" type="number" id="quantity" name="quantity" min="1" max="9" />
//                       </form>
//                       <a href="#" class="btn "><i class=""></i>Buy Now</a>
//                       <a href="#" class="btn mr-2"><i class=""></i> Add to Cart</a>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="col-md-4">
//                   <div class="card" style={{ width: '18rem' }}>
//                     <img src="https://media.istockphoto.com/photos/male-coat-isolated-on-the-white-picture-id163208487?b=1&k=20&m=163208487&s=170667a&w=0&h=YyOFKwoWyLSVO-cXE3goQ4el6K8Cvs082gjmUSouvOQ=" class="card-img-top" alt="..." />
//                     <div class="card-body">
//                       <h5 class="card-title">Jacket</h5>
//                       <h6 class="card-subtitle mb-2 text-muted">(All Types Jackets)</h6>
//                       <p class="price">$35.99</p>
//                       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                       <form>
//                         <label for="quantity">Quantity :</label>
//                         <input className="quantity" type="number" id="quantity" name="quantity" min="1" max="9" />
//                       </form>
//                       <a href="#" class="btn "><i class=""></i>Buy Now</a>
//                       <a href="#" class="btn mr-2"><i class=""></i> Add to Cart</a>
//                     </div>
//                   </div>
//                 </div>


//               </div>
//             </div>

//           </div>
//          </>
//         )
//     }
// }


