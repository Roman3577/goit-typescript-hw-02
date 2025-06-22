import axios from 'axios';

const ACCESS_KEY = '…';
const BASE_URL = 'https://api.unsplash.com/search/photos';

export interface UnsplashUser {
  name: string;
}

export interface UnsplashImage {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
  };
  user: UnsplashUser;
  likes: number;
  description: string | null;
}

export interface FetchResponse {
  results: UnsplashImage[];
  total: number;
  total_pages: number;
}

export const fetchImages = async (
  query: string,
  page = 1,
  perPage = 12,
): Promise<FetchResponse> => {
  const response = await axios.get<FetchResponse>(BASE_URL, {
    params: { query, page, per_page: perPage },
    headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
  });

  return response.data;
};
