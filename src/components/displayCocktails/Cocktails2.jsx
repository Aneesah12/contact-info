import { useMemo } from "react";
import {v4} from 'uuid';
import '../styles.css'
import useCocktails from "./FetchCocktails";
import {CocktailItem} from "./CocktailItem";

const getOnlyGlassCocktails = (cocktails) => {
    return cocktails.filter(cocktail => (cocktail.strGlass).toLowerCase().includes("glass"));
}

const useOnlyGlassCocktails = () => {
    const { cocktails } = useCocktails();

    const glassCocktails = useMemo(() => {
        return getOnlyGlassCocktails(cocktails)
    }, [cocktails])

    return { glassCocktails }
}

// const CocktailItem = ({ cocktail }) => {
//     return (
//         <ul>
//             <li>
//                 <div>
//                     <p>{cocktail.strDrink}</p>
//                     <small>{cocktail.strCategory}</small>
//                 <br/>
//                     <small>{cocktail.strGlass}</small>
//                 </div>
//             </li>
//         </ul>
//     )
// }

const CocktailMake2 = () => {
    const { glassCocktails } = useOnlyGlassCocktails();

    return (
        <div style={{ color: 'blue'}}>
            <h2>Your cocktails!!!</h2>
            <ul>
                {glassCocktails
                    .map(cocktail =>
                    <CocktailItem key={v4()} cocktail={cocktail} />
                )}
            </ul>
        </div>
    )
}

export default CocktailMake2;