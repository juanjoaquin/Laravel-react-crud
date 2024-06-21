import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CreateProduct = () => {

    const [description, setDescription] = useState([""])
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)

    const navigate = useNavigate()

    const endpoint = `http://127.0.0.1:8000/api/product`


    
    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {description: description, price:price, stock:stock})
        navigate('/')
    }

    return(
        <div>
            <h3>Create product</h3>
            <form onSubmit={store}>
                <div>
                    <label>Description</label>
                    <input type='text' value={description} onChange={(e)=> setDescription(e.target.value)} />

                    <label>Price</label>
                    <input type='number' value={price} onChange={(e)=> setPrice(e.target.value)} />

                    <label>Stock</label>
                    <input type='number' value={stock} onChange={(e)=> setStock(e.target.value)} />

                </div>
            <button type='submit'>Crear</button>
            </form>

        </div>
    )
}

export default CreateProduct