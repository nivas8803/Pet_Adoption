<html>
	<head>
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

    // Clear previous data
    animalListDiv.innerHTML = '';

    // Loop through fetched data and create HTML elements to display it
    data.animals.forEach(animal => {
        const animalElement = document.createElement('div');
        animalElement.innerHTML = `
            <h2>${animal.Name}</h2>
            <p>Type: ${animal.Type}</p>
            <p>Sex: ${animal.Sex}</p>
            <p>Status: ${animal.Status}</p>
            
            <!-- Add more properties as needed -->
        `;
        animalListDiv.appendChild(animalElement);
    });
}
</script>
</head>
<body>
	<h1>Fetch Data from ShelterLuv API</h1>

<button onclick="fetchData()">Fetch Data</button>
<h1>Animals Available for Adoption</h1>
<div id="animalList">
  <!-- Fetched data will be displayed here -->
</div>
</body>
</html>
