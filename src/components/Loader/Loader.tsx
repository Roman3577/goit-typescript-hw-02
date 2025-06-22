import { PuffLoader } from 'react-spinners';
import styles from './Loader.module.css';

const Loader: React.FC = () => (
  <div className={styles.loader}>
    <PuffLoader color="#007aff" />
  </div>
);

export default Loader;
