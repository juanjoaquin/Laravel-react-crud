import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Notification from './Notification';

const ShowProducts = () => {

    const [products, setProducts] = useState([]);
    const [notification, setNotification] = useState("");

    const endpoint = 'http://127.0.0.1:8000/api'

    useEffect(() => {
        getAllProducts()
    }, [])


    const getAllProducts = async () => {
        const response = await axios.get(`${endpoint}/products`)
        setProducts(response.data)
    }

    const deleteProduct = async (id) => {
        await axios.delete(`${endpoint}/product/${id}`);
        setNotification("Producto eliminado broder!");
        getAllProducts()
    }

    useEffect(() => {
        if(notification) {
            const timer = setTimeout(() => {
                setNotification('');
            }, 3000);

            return()=> clearTimeout(timer);
        }
    }, [notification])


    return (
        <div>
            <Link to="/create">Create</Link>
            <Notification message={notification} />
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                                <Link to={`/edit/${product.id}`}>Edit</Link>
                                <button onClick={() => deleteProduct(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowProducts