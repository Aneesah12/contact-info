import {useEffect, useState} from "react";
import {v4} from 'uuid';
import '../styles.css'

//fetches data
//filters data
//maps through the data
//renders the component
//renders the cocktails


const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito";

const CocktailMakeOld = () => {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        const loadCocktails = async () => {
            const response2 = await fetch(url);
            console.log("RESPONSE2: ", response2)
            const data2 = await response2.json();
            setCocktails(data2.drinks)
            console.log("DATA2: ", data2)

        }
        loadCocktails()
    }, [])

    return (
        <div style={{ color: 'blue'}}>
            <h2>Your cocktails!!!</h2>
            <ul>
                {cocktails.filter(cocktail => cocktail.strGlass.includes("glass"))
                    .map(cocktail =>
                        <li key={v4()}>
                            <div>
                                <p>{cocktail.strDrink}</p>
                                <small>{cocktail.strCategory}</small>
                                <br/>
                                <small>{cocktail.strGlass}</small>
                            </div>
                        </li>
                )}
            </ul>
        </div>
    )
}

export default CocktailMakeOld;