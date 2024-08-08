import React from 'react'
import { Row,Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useState, useEffect } from 'react';
import axios from 'axios';

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    const fetchProducts = async() =>{
      const { data } = await axios.get('/api/products');
      setProducts(data);
    }
    console.log(fetchProducts())
    fetchProducts();
  },[])

  
  return (
    <div>
      <h1>Latest products</h1>
      <Row>
        {products.map((product)=>(
            <Col sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
            </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
