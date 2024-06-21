import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const EditProduct = () => {


    const endpoint = `http://127.0.0.1:8000/api/product/`

    const [description, setDescription] = useState([""])
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)


    const navigate = useNavigate()
    const { id } = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            description: description,
            stock: stock,
            price: price
        })
        navigate("/")
    }


    useEffect(() => {
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setDescription(response.data.description)
            setPrice(response.data.price)
            setStock(response.data.stock)

        }
        getProductById()
    }, [endpoint, id])

    return (

            <div>
                <h3>Edit product</h3>
                <form onSubmit={update}>
                    <div>
                        <label>Description</label>
                        <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} />

                        <label>Price</label>
                        <input type='number' value={price} onChange={(e) => setPrice(e.target.value)} />

                        <label>Stock</label>
                        <input type='number' value={stock} onChange={(e) => setStock(e.target.value)} />

                    </div>
                    <button type='submit'>Editar</button>
                </form>

            </div>



    )
}

export default EditProduct