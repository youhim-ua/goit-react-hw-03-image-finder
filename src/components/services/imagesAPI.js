import axios from 'axios';

const KEY = '20337553-a297616fd4599e165a4d47360';

function fetchImages({ qwery = '', page = 1, key = KEY }) {
  return axios
    .get(
      `https://pixabay.com/api/?q=${qwery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(({ data }) => data);
}

export default fetchImages;
