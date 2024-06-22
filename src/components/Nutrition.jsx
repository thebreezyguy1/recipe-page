import React from "react";

const Nutrition = () => {
    return(
        <div className="container nutrition-container">
            <h2>Nutrition</h2>
            <p>The table below shows nutritional values per serving without the additional fillings.</p>
            <table>
                <tr>
                    <td className="nutrients">Calories</td>
                    <td className="values">277kcal</td>
                </tr>
                <tr>
                    <td className="nutrients">Carbs</td>
                    <td className="values">0g</td>
                </tr>
                <tr>
                    <td className="nutrients">Protein</td>
                    <td className="values">20g</td>
                </tr>
                <tr className="last-row">
                    <td className="nutrients">Fat</td>
                    <td className="values">22g</td>
                </tr>
            </table>
        </div>
    )
}

export default Nutrition