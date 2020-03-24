import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css']
  })
  
  export class FirstComponent implements OnInit {
    public name: string;
    public description: string;
    public features: string[];
    public price: number;
    public category: Category;
    public isAvailable: boolean

    constructor() { }
  
    ngOnInit() {
        this.name = "Tuna";
        this.category = Category.fish;
        this.description = "Fresh and tasty";
        this.features = ["caught in Norway",
                        "passed the selection",
                        "saved under optimum conditions"];
        this.price = 2.3888;
        this.isAvailable = true;
    }

    onBuy(): void {
      console.log('Good choice!' );
    }
  
  }
  enum Category
  {
      fish = "Fish",
      chips = "Chips",
      fruits = "Fruits",
      vegetables = "Vegetables"      
  }