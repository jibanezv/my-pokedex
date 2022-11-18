export const searchPkmn = async (p) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${p}`
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}