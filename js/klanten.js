// Aantal willekeurige gebruikers dat je wilt ophalen
const aantalGebruikers = 6;

// API-eindpunt voor 6 willekeurige gebruikers
const apiEndpoint = `https://randomuser.me/api/?results=${aantalGebruikers}`;

// Gebruik de Fetch API om gegevens op te halen
fetch(apiEndpoint)
  .then(response => response.json())
  .then(data => {
    // Hier kun je de ontvangen gegevens verwerken
    const gebruikers = data.results;

    // Voor elke gebruiker, toon profielfoto (large), volledige naam en locatie
    gebruikers.forEach((gebruiker, index) => {
      const profielfoto = gebruiker.picture.large;
      const volledigeNaam = `${gebruiker.name.first} ${gebruiker.name.last}`;
      const locatie = `${gebruiker.location.city}, ${gebruiker.location.country}`;

      console.log(`Gebruiker ${index + 1}:`);
      console.log(`Profielfoto: ${profielfoto}`);
      console.log(`Volledige naam: ${volledigeNaam}`);
      console.log(`Locatie: ${locatie}`);
      console.log('---');
    });
  })
  .catch(error => console.error('Er is een fout opgetreden bij het ophalen van gegevens:', error));
