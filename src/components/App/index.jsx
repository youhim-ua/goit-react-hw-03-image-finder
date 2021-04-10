import { Component } from 'react';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import ImageGalleryItem from '../ImageGalleryItem';
import Modal from '../Modal';
import Button from '../Button';
import Spinner from '../Loader';
import { fetchImages } from '../services/imagesAPI';
import pageScroller from '../services/pageScroller';
import '../../index.css';

const KEY = '20337553-a297616fd4599e165a4d47360';

class App extends Component {
  state = {
    images: [],
    qwery: '',
    page: 1,
    id: '',
    showModal: false,
    showSpinner: false,
  };

  handleInputFetch = event => {
    event.preventDefault();
    const searchWord = event.target.searchWord.value;
    const defaultPage = 1;
    if (searchWord !== '') {
      this.toggleSpinner();
      fetchImages(searchWord, defaultPage, KEY).then(({ hits }) => {
        this.setState({ images: [...hits], qwery: searchWord, page: 1 });
        this.toggleSpinner();
      });
    }
  };

  handleButtonFetch = () => {
    const { qwery, page } = this.state;
    this.toggleSpinner();
    fetchImages(qwery, page + 1, KEY).then(({ hits }) => {
      this.setState(({ images, page }) => ({
        images: [...images, ...hits],
        page: page + 1,
      }));
      pageScroller();
      this.toggleSpinner();
    });
  };

  handleSetID = id => {
    this.setState({ id });
    this.handleToggleModal();
  };

  handleToggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  toggleSpinner = () => {
    this.setState(({ showSpinner }) => ({ showSpinner: !showSpinner }));
  };

  render() {
    const { showModal, images, showSpinner } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleInputFetch} />
        <ImageGallery>
          <ImageGalleryItem images={images} onSetID={this.handleSetID} />
        </ImageGallery>
        {showSpinner && <Spinner />}
        {images.length !== 0 && !showSpinner && (
          <Button onLoad={this.handleButtonFetch} />
        )}
        {showModal && (
          <Modal options={this.state} onClose={this.handleToggleModal} />
        )}
      </>
    );
  }
}

export default App;
