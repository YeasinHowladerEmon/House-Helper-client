import React from 'react';
import { Col } from 'react-bootstrap';
import '../../Sass/Styled-Sass/Product.scss'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const SkeletonContainer = () => {
    return (
        <>
            <Col lg={4} md={6} sm={12}>
                <div className="skeleton-product">
                    <div className="skeleton-img">
                        <Skeleton height={100} width={100} />
                    </div>
                    <div className="skeleton-content">
                        <h3>
                            <Skeleton width={250} />
                        </h3>
                        <ul>
                            <li><Skeleton /></li>
                            <li><del><Skeleton /></del></li>
                        </ul>
                        {
                            (window.location.pathname === "/shop") ?
                                <div className="">
                                    <Skeleton />
                                </div>
                                : ""
                        }
                    </div>
                </div>
            </Col>
        </>

    );
};

export default SkeletonContainer;