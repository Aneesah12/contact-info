import {useState} from "react";
import {v4} from 'uuid';
import '../styles.css'

const url2 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

function CocktailMake2() {
    const [cocktailInput, setCocktailInput] = useState("");
    const [cocktails, setCocktails] = useState([]);

    async function getCocktail(userCocktail) {
        try {
            const response2 = await fetch(url2 + userCocktail);
            console.log("RESPONSE2: ", response2)
            console.log("COCKTAIL: ", userCocktail)
            const data2 = await response2.json();
            setCocktails(data2.drinks)
            console.log("DATA2: ", data2)

        } catch (e) {
            console.log("We got here: ", e)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        return getCocktail(cocktailInput);
    };


    return (
        <div style={{ color: 'blue'}}>
            {cocktails &&
            <ul>
                {cocktails.map(cocktail =>
                    <li key={v4()}>
                        <div>
                            <p>{cocktail.strDrink}</p>
                            <small>{cocktail.strCategory}</small>
                        </div>
                    </li>
                )}
            </ul>
            }
            {!cocktails &&
            <p>NO COCKTAIL called {cocktailInput}</p>
            }
            <form data-testid="form" onSubmit={handleSubmit}>
                <label>
                    <p data-testid="cocktail">Type in your cocktail!</p>
                    <input type="text"
                           data-testid="user-input"
                           onChange={event => setCocktailInput(event.target.value)}
                           value={cocktailInput}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CocktailMake2;