import { useState, FormEvent, ChangeEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import styles from './SearchBar.module.css';

interface Props {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSubmit }) => {
  const [input, setInput] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) {
      toast.error('Please, type your text');
      return;
    }
    onSubmit(input.trim());
    setInput('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          value={input}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
      <Toaster position="top-right" />
    </header>
  );
};

export default SearchBar;
