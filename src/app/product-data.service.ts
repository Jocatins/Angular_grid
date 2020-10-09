import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProductModel } from './product-model';

@Injectable({
  providedIn: 'root',
})
export class ProductDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const products: ProductModel[] = [
      {
        id: 1,
        name: 'Joca',
        location: 'Island',
        contact: 'Panorama',
      },
      {
        id: 2,
        name: 'Jenny',
        location: 'Island',
        contact: 'Panorama',
      },
      {
        id: 3,
        name: 'Khamen',
        location: 'Island',
        contact: 'Panorama',
      },
      {
        id: 4,
        name: 'Candace',
        location: 'Island',
        contact: 'Panorama',
      },
    ];
    return { products };
  }
}
