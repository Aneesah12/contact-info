import CocktailMakeOld from "./CocktailsOld";
import { screen, fireEvent, render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";


const cocktailResponse = {
    "drinks": [
    {
        "idDrink": "11000",
        "strDrink": "Mojito",
        "strCategory": "Cocktail",
        "strGlass": "Glass",
    }]
};

describe('Cocktails2', () => {
    it('should render type in your cocktail!', async () => {
        render(<CocktailMakeOld/>);

        expect(await screen.findByText('Type in your cocktail!')).toBeInTheDocument();
    });

    it('pass cocktail user input', async () => {
        render(<CocktailMakeOld/>);

        const userInput = screen.getByTestId("user-input");
        userEvent.type(userInput, "Mojito");

        expect(screen.getByTestId("user-input")).toHaveValue("Mojito");

        await fireEvent.submit(await screen.getByTestId("form"));

        // expect(await screen.getByText("Mojito")).toBeInTheDocument();
    });

})