import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { useAuth } from '../../../Hooks/useAuth/useAuth';
import TableLoader from '../../Home/TableLoader/TableLoader'


const ProductList = () => {
    const { user } = useAuth()
    const [product, setProduct] = useState([])
    const [tableLoading, setTableLoading] = useState(true)

    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then(res => {
                setTableLoading(false)
                setProduct(res.data);
                console.log(res.data);
            }).catch(err => console.log(err))
    }, [])


    // product deleting site
    const handleDelete = (id) => {
        let idMatched = false;
        for (let i = 0; i < 9; i++) {
            const { _id } = product[i];
            if (id === _id) {
                console.log(id === _id)
                idMatched = true
                console.log(idMatched)
            }
        }
        if (user?.email === "admin@test.com" && idMatched) {
            return swal("Permission restriction!", "As a admin@test, you don't have permission to delete 9 core products. But you can delete your added products.", "info");
        }

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
            {
                tableLoading ?

                    Array(10)
                        .fill("")
                        .map((e, i) => (
                            <TableLoader key={i} style={{ opacity: Number(2 / i).toFixed(1) }} />
                        ))
                    :
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
                    </Table>}
        </div>
    );
};

export default ProductList;