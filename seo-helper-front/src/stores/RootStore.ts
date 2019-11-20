import AuthStore from './auth/AuthStore';
import CardStore from '../stores/card/CardStore';
import CardService from '../services/CardService';
import ProductsStore from '../stores/product/ProductStore';
import ProductService from '../services/ProductService';

export default class RootStore {
  static instance: RootStore;

  authStore = new AuthStore();
  cardStore = new CardStore(new CardService(this.authStore));
  productsStore = new ProductsStore(new ProductService(this.authStore));
}