import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axios from 'axios';
import swal from 'sweetalert';
import '../../Sass/Styled-Sass/AddService.scss'


const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const loading = toast.loading('Please wait a minute...')
        const product = {
            name: data.name,
            price: data.price,
            delPrice: data.delPrice,
            image: data.image[0]
        }

        const formData = new FormData();
        formData.append('image', product.image);
        formData.append('name', product.name);
        formData.append('price', product.price);
        formData.append('delPrice', product.delPrice);
        console.log(data.image[0]);

        axios.post("http://localhost:5000/addProduct", formData)
            .then(res => {
                toast.dismiss(loading)
                if (res.data) {
                    return swal("Successfully updated", "Your product has been successfully upload!", 'success')
                }
            }).catch(err => {
                toast.dismiss(loading)
                swal('Failed!', 'Something went wrong! Please try again', 'error')
            })
    }

    return (
        <section className="addService-area pt-100">
            <Form onSubmit={handleSubmit(onSubmit)} className="w-100">
                <div className="addService-form-action ">
                    <Row className="d-flex justify-content-center mt-5">
                        <Col lg={5} md={6} sm={12}>
                            <Form.Group >
                                <Form.Label style={{ fontWeight: "bold" }}>Product Name</Form.Label>
                                <Form.Control type="text" placeholder="Product Name"
                                    {...register("name")}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Form.Group >
                                <Form.Label style={{ fontWeight: "bold" }}>Enter Price</Form.Label>
                                <Form.Control type="text" placeholder="Enter Price"
                                    style={{ maxWidth: "260px" }}
                                    {...register("price")}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={5} md={6} sm={12}>
                            <Form.Group>
                                <Form.Label style={{ fontWeight: "bold" }}>Seconde Price</Form.Label>
                                <Form.Control type="text" placeholder="Seconde Price"
                                    style={{ maxWidth: "260px" }}
                                    {...register("delPrice")}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Form.Group >
                                <Form.Label style={{ fontWeight: "bold" }}> "Add Image"</Form.Label>
                                <Button
                                    as={"label"}
                                    htmlFor="upload"
                                    className="d-block p-2 default-btn"
                                >
                                    <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2" />Upload Image
                                </Button>
                                <Form.Control
                                    hidden="hidden"
                                    id="upload"
                                    type="file"
                                    {...register("image")}
                                    placeholder="Upload photo" />
                            </Form.Group>
                        </Col>
                        <Col lg={5} sm={12} md={12} className="mt-5">
                            <Form.Group>
                                <Button type="submit" className="default-btn">
                                    Submit
                                </Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </div>
            </Form>
        </section>
    );
};

export default AddProduct;