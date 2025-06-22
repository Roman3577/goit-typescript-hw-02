import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { UnsplashImage } from '../../api/api';

interface Props {
  images: UnsplashImage[];
  onImageClick: (img: UnsplashImage) => void;
}

const ImageGallery: React.FC<Props> = ({ images, onImageClick }) => (
  <ul className={styles.gallery}>
    {images.map(img => (
      <li key={img.id}>
        <ImageCard image={img} onClick={onImageClick} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
