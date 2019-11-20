import axios from 'axios';
import { ApiResponse } from '../services/types';
import AuthStore from '../stores/auth/AuthStore';

export type CardRegistrationDto = {
  userId?: string;
  image: File;
  category: number;
  title: string;
  description: string;
  price: number;
}

export type CardString = {
    name: string;
  }

export type CardDto = {
  title: string;
  description: string;
}
export type CommentDto = { 
  MAIN_URL : string,
  CAFE_NAME : string,
  HREF_NUM : string, 
  COMMENT_STR : string,
  COMMENT_DAY : string, 
}

const API_HOST = process.env.API_HOST || 'http://localhost:3031/api';

class CardService {

  constructor(private authStore: AuthStore) {
  }


  // async registration(body: CardRegistrationDto): Promise<ApiResponse<CardDto>> {
  //   if (this.authStore.auth == null) {
  //     throw new Error('need to login!');
  //   }
  //   const formData = new FormData();
  //   formData.append('image', body.image);
  //   formData.append('userId', String(this.authStore.auth.id));
  //   formData.append('category', String(body.category));
  //   formData.append('title', body.title);
  //   formData.append('description', body.description);
  //   formData.append('price', String(body.price));

  //   return axios.post<CardRegistrationDto, ApiResponse<CardDto>>(`${API_HOST}/products`, formData, {
  //     headers: {'Content-Type': 'multipart/form-data' }
  //   });
  // }

  async getAll(): Promise<ApiResponse<CardDto[]>> {
    return axios.get(`${API_HOST}/products`);
  }

  async getById(id: string): Promise<ApiResponse<CardDto>> {
    return axios.get(`${API_HOST}/products/${id}`);
  }

  async getBookmarkComments(): Promise<ApiResponse<CommentDto[]>> {
    return axios.post(`${API_HOST}/cafe/getBookmarkComments`);
  }

}

export default CardService;
