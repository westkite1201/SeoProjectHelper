import { action, observable } from 'mobx';
import CardService,{ CardDto, CardString, CommentDto } from '../../services/CardService';
import ProductService, { ProductDto, ProductRegistrationDto } from '../../services/ProductService';
//import autobind from 'autobind-decorator';


class CardStore {

  @observable str = ""
  @observable cardStr : CardString = {} as CardString
  @observable comments: CommentDto[] = [];
//   @observable products: ProductDto[] = [];
//   @observable detailProduct: ProductDto = {} as ProductDto;

//   constructor(private productService: ProductService) {
//   }
  constructor(private cardService: CardService) {

  }

 @action
  getConfig = (str : string) => {
    this.str = str
  }


  
  @action
  getBookmarkComments =async()=> {
    //console.log(this.cardService)
    const response = await this.cardService.getBookmarkComments();
    console.log("Seo response ", response.data.data)
    this.comments = response.data.data;
  }



 // @action
//   async getAllProducts() {
//     const response = await this.productService.getAll();
//     console.log(response.data.data);
//     //this.setProducts(response.data.data);
//   }
}

export default CardStore;
