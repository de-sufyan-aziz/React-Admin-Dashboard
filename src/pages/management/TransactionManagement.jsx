import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import AdminSideBar from '../../components/AdminSideBar'


const img = "https://images.unsplash.com/photo-1580893724873-940fab3ed07d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const TransactionMangement = () => {

    const orderItems = [
        {
            _id: "asdasd",
            name: "Puma Shoes",
            photo: img,
            quantity: 12,
            price: 4000
        }
    ];

    const [order, setOrder] = useState({
        _id: "adasdaasd",
        name: "Sufi",
        address: "77 black street",
        city: "Newyork",
        state: "California",
        country: "USA",
        pincode: 232121,
        status: "Processing",
        subTotal: 4000,
        discount: 1200,
        shippingCharges: 0,
        tax: 200,
        total: 4000 + 200 + 0 - 1200,
        orderItems,
    });

    const { name, address, city, state, country, pincode, status, subTotal, discount, shippingCharges, tax, total } = order;

    const updateHandler = () => (
        setOrder((prev) => ({
            ...prev,
            status: prev.status === "Processing" ? "Shipped" : "Delivered"
        }))
    )

    return (
        <div className='adminContainer'>
            <AdminSideBar />

            <main className='product-management'>
                <section style={{ padding: "2rem" }}>
                    <h2>Order Items</h2>
                    {
                        order.orderItems.map(e => (
                            <ProductCard name={e.name} price={e.price} _id={e._id} quantity={e.quantity} photo={e.photo} />
                        ))
                    }
                </section>

                <article className='shipping-info-card'>
                    <h1>Order Info</h1>
                    <h5>User Info</h5>
                    <p>Name: {name}</p>
                    <p>Address: {`${address}, ${city}, ${state}, ${country}, ${pincode}`}</p>

                    <h5>Amount Info</h5>
                    <p>Subtotal: {subTotal}</p>
                    <p>Shipping Charges: {shippingCharges}</p>
                    <p>Tax: {tax}</p>
                    <p>Discount: {discount}</p>
                    <p>Total: {total}</p>
                    <p>Subtotal: {subTotal}</p>

                    <h5>Status Info</h5>
                    <p>Status:  <span className={status === "Delivered" ? "purple" : status === "Shipped" ? "green" : "red"}>{status}</span></p>

                    <button onClick={updateHandler}>Process Order</button>

                </article>
            </main>
        </div>
    )
}

const ProductCard = ({ name, photo, price, quantity, _id }) => (
    <div className='transaction-product-card'>
        <img src={photo} alt={name} />
        <Link to={`/product/${_id}`} >{name}</Link>
        <span>${price} X {quantity} = ${price * quantity}</span>
    </div>
)

export default TransactionMangement
