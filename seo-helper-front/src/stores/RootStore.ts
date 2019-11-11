import AuthStore from './auth/AuthStore';
import CardStore from './card/CardStore';
import ProductsStore from '../stores/product/ProductStore';
import ProductService from '../services/ProductService';

export default class RootStore {
  static instance: RootStore;

  authStore = new AuthStore();
  cardStore = new CardStore();
  productsStore = new ProductsStore(new ProductService(this.authStore));
}