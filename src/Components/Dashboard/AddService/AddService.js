import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axios from 'axios';
import swal from 'sweetalert';
const AddProduct = () => {
    // const [info, setinfo] =useState({});
    // const [file, setFile] = useState(null)
    // const handleBlur = e => {
    //     const newInfo = {...info};
    //     newInfo[e.target.name] = e.target.value;
    //     setinfo(newInfo)
    // }
    // const handleImageUpload = e => {
    //     const newFile = e.target.files[0];
    //     setFile(newFile)
    // }
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
        //  imageData.append('image', file);
        // formData.append('product', product);
        formData.append('image', product.image);
        formData.append('name', product.name);
        formData.append('price', product.price);
        formData.append('delPrice', product.delPrice);
        console.log(data.image[0]);
        // setFile(data.image[0])
        axios.post("http://localhost:5000/addProduct", formData)
        .then(res=> {
            toast.dismiss(loading)
            if(res.data){
                return swal("Successfully updated", "Your service has been successfully upload!", 'success')
            }
        }).catch(err => {
            toast.dismiss(loading)
            swal('Failed!', 'Something went wrong! Please try again', 'error')
        })
    }

    return (
        <section>
            <Form onSubmit={handleSubmit(onSubmit)} className="w-100">
                <div className="py-5 mx-auto mt-5 bg-white form-main" style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                    <Row className="">
                        <Form.Group as={Col} md={5} sm={12} className="me-md-5 form-group"
                        >
                            <Form.Label style={{ fontWeight: "bold" }}>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Product Name"
                                // defaultValue={updateService ? updateService.name : ""}
                                {...register("name")}
                                />
                        </Form.Group>
                        <Form.Group as={Col} md={5} sm={12} className="me-md-5 form-group"
                        // controlId="formBasicEmail"
                        >
                            <Form.Label style={{ fontWeight: "bold" }}>Enter Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter Price"
                            style={{ maxWidth: "260px" }}
                                // defaultValue={updateService ? updateService.title : ""}
                                {...register("price")}                           
                                 />
                        </Form.Group>
                        
                        <Form.Group as={Col} md={3} sm={12} className="me-md-5 form-group"
                        >
                            <Form.Label style={{ fontWeight: "bold" }}>Seconde Price</Form.Label>
                            <Form.Control type="text" placeholder="Seconde Price"
                            style={{ maxWidth: "260px" }}
                                // defaultValue={updateService ? updateService.title : ""}
                                {...register("delPrice")}
                            
                                />
                        </Form.Group>
                        
                        <Form.Group as={Col} md={2} sm={12} className="mt-md-3"
                         style={{ position: "relative", right: "-40px", display: "inline-block" }}
                         >
                            <Form.Label style={{ fontWeight: "bold" }}> "Add Image"</Form.Label>
                            <Button
                                as={"label"}
                                htmlFor="upload"
                                variant="outline-primary"
                                className="d-block p-2 upload-btn">
                                <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2" />Upload Image
                            </Button>
                            <Form.Control
                                hidden="hidden"
                                id="upload"
                                type="file"
                                // defaultFile={updateService ? updateService.image : ""}                              
                                {...register("image")}
                                placeholder="Upload photo" />
                            <div className="mt-5 mt-2">
                                <Button type="submit" className="btn btn-primary submit-btn">
                                    Submit
                                </Button>
                            </div>
                        </Form.Group>
                    </Row>
                </div>
            </Form>
        </section>
    );
};

export default AddProduct;