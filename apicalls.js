fetch('https://www.shelterluv.com/api/v1/animals')
    .then(response => response.json())
    .then(data => {
        // Filter animals based on criteria
        const filteredAnimals = data.animals.filter(animal => {
            // Apply filtering logic here
            // Example: Filter for dogs that are good with cats
            // You can add more conditions for other filters
            const isDog = animal.Type === 'Dog';
            const isGoodWithCats = animal.Attributes.find(attr => attr.AttributeName === 'Cat Score- Unknown');
            return isDog && isGoodWithCats;
        });

        // Log filtered animals to console
        console.log(filteredAnimals);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
