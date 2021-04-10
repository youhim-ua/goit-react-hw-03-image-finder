import { Component } from 'react';
import styles from './ImageGalleryItem.module.css';

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

export default ImageGalleryItem;
