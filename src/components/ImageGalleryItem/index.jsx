import { Component } from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  render() {
    const { images, onSetID } = this.props;

    return images.map(({ id, webformatURL, tags }) => (
      <li
        key={id}
        onClick={() => onSetID(id)}
        className={styles.ImageGalleryItem}
      >
        <img
          src={webformatURL}
          alt={tags}
          className={styles.ImageGalleryItemImage}
        />
      </li>
    ));
  }
}

ImageGalleryItem.propTypes = {
  onSetID: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageGalleryItem;
