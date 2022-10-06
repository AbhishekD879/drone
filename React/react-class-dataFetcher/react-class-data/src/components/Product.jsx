import React, { Component } from 'react'
import ProductCard from './ProductCard';

export default class Product extends Component {
    constructor(props){
        super(props)
        this.state={products:[]}
    }
    componentDidMount(){
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(({products})=>this.setState({products:products}));
    }
    componentWillUnmount(){
        this.setState({products:[]})
    }
    render() {
        console.log(this.state.products)
    return (
      <div className='grid grid-cols-3 gap-3 p-5'>
        {this.state.products.map((product)=><ProductCard key={product.id} {...product}/>)}
      </div>
    )
  }
}
