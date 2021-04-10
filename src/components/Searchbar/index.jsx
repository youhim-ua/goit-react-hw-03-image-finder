import { Component } from 'react';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
  render() {
    const { onSubmit } = this.props;

    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={event => onSubmit(event)}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            name="searchWord"
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
