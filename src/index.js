import { fetchCountries } from './fetchCountries';
import { onCountryInfoMurkup } from './murkup';
import { onCountryList } from './murkup';
import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const countryInfo = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');
countryList.style = ''





const input = document.querySelector('#search-box')

input.addEventListener('input', debounce(onInputCountryName, DEBOUNCE_DELAY))

function onInputCountryName(e) {
    fetchCountries(e.target.value.trim()).then(countries => {
        if (countries.length > 10) {
            countryInfo.innerHTML = '';
            countryList.innerHTML = '';
           return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.') 
        }
        else if (e.target.value.trim() === ''){
            countryInfo.innerHTML = '';
            countryList.innerHTML = '';
            return
        }
        else if (countries.length === 1) {
            countryInfo.innerHTML = '';
            countryList.innerHTML = '';
            countryInfo.insertAdjacentHTML('beforeend', onCountryInfoMurkup(countries))
        }
        else if (countries.length >= 2 && countries.length < 10) {
            countryInfo.innerHTML = '';
            countryList.innerHTML = '';
            countryList.insertAdjacentHTML('beforeend', onCountryList(countries))
        }
       else (Notiflix.Notify.failure('Oops, there is no country with that name'))
    }) 
   
    }
    





