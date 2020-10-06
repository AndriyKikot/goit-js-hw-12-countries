import './styles.css';



fetch(`https://restcountries.eu/rest/v2/all`)
    .then(response => response.json())
    .then(data => console.log(data));

