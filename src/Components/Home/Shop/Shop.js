import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Navber from '../../Share/Navber/Navber';
import Bg23 from '../../Share/PageTitleArea/Bg23';
import SkeletonContainer from '../../Share/SkeletonContainer/SkeletonContainer';
import Product from '../Product/Product';


const Shop = ({ onAdd }) => {
    const [shop, setShop] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then(res => {
                setIsLoading(false);
                setShop(res.data);
                console.log(res.data);
            }).catch(err => console.log(err))
    }, [])

    return (
        <>
            <Navber />
            <Bg23 />
            <div className="products-area ptb-100 pt-100">
                <Container>
                    <Row>
                        {
                            isLoading ? <> <SkeletonContainer/> <SkeletonContainer/> <SkeletonContainer/> </> : 
                                shop.map(products => <Product onAdd={onAdd} products={products} key={products._id} /> )
                             
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Shop;