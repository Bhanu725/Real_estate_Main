import React, { useState } from "react";
import "./index.css"; // Import the CSS file for styling
import axios from "axios";

function Hform() {
    const [formData, setFormData] = useState({
        sellerName: "",
        phoneNumber: "",
        email: "",
        location: "",
        street: "",
        price: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Replace with your form submission logic
       const res = axios.post('http://localhost:8000/api/sell/house/create',{formData})
       if(res.data&&res.success){
        console.log(`created`);
       }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="form-container">
            <h1>Seller Form</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="sellerName">Seller Name: </label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="sellerName"
                                    name="sellerName"
                                    value={formData.sellerName}
                                    onChange={handleChange}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="phoneNumber">Phone Number: </label>
                            </td>
                            <td>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="email">Email: </label>
                            </td>
                            <td>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="location">Location (pincode): </label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="street">Street: </label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="street"
                                    name="street"
                                    value={formData.street}
                                    onChange={handleChange}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="price">Bed-Rooms number: </label>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id="flat"
                                    name="flat"
                                    value={formData.flat}
                                    onChange={handleChange}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="price">Price: </label>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="area">Area Sq-ft: </label>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    id="area"
                                    name="area"
                                    value={formData.area}
                                    onChange={handleChange}
                                    required
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit">Submit: </button>
            </form>
        </div>
    );
}

export default Hform;