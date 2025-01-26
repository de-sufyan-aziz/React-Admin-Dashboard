import React from 'react'
import { useState, useCallback } from 'react'
import AdminSideBar from '../../components/AdminSideBar'

const img = "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ProductManagement = () => {

    const [name, setName] = useState("Puma Shoes");
    const [price, setPrice] = useState(1231);
    const [stock, setStock] = useState(898);
    const [photo, setPhoto] = useState(img);

    const [nameUpdate, setNameUpdate] = useState(name);
    const [priceUpdate, setPriceUpdate] = useState(price);
    const [stockUpdate, setStockUpdate] = useState(stock);
    const [photoUpdate, setPhotoUpdate] = useState(photo);


    const changeImageHandler = (e) => {
        const file = e.target.files?.[0];
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                if (typeof reader.result === 'string') {
                    setPhotoUpdate(reader.result);
                }
            }
        }
    }

    // Submit Handler
    const submitHandler = (e) => {
        e.preventDefault();

        setPhoto(photoUpdate);
        setName(nameUpdate);
        setStock(stockUpdate);
        setPrice(priceUpdate);
        

    }

    return (
        <div className="adminContainer">
            <AdminSideBar />

            <main className='product-management'>
                <section>

                    <strong>ID - asdsad</strong>
                    <img src={photo} alt="Product" />
                    <p>{name}</p>
                    {
                        stock > 0 ? (<span className='green'>{stock} Available</span>) : (<span className='red'>Not Available</span>)
                    }
                    <h3>${price}</h3>
                </section>

                <article>
                    <form onSubmit={submitHandler}>
                        <h2>Manage Product</h2>
                        <div>
                            <label >Name</label>
                            <input required type="text" placeholder='Name' id="" value={nameUpdate} onChange={e => setNameUpdate(e.target.value)} />
                        </div>
                        <div>
                            <label >Price</label>
                            <input required type="number" placeholder='Price' id="" value={priceUpdate} min={0} onChange={e => setPriceUpdate(Number(e.target.value))} />
                        </div>
                        <div>
                            <label >Stock</label>
                            <input required type="number" placeholder='Stock' id="" value={stockUpdate} onChange={e => setStockUpdate(Number(e.target.value))} min={0} />
                        </div>
                        <div>
                            <label >Photo</label>
                            {
                                photo === "" || photo === null ? <input required type="file" placeholder='URL' id="" accept='image/*' onChange={changeImageHandler} /> : <input type="file" placeholder='URL' id="" accept='image/*' onChange={changeImageHandler} />
                            }

                        </div>

                        {photo && <img src={photoUpdate} alt="your image" />}

                        <button type='submit' >Update</button>
                    </form>
                </article>
            </main>
        </div>
    )
}

export default ProductManagement
