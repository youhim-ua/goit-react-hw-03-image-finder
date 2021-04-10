import { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component {
  render() {
    const { onLoad } = this.props;
    return (
      <button onClick={() => onLoad()} type="button" className={styles.Button}>
        Load more
      </button>
    );
  }
}

export default Button;
