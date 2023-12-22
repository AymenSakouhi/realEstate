import React, { useState } from 'react';

const PropertySearchComponent = () => {
    const [searchParams, setSearchParams] = useState({
        location: '',
        availableDate: '',
        price: ''
    });

    const handleInputChange = (e) => {
        setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/search?starting_date=${searchParams.availableDate}&ending_date=${searchParams.availableDate}&minimum_rental=${searchParams.price}&maximum_rental=${searchParams.price}`);
            const properties = await response.json();
            // Handle the search results
            console.log(properties);
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="location"
                value={searchParams.location}
                onChange={handleInputChange}
                placeholder="Location"
            />
            <input
                type="date"
                name="availableDate"
                value={searchParams.availableDate}
                onChange={handleInputChange}
            />
            <input
                type="number"
                name="price"
                value={searchParams.price}
                onChange={handleInputChange}
                placeholder="Max Price"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default PropertySearchComponent;
