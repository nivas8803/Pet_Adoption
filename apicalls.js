<html>
	<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<style>
  .animal-photo {
    max-width: 200px;
    max-height: 200px;
    margin-bottom: 10px;
  }
</style>
		<script>
			function fetchData() {
			
    // Construct API endpoint
    const apiUrl = 'https://www.shelterluv.com/api/v1/animals';

    // Fetch data from ShelterLuv API with API key
    fetch(apiUrl, {
        headers: {
            'X-Api-Key': '79148c82-c4d1-43ee-8da4-70f4bc30f65c'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
			displayData(data);
			
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayData(data) {
    const animalListDiv = document.getElementById('animalList');
	const animalTypeFilter = document.getElementById('animalTypeFilter').value;
    // Clear previous data
    animalListDiv.innerHTML = '';

    // Loop through fetched data and create HTML elements to display it
    data.animals.forEach(animal => {
	if ((animalTypeFilter === '' || animal.Type === animalTypeFilter)){
        const animalElement = document.createElement('div');
        animalElement.innerHTML = `
            <h2>${animal.Name}</h2>
            <p>Type: ${animal.Type}</p>
            <p>Sex: ${animal.Sex}</p>
            <p>Status: ${animal.Status}</p>
<h3>Photos:</h3>
            <div>
                ${animal.Photos.map(photo => `<img src="${photo}" class="animal-photo" alt="${animal.Name} photo">`).join('')}
            </div>
            <!-- Add more properties as needed -->
        `;
        animalListDiv.appendChild(animalElement);
		}
    });
}
</script>
</head>
<body>
	<h1>Fetch Data from ShelterLuv API</h1>
	<div>
  <label for="animalTypeFilter">Filter by Animal Type:</label>
  <select id="animalTypeFilter">
    <option value="">All</option>
    <option value="Dog">Dog</option>
    <option value="Cat">Cat</option>
  </select>
</div>

<button onclick="fetchData()">Fetch Data</button>
<h1>Animals Available for Adoption</h1>
<div id="animalList">
  <!-- Fetched data will be displayed here -->
</div>
</body>
</html>
