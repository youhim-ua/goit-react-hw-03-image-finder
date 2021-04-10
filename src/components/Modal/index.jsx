import { Component } from 'react';
import styles from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    const { onClose } = this.props;
    if (event.code === 'Escape') {
      onClose();
    }
  };

  handleBackdropClose = event => {
    const { onClose } = this.props;
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  render() {
    const {
      options: { images, id },
    } = this.props;
    const { largeImageURL, tags } = images.find(image => image.id === id);

    return (
      <div
        onClick={event => this.handleBackdropClose(event)}
        className={styles.Overlay}
      >
        <div className={styles.Modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}

export default Modal;
