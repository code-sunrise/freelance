console.log("Dashboard script Successful")

const apiKey = "806bd43f89e88efa6770411781d8e9a7c8f51ae0"; // Replace with your actual API key
const baseUrl = "https://www.giantbomb.com/api/";
console.log(baseUrl, apiKey)

async function fetchGames() {
    // Adding the 'limit' parameter to the query string
    const url = `${baseUrl}games/?api_key=${apiKey}&format=json&limit=5`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response (limited to 5 games):", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchGames();
