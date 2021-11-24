import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import swal from 'sweetalert';

const ProductList = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then(res => {
                setProduct(res.data);
                console.log(res.data);
            }).catch(err => console.log(err))
    }, [])

    // product deleting site
    const handleDelete = (id) => {


        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const loading = toast.loading('Please wait a minute...')
                    axios.delete(`http://localhost:5000/deleteProduct/${id}`)
                        .then(res => {
                            toast.dismiss(loading)
                            const removeProductData = product.filter(product => product._id !== id)
                            if (res.data) {
                                setProduct(removeProductData)
                                return swal("Successfully Deleted!", "Your Product has been successfully deleted.", "success");
                            }
                            swal('Failed!', 'Something went wrong! Please try again', 'error')
                        })
                        .catch(err => {
                            toast.dismiss(loading)
                            swal('Failed!', 'Something went wrong! Please try again', 'error')
                        })
                } else {
                    swal("Your imaginary Product is safe!");
                }
            });

    }

    return (
        <div className="bg-white px-5 pt-5 mx-md-4 mt-5" style={{ borderRadius: "10px" }}>
            <Table hover borderless responsive>
                <thead className="bg-light">
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Delete Price</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                {
                    product.map(product => {
                        return (
                            <tbody key={product._id} style={{ fontWeight: "500" }}>
                                <tr>
                                    <td>{product.body.name}</td>
                                    <td>{product.body.price}</td>
                                    <td>{product.body.delPrice}</td>
                                    <td className='text-center'>
                                        <Button variant="outline-success" className="p-1 mb-0 btn btn-outline-success"
                                        //  onClick={() => setUpdateService(services)}
                                        >
                                            <FontAwesomeIcon icon={faEdit} className="mx-1" />Edit
                                        </Button>
                                        <Button variant="outline-danger" className="p-1 mb-0 ms-3 btn btn-outline-danger" onClick={() => handleDelete(product._id)}>
                                            <FontAwesomeIcon icon={faTrash} className="mx-1" />Delete
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </Table>
        </div>
    );
};

export default ProductList;