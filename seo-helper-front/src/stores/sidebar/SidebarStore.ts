import { action, observable } from 'mobx';
import ProductService, { ProductDto, ProductRegistrationDto } from '../../services/ProductService';
//import autobind from 'autobind-decorator';

//@autobind
class SidebarStore {
  @observable products: ProductDto[] = [];
  @observable detailProduct: ProductDto = {} as ProductDto;

  constructor(private productService: ProductService) {
  }


  @action
  async getAllProducts() {
    const response = await this.productService.getAll();
    console.log(response.data.data);
    //this.setProducts(response.data.data);
  }
}

export default SidebarStore;
