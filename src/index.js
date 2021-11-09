import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const searchboxInput = document.querySelector('[id="search-box"]');
const infoContainer = document.querySelector('.country-info');


searchboxInput.addEventListener('input', debounce(() => {
fetchCountries(searchboxInput.value)
        .then(showCountry)
        .catch(error => showError(error));
  }, DEBOUNCE_DELAY)
);
