import React, {Component} from 'react';
import axios from 'axios'



class Form extends Component {
    constructor(props) {
        super(props)

        this.state={
            inventory: [],
            product_name:'',
            product_price: 0,
            img_url:''

        }
    }
    
    imageInput(url) {
        var img = new Image();
        img.onload = _ => this.setState({ img: url });
        img.onerror = _ => this.setState({ img: '' });
        img.src = url;
      }

    handlePrice(val) {(
          this.setState({
            product_price:val,
          })
    )}
    
    handleName(val) {(
        this.setState({
            product_name:val
        })
    )}

    handleCancel() {
        this.setState({
            product_name:'',
            product_price: 0,
            img_url: ''
        })
    }

    createNewProduct() { 
        const { product_name, product_price, img_url } = this.state
        axios.post(`/api/product`, {product_name, product_price, img_url}).then(res =>{
          this.setState({
            inventory: res.data,
            product_name: '',
            product_price: '',
            img_url:''
          })
        })
      } 


    render() {
        return (
           <section> 
                <div>
                    {this.state.img}
                    <p>Image URL:</p>
                    <input name='Image URL' type ='text' value={this.state.imageUrl}/>
                    <p>Product Name</p>
                    <input type ='text' onChange={e => this.handleName(e.target.value)} value={this.state.name}/>
                    <p>Price</p>
                    <input type ='text' onChange={e => this.handlePrice(e.target.value)} placeholder="0" />
                </div>
                <div>
                    <button onClick={() => this.handleCancel()}>cancel</button>
                    <button onClick={() => this.createNewProduct(this.handleName, this.handlePrice, this.imageInput) }>Add To Inventory</button>
                </div>
                </section>    
        )
    }

}

export default Form;