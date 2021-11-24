import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
// import { UserContext } from '../../../App';
import Navber from '../../Share/Navber/Navber';
import Bg23 from '../../Share/PageTitleArea/Bg23';
import Product from '../Product/Product';


const Shop = ({onAdd}) => {
    // const {product} = useContext(UserContext)
    const [shop, setShop] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/products")
        .then(res => {
            setShop(res.data);
            console.log(res.data);
        }).catch(err => console.log(err))
    }, [])
    // console.log(product);
    return (
        <>
        <Navber/>
        <Bg23/>
        <div className="products-area ptb-100 pt-100">
                <Container>
                    <Row>
                        {
                            shop.map(products => <Product onAdd={onAdd} products={products} key={products._id}/>)
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Shop;