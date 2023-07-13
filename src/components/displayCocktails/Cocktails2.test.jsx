import CocktailMake2 from "./Cocktails2";
import { screen, render } from '@testing-library/react';
import Cocktails2 from "./Cocktails2";
import * as CocktailsGateway from "./CocktailsGateway"

const cocktailResponse = {
        "drinks": [
            {
                "idDrink": "11000",
                "strDrink": "Mojito",
                "strCategory": "Cocktail",
                "strGlass": "Glass",
            },
            {
                "idDrink": "12000",
                "strDrink": "Mojito Blue",
                "strCategory": "Cocktail",
                "strGlass": "Jar",
            }]
    };

describe('Cocktails2', () => {

    it('should render type in your cocktail!', async () => {
        jest.spyOn(CocktailsGateway, 'retrieveCocktailData').mockResolvedValue(cocktailResponse);

        render(<CocktailMake2/>);

        expect(await screen.findByText('Your cocktails!!!')).toBeInTheDocument();
        expect(await screen.findByText('Mojito')).toBeInTheDocument();
        expect(await screen.findByText('Glass')).toBeInTheDocument();
        expect(await screen.queryByText('Jar')).not.toBeInTheDocument();
    });
})