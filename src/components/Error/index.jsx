import { Component } from 'react';
import ErrorImage from './Error.png';
import styles from './Error.module.css';

class Error extends Component {
  render() {
    return (
      <div className={styles.errorContainer}>
        <p className={styles.errorText}>
          OOPS!!! Something goes wrong. Try later.
        </p>
        <img
          className={styles.errorImage}
          src={ErrorImage}
          alt="red attention sign"
        />
      </div>
    );
  }
}

export default Error;
