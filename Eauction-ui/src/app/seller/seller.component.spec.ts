import { SellerService } from '../services/seller.api.service';
import { SellerComponent } from './seller.component';

describe('SellerComponent', () => {
  let component: SellerComponent;
  let sellerService: SellerService;

  beforeEach(async () => {
    sellerService = jasmine.createSpyObj(SellerService.name, ["getProducts", "getProduct"]);
    component = new SellerComponent(sellerService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
