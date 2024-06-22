import React from "react";

const Description = () => {
    return(
        <div className="container desc-container">
            <h1>Simple Omelette Recipe</h1>
            <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
            <div className="preparation-time-container">
                <h3>Preparation time</h3>
                <ul>
                    <li><b>Total:</b> Approximately 10 minutes</li>
                    <li><b>Preparation:</b> 5 minutes</li>
                    <li><b>Cooking:</b> 5 minutes</li>
                </ul>
            </div>
        </div>
    )
}

export default Description