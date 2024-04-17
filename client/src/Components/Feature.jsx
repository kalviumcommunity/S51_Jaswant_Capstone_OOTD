import React from 'react';
import "./Feature.css"

const Feature = () => {
    // Define an array of color categories
    const colorCategories = [
        'Black Combinations',
        'White Combinations',
        'Red Combinations',
        'Yellow Combinations',
        'Blue Combinations',
        'Brown Combinations'
    ];

    const handleButtonClick = (category) => {
        console.log(`Clicked on ${category}`);
    };

    return (
        <div>
            <h2>Combinations</h2>
            <div className="color-buttons">
                {colorCategories.map((category, index) => (
                    <button className='combutton' key={index} onClick={() => handleButtonClick(category)}>
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Feature;
