import { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.css';

export default class Spinner extends Component {
  render() {
    return (
      <Loader
        className={styles.loader}
        type="ThreeDots"
        color="#3f51b5"
        height={40}
        width={100}
      />
    );
  }
}
