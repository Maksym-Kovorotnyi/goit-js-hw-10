export function onCountryInfoMurkup(countries) {
    return countries.map(country => {
        return `
         <img class="country-flag" width=40 height=30 src=${country.flags.svg} alt="Flag of ${country.name.official}">

            <p class="country-name">${country.name.official}</p>

            <p class='country-info'>Capital:${country.capital}</p>

            <p class='country-info'>Population:${country.population}</p>
            <p class='country-info'>Languages:${Object.values(country.languages).join(', ')}</p>
` 
    }).join('');
}

export function onCountryList(countries) {
    return countries.map(country => {
        return `
        <div class = 'item-container'>
         <img class="country-flag" width=40 height=30 src=${country.flags.svg} alt="Flag of ${country.name.common}">

            <p class="country-name">${country.name.common}</p>
            </div>`
    }).join('');
}
