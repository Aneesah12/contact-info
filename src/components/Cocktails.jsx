import React from "react";
import { useState } from "react";

function CocktailMake() {
    const [cocktails, setCocktails] = useState([]);

    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
    const fetchData = async() => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setCocktails(json.drinks);
        } catch (e) {
            console.log("error", e);
        }
    };
    // console.log("COCKTAIL: ", cocktails);

    // const searchItems = (searchValue) => {
    //     setSearchInput(searchValue)
    // console.log("*****: " + searchValue)
    // }

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        console.log("COCKTAIL: " + cocktails)
        cocktails.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
    }

    // const handleChange = event => {
    //     setCocktails(event.target.value);
    //
    //     // 👇️ this is the input field itself
    //     console.log(event.target);
    //
    //     // 👇️ this is the new value of the input
    //     console.log(event.target.value);
    // };


    return (
            <div>
                <div>
                {cocktails.map((drink) => (
                    <div key={drink.idDrink}>
                        <h2>{drink.strDrink}</h2>
                    </div>
                    ))}
                </div>
            <button onClick={fetchData}>Get your cocktail!</button>
                <input icon='search'
                       placeholder='Search...'
                       onChange={(e) => searchItems(e.target.value)}

                />
            </div>
    );

}

export default CocktailMake;