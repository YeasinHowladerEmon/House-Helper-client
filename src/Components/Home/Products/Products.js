import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Product from '../Product/Product';

const Products = () => {
    const { product, setProduct } = useContext(UserContext)
    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then(res => {
                setProduct(res.data);
            }).catch(err => console.log(err))
    }, [])


    return (
        <div className="pb-70">
            <div className="products-area">
                <Container>
                    <div className="section-title">
                        <span>Products</span>
                        <h2>Our Popular Products</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos tenetur vero deserunt! Magni, laborum. Molestias, quidem mollitia, quae minus vero vel reprehenderit, aliquid alias delectus autem.</p>
                    </div>
                    <Row>
                        {
                            product.slice(0, 3).map(products => <Product
                                products={products} key={products._id} />)
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Products;