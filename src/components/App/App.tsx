import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { fetchImages, UnsplashImage } from '../../api/api';
import '../../App.css';

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalData, setModalData] = useState<UnsplashImage | null>(null);

  useEffect(() => {
    if (!query) return;

    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchImages(query, page);
        setImages(prev => [...prev, ...data.results]);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [query, page]);

  const handleSearch = (q: string) => {
    setQuery(q);
    setImages([]);
    setPage(1);
    setError(false);
  };

  const handleLoadMore = () => setPage(prev => prev + 1);
  const openModal = (img: UnsplashImage) => setModalData(img);
  const closeModal = () => setModalData(null);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
      {modalData && <ImageModal data={modalData} onClose={closeModal} />}
    </div>
  );
};

export default App;
