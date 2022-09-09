import React, { Component } from 'react';
import {ProductData,  prodInDetails } from './components/ProductData';
import App from './App';
const ProductContext = React.createContext();
class ProductProvider extends Component {
    state={
        products : ProductData,
        buyproducts : 0,
        detailProduct : prodInDetails,
        cart : [],
        cart1 :[],
        cart2 : [],
        cartnumber :0,
        cartSubTotal : 0,
        wallet : 100000,
    }
    
    getItem =(id) =>{
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetailsss = (id) => {
        let tempProduct = [...this.state.products];
        const index = tempProduct.indexOf(this.getItem(id));
        const product = tempProduct[index];
        console.log(product);
        this.setState(()=>{
        return {detailProduct:product}},  );
    }

    buybtnHandler =(id)=>{
        if (localStorage.getItem('user') ==  "harshit") {
            let tempProduct = [...this.state.products];
            const index = tempProduct.indexOf(this.getItem(id));
            const product = tempProduct[index];
            product.inCart = true;
            product.count = 1;
            const price = product.price;
            product.total = price;
            this.setState(()=>{
                return {products : tempProduct, cart1 :[...this.state.cart , product]}
            }, ()=> {this.makeTotal()})   
            } else {
                let tempProduct = [...this.state.products];
        const index = tempProduct.indexOf(this.getItem(id));
        const product = tempProduct[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(()=>{
            return {products : tempProduct, cart2 :[...this.state.cart , product]}
        }, ()=> {this.makeTotal()})
            }
        // let tempProduct = [...this.state.products];
        // const index = tempProduct.indexOf(this.getItem(id));
        // const product = tempProduct[index];
        // product.inCart = true;
        // product.count = 1;
        // const price = product.price;
        // product.total = price;
        // this.setState(()=>{
        //     return {products : tempProduct, cart :[...this.state.cart , product]}
        // }, ()=> {this.makeTotal()})
    }
    
    cartbtnHandler =(id)=>{

        if (localStorage.getItem('user') ==  "harshit") {
            let tempProduct = [...this.state.products];
            const index = tempProduct.indexOf(this.getItem(id));
            const product = tempProduct[index];
            product.inCart = true;
            product.count = 1;
            const price = product.price;
            product.total = price;
           
            this.setState(()=>{
                return {products : tempProduct, cart1 :[...this.state.cart1 , product]}
            }, ()=> {this.makeTotal();
                localStorage.setItem('user_A_List', JSON.stringify(this.state.cart1) );
            },
            //  ()=>{
            //     const cart = JSON.parse(localStorage.getItem('user_A_List')) ;
            //     if (cart == null) {
            //         this.setState({ cartnumber: 0  });
            //     } else{
            //         const cartlength = cart.length;
            //         this.setState({ cartnumber: cartlength  });
            //         }
            // }
            )
            } else {
                let tempProduct = [...this.state.products];
                const index = tempProduct.indexOf(this.getItem(id));
                const product = tempProduct[index];
                product.inCart = true;
                product.count = 1;
                const price = product.price;
                product.total = price;
               
                this.setState(()=>{
                    return {products : tempProduct, cart2 :[...this.state.cart2 , product]}
                }, ()=> {this.makeTotal();
                    localStorage.setItem('user_b_List', JSON.stringify(this.state.cart2));
                    
                }
                // , ()=>{
                //     const cart = JSON.parse(localStorage.getItem('user_b_List')) ;
                //     if (cart == null) {
                //         this.setState({ cartnumber: 0  });
                //     } else{
                //         const cartlength = cart.length;
                //         this.setState({ cartnumber: cartlength  });
                //         }
                // }
                
                )
            }


        // let tempProduct = [...this.state.products];
        // const index = tempProduct.indexOf(this.getItem(id));
        // const product = tempProduct[index];
        // product.inCart = true;
        // product.count = 1;
        // const price = product.price;
        // product.total = price;
       
        // this.setState(()=>{
        //     return {products : tempProduct, cart :[...this.state.cart , product]}
        // }, ()=> {this.makeTotal();
            
        // })

        
    }

    increment =(id)=>{

        if (localStorage.getItem('user') ==  "harshit") {
            let tempCart = [...this.state.cart1];
            const selectedProduct = tempCart.find(item => item.id === id);
            const index = tempCart.indexOf(selectedProduct);
            const product = tempCart[index];
            product.count = product.count + 1;
            product.total = product.count * product.price;
    
            this.setState(()=>{
                return {cart1: [...tempCart]}
            },()=>{
                this.makeTotal();
            })
            } else {
                let tempCart = [...this.state.cart2];
                const selectedProduct = tempCart.find(item => item.id === id);
                const index = tempCart.indexOf(selectedProduct);
                const product = tempCart[index];
                product.count = product.count + 1;
                product.total = product.count * product.price;
                    
                this.setState(()=>{
                    return {cart2: [...tempCart]}
                },()=>{
                    this.makeTotal();
                })
            }
        // let tempCart = [...this.state.cart];
        // const selectedProduct = tempCart.find(item => item.id === id);
        // const index = tempCart.indexOf(selectedProduct);
        // const product = tempCart[index];
        // product.count = product.count + 1;
        // product.total = product.count * product.price;

        // this.setState(()=>{
        //     return {cart: [...tempCart]}
        // },()=>{
        //     this.makeTotal();
        // })
    }

    decrement =(id)=>{
        if (localStorage.getItem('user') ==  "harshit") {
            let tempCart = [...this.state.cart1];
            const selectedProduct = tempCart.find(item => item.id === id);
            const index = tempCart.indexOf(selectedProduct);
            const product = tempCart[index];
            product.count = product.count - 1;
            product.total = product.count    * product.price;
    
            this.setState(()=>{
                return {cart1: [...tempCart]}
            },()=>{
                this.makeTotal();
            })
            } else {
                let tempCart = [...this.state.cart2];
                const selectedProduct = tempCart.find(item => item.id === id);
                const index = tempCart.indexOf(selectedProduct);
                const product = tempCart[index];
                product.count = product.count - 1;
                product.total = product.count    * product.price;
        
                this.setState(()=>{
                    return {cart2: [...tempCart]}
                },()=>{
                    this.makeTotal();
                })
            }
        // let tempCart = [...this.state.cart];
        // const selectedProduct = tempCart.find(item => item.id === id);
        // const index = tempCart.indexOf(selectedProduct);
        // const product = tempCart[index];
        // product.count = product.count - 1;
        // product.total = product.count    * product.price;

        // this.setState(()=>{
        //     return {cart: [...tempCart]}
        // },()=>{
        //     this.makeTotal();
        // })
    }


    makeTotal =()=>{
        if (localStorage.getItem('user') ==  "harshit") {
            let subTotal = 0;
            this.state.cart1.map(item =>(subTotal = subTotal + item.total));
            const total = subTotal;
            this.setState({cartSubTotal : subTotal})
            } else {
                let subTotal = 0;
                this.state.cart2.map(item =>(subTotal = subTotal + item.total));
                const total = subTotal;
                this.setState({cartSubTotal : subTotal})
            }
        // let subTotal = 0;
        // this.state.cart.map(item =>(subTotal = subTotal + item.total));
        // const total = subTotal;
        // this.setState({cartSubTotal : subTotal})
    }

    removeItem =(id)=>{
        if (localStorage.getItem('user') ==  "harshit") {
            let tempProduct = [...this.state.products];
            let tempCart = [...this.state.cart1];
            tempCart = tempCart.filter(item => item.id !== id);
            const index = tempProduct.indexOf(this.getItem(id));
            let removeProd = tempProduct[index];
    
            removeProd.inCart = false;
            removeProd.total = 0;
            removeProd.count = 0;
            this.setState(()=>{
                return{
                    cart1: [...tempCart],
                    product : [...tempProduct]
                }
            },()=>{
                return this.makeTotal();
            })
            } else {
                let tempProduct = [...this.state.products];
                let tempCart = [...this.state.cart];
                tempCart = tempCart.filter(item => item.id !== id);
                const index = tempProduct.indexOf(this.getItem(id));
                let removeProd = tempProduct[index];

                removeProd.inCart = false;
                removeProd.total = 0;
                removeProd.count = 0;
                this.setState(()=>{
                    return{
                        cart: [...tempCart],
                        product : [...tempProduct]
                    }
                },()=>{
                    return this.makeTotal();
                })
            }
        // let tempProduct = [...this.state.products];
        // let tempCart = [...this.state.cart];
        // tempCart = tempCart.filter(item => item.id !== id);
        // const index = tempProduct.indexOf(this.getItem(id));
        // let removeProd = tempProduct[index];

        // removeProd.inCart = false;
        // removeProd.total = 0;
        // removeProd.count = 0;
        // this.setState(()=>{
        //     return{
        //         cart: [...tempCart],
        //         product : [...tempProduct]
        //     }
        // },()=>{
        //     return this.makeTotal();
        // })
    }

    updatewallet =()=>{
        
        
        const subtotal = this.state.cartSubTotal;
        
        if (localStorage.getItem('user') ==  "harshit") {
            localStorage.removeItem('user_A_list');
            let walletamount = localStorage.getItem('user_A_Wallet');
            const remainingBalance = walletamount  - subtotal;
            localStorage.setItem('user_A_Wallet' , remainingBalance )
           
        } else {
            localStorage.removeItem('user_b_List');
            let walletamounts= localStorage.getItem('user_b_Wallet');
            const remainingBalances = walletamounts  - subtotal;
            localStorage.setItem('user_b_Wallet' , remainingBalances )
        }
        // const remainingBalance = walletamount  - subtotal;
        
        
        let empty_cart = [...this.state.products];
        empty_cart.map((item)=>{item.inCart = false})
        console.log(empty_cart);
        let cart = [];

        this.setState({products: empty_cart , cart : cart } 
        )
    }


    render() {
        return (
            <div>
                <ProductContext.Provider value={{...this.state ,
                handelDetails : this.handleDetails,
                cartbtnHandler :this.cartbtnHandler,
                increment: this.increment,
                decrement : this.decrement,
                makeTotal: this.makeTotal,  
                removeItem: this.removeItem,
                buybtnHandler: this.buybtnHandler,
                updatewallet: this.updatewallet,
                }}>
                    {this.props.children}
                    <App />
                </ProductContext.Provider>
            </div>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer} ;
