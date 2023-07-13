import {useEffect, useState} from "react";
import {retrieveCocktailData} from "./CocktailsGateway";

//client
//layer between react component and getting the data
//hook is decoupling react component with how to get the data
//input (useCocktails) to interact with react component, cocktailsGateway is the way to get the data/repository
const useCocktails = () => {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        const loadCocktails = async () => {
            //abstract react component from how to get the data
           retrieveCocktailData().then(data => setCocktails(data.drinks));
        }
        loadCocktails()
    }, [])

    console.log("COCKTAILS ", cocktails);
    return { cocktails };
}

export default useCocktails;