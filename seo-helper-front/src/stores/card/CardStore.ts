import { action, observable } from 'mobx';
import { CardDto, CardString } from '../../services/CardService';
//import autobind from 'autobind-decorator';


class CardStore {

  @observable str = ""
  @observable cardStr : CardString = {} as CardString
//   @observable products: ProductDto[] = [];
//   @observable detailProduct: ProductDto = {} as ProductDto;

//   constructor(private productService: ProductService) {
//   }

 @action
  getConfig = (str : string) => {
    this.str = str
  }


 // @action
//   async getAllProducts() {
//     const response = await this.productService.getAll();
//     console.log(response.data.data);
//     //this.setProducts(response.data.data);
//   }
}

export default CardStore;
