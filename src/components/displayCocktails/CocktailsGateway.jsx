const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito";

//move to a different file, for mocking
export async function retrieveCocktailData() {
    const response = await fetch(url); //cocktailsGateway within a promise
    let promise = response.json();
    console.log("RESPONSE2: ", promise)
    return promise;
    // return promise;
}
