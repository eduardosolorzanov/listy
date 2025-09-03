import { Component } from '@angular/core';
import { ShoppingFruit } from 'src/app/interfaces/interfaces';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.scss']
})
export class FruitListComponent {
  
  dataSouces!: Array<ShoppingFruit>;
  
  /* –– Constructor
   * –––––––––––––––––––––– */
  
  constructor(private services: ServicesService) { }

  ngOnInit(): void {
    this.getFruits();

  }

  
  async addTestFruit(){
    let newFruit: ShoppingFruit = {fruitId: '1', fruitName: 'pera'};
    await this.services.createNewFruit(newFruit). subscribe((res: any) => {
      console.log('new fruit added')
    });
  }


  //Edit en 25:48
  async editTestFruit(){
    let newEditFruit: ShoppingFruit = {fruitId: '2', fruitName: 'manzana'};
    await this.services.editFruit(newEditFruit). subscribe((res: any) => {
      console.log('new fruit added')
    });
  }
  

  async getFruits(){
    await this.services.getAllFruits().subscribe((res: ShoppingFruit[] | undefined) => {
      this.dataSouces = res ? res : [];
      console.log('fruits:', this.dataSouces);
    })
  }

  
  async deleteFruit(fruit: ShoppingFruit) {
    console.log('fruit to delete');
    await this.services.deleteFruit(fruit).subscribe((res: any) => {
      console.log('fruit was deleted');
    })
  }
  
}
