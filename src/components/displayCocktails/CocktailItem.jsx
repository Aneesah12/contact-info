export const CocktailItem = ({ cocktail }) => {
    return (
        <ul>
            <li>
                <div>
                    <p>{cocktail.strDrink}</p>
                    <small>{cocktail.strCategory}</small>
                    <br/>
                    <small>{cocktail.strGlass}</small>
                </div>
            </li>
        </ul>
    )
}