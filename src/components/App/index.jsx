import { Component } from 'react';
import PropTypes from 'prop-types';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import ImageGalleryItem from '../ImageGalleryItem';
import Modal from '../Modal';
import Button from '../Button';
import Spinner from '../Loader';
import Error from '../Error';
import fetchImages from '../services/imagesAPI';
import pageScroller from '../services/pageScroller';
import '../../index.css';

class App extends Component {
  state = {
    images: [],
    qwery: '',
    page: 1,
    id: '',
    showModal: false,
    showSpinner: false,
    error: false,
  };

  handleInputFetch = event => {
    event.preventDefault();
    this.setErrorFalse();
    const searchWord = event.target.searchWord.value;
    if (searchWord !== '') {
      this.toggleSpinner();
      fetchImages({ qwery: searchWord })
        .then(({ hits }) => {
          this.setState({ images: [...hits], qwery: searchWord, page: 1 });
        })
        .catch(() => this.setErrorTrue())
        .finally(() => this.toggleSpinner());
    }
  };

  handleButtonFetch = () => {
    const { qwery, page } = this.state;
    this.toggleSpinner();
    this.setErrorFalse();
    fetchImages({ qwery: qwery, page: page + 1 })
      .then(({ hits }) => {
        this.setState(({ images, page }) => ({
          images: [...images, ...hits],
          page: page + 1,
        }));
        pageScroller();
      })
      .catch(() => this.setErrorTrue())
      .finally(() => this.toggleSpinner());
  };

  setErrorTrue = () => this.setState({ error: true });

  setErrorFalse = () => this.setState({ error: false });

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
    this.setState(({ showSpinner }) => ({
      showSpinner: !showSpinner,
    }));
  };

  render() {
    const { showModal, images, showSpinner, error } = this.state;
    const doWeRenderLoadButton = images.length !== 0 && !showSpinner;

    return (
      <>
        <Searchbar onSubmit={this.handleInputFetch} />
        {error ? (
          <Error />
        ) : (
          <ImageGallery>
            <ImageGalleryItem images={images} onSetID={this.handleSetID} />
          </ImageGallery>
        )}
        {showSpinner && <Spinner />}
        {doWeRenderLoadButton && <Button onLoad={this.handleButtonFetch} />}
        {showModal && (
          <Modal options={this.state} onClose={this.handleToggleModal} />
        )}
      </>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSetID: PropTypes.func.isRequired,
};

Button.propTypes = {
  onLoad: PropTypes.func.isRequired,
};

Modal.propTypes = {
  options: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default App;
