// PropertyForm.js
import React, { useState } from 'react';
import axios from 'axios';

const PropertyForm = () => {
    const [property, setProperty] = useState({
        // Initialize all your property attributes here
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProperty({ ...property, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/property', property);
            console.log('Property created:', response.data);
            // Handle post-creation logic (e.g., redirection, notifications)
        } catch (error) {
            console.error('Failed to create property:', error);
        }
    };

    return (
        <div>
            <h2>Create New Property</h2>
            <form onSubmit={handleSubmit}>
                {/* Add inputs for each property attribute */}
                {/* Example for roomNumber: */}
                <div>
                    <label>Room Number:</label>
                    <input
                        type="text"
                        name="roomNumber"
                        value={property.roomNumber}
                        onChange={handleChange}
                    />
                </div>
                {/* Repeat for other attributes */}
                <button type="submit">Create Property</button>
            </form>
        </div>
    );
};

export default PropertyForm;
