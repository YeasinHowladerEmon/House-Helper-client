
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { useAuth } from '../../../Hooks/useAuth/useAuth';
import toast from 'react-hot-toast';
import { UserContext } from '../../../App';
import TableLoader from '../../Home/TableLoader/TableLoader'

const CustomerOrderLists = () => {
    const { user } = useAuth();
    const { admin } = useContext(UserContext)
    // console.log(user.email)
    const [orderList, setOrderList] = useState([])
    const [tableLoading, setTableLoading] = useState(orderList.length === 0 ? true : false)
    useEffect(() => {
        axios.get(`http://localhost:5000/orderList?email=${user.email}`)
            .then(res => {
                setTableLoading(false)
                setOrderList(res.data)
            })
            .catch(e => console.log(e))
    }, [user.email])
    console.log(orderList.length);


    const handleOnchangeStatus = (id, status) => {
        const modifiedStatus = { id, status }
        axios.put("http://localhost:5000/orderStatusUpdate", modifiedStatus)
            .then(res => {
                console.log(res.data);
                res.data && toast.success(`set to ${status}`)
            })
            .catch(err => toast.error(err.message));
    }

    return (
        <div>
            {
                tableLoading ? <><TableLoader /> <TableLoader /> <TableLoader /> <TableLoader /> </> :

                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        {
                            orderList.map((order, index) => {
                                return (
                                    <tbody key={order._id}>
                                        <tr>
                                            <td>{index}</td>
                                            <td>{order.cartItems.map(e => <p key={e._id}>{e.body.name}</p>)}</td>
                                            <td>{order.cartItems.map(e => <p key={e._id}>{e.qty}</p>)}</td>
                                            <td>{order.customerData.email}</td>
                                            <td>{order.customerData.address}</td>
                                            <td>{order.customerData.mobileNumber}</td>
                                            <td>{order.orderTime}</td>
                                            <td>
                                                {
                                                    admin ?
                                                        <select onChange={e => handleOnchangeStatus(order._id, e.target.value)}
                                                            defaultValue={order.status}
                                                        >
                                                            <option className="bg-white text-muted">Pending</option>
                                                            <option className="bg-white text-muted">On going</option>
                                                            <option className="bg-white text-muted">Done</option>
                                                        </select>
                                                        :
                                                        <>
                                                            {
                                                                order.status ?
                                                                    <h6>{order.status}</h6> :
                                                                    <h6>Pending</h6>
                                                            }
                                                        </>
                                                }
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

export default CustomerOrderLists;