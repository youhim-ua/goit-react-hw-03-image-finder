import { Component } from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  onLoad: PropTypes.func.isRequired,
};

export default Button;
