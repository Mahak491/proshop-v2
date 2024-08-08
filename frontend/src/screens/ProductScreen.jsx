import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import React from 'react'
import Rating from "../components/Rating";
import '../assets/styles/index.css';
import axios from "axios";
import { useState, useEffect } from "react";
function ProductScreen() {
    const [product, setProducts] = useState({});
    const { id } = useParams();
    // const product = products.find((p) => p._id === id);
    console.log(product)
    useEffect(() =>{
        const fetchProduct = async ()=>{
            const {data} = await axios.get(`/api/products/${id}`);
            setProducts(data);
        }
        fetchProduct();
    },[id])
    return (
        <div>
            <Link to='/' className="btn btn-light my-3">
                Go Back</Link>
            <Row>
                <Col md={5}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={4}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price</Col>
                                    <Col>
                                        <strong>
                                            ${product.price}
                                        </strong></Col>
                                </Row>
                                <Row>
                                    <Col> Status:
                                    </Col>
                                    <Col>
                                        <strong>
                                            {product.countInStock > 0 ? 'InStock' : 'Out Of Stock'}
                                        </strong></Col>
                                </Row>
                               
                            </ListGroup.Item>
                            <ListGroup.Item>
                                  <Button className="btn-black"
                                  type='button'
                                  disabled={product.countInStock === 0}>
                                    Add to Cart
                                    </Button>  
                                    </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen
