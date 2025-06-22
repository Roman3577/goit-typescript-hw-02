import styles from './ImageCard.module.css';
import { UnsplashImage } from '../../api/api';

interface Props {
  image: UnsplashImage;
  onClick: (img: UnsplashImage) => void;
}

const ImageCard: React.FC<Props> = ({ image, onClick }) => (
  <div className={styles.card} onClick={() => onClick(image)}>
    <img src={image.urls.small} alt={image.alt_description ?? ''} />
  </div>
);

export default ImageCard;
