import axios from 'axios';

function fetchImages(qwery, page, key) {
  return axios
    .get(
      `https://pixabay.com/api/?q=${qwery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(({ data }) => data);
}

export { fetchImages };
