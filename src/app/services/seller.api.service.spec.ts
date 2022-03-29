import {
    HttpClientTestingModule,
    HttpTestingController,
  } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Product } from '../models/product';
import { SellerService } from './seller.api.service';
  
  describe('SellerService', () => {
    let service: SellerService;
    let httpMock: HttpTestingController;
    let url = 'https://sellerapi.azurewebsites.net/api/v1/seller';
      
    beforeEach(() => {
        TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [SellerService]
        });
        service = TestBed.inject(SellerService);
        httpMock = TestBed.inject(HttpTestingController);
    });
  
    it('service should be created', () => {
        expect(service).toBeTruthy();
        });

    it('should call getProducts and return an array of Products', () => {
        const dummyProducts: Product[] = [{
            id: "product1",
            productName: "product1"
        },
        {
            id: "product2",
            productName: "product2"
        }];      
        
        service.getProducts().subscribe((res) => {
            expect(res).toEqual(dummyProducts);
        });
        const req = httpMock.expectOne({
            method: 'GET',
            url: `${url}`,
          });
  
          req.flush(dummyProducts);
        });
  });