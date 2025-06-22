import Modal from 'react-modal';
import styles from './ImageModal.module.css';
import { UnsplashImage } from '../../api/api';

Modal.setAppElement('#root');

interface Props {
  data: UnsplashImage | null;
  onClose: () => void;
}

const ImageModal: React.FC<Props> = ({ data, onClose }) => {
  if (!data) return null;
  return (
    <Modal
      isOpen
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <img src={data.urls.regular} alt={data.alt_description ?? ''} />
      <div className={styles.info}>
        <p>Author: {data.user.name}</p>
        <p>Likes: {data.likes}</p>
        <p>{data.description ?? 'Без опису'}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
