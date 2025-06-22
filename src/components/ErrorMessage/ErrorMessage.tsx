import styles from './ErrorMessage.module.css';
const ErrorMessage: React.FC = () => (
  <div className={styles.error}>Error while loading an image 😢</div>
);
export default ErrorMessage;
