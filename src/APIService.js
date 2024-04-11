export async function fetcthRestaurants() {
    try {
        const response = await fetch('https://halal-korean-restaurants-api.p.rapidapi.com/restaurants', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a24e4a32a9msh9eaebd14561771ep106651jsn8a58bcbd7c7b',
                'X-RapidAPI-Host': 'halal-korean-restaurants-api.p.rapidapi.com'
            }
        });
        return response.json();

    } catch (error) {

        throw new Error('Failed to fetch data from the server');
    }
}