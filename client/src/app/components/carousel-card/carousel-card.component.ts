import { Component, OnInit, Input } from '@angular/core';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css']
})
export class CarouselCardComponent implements OnInit
{
  url:string;
  imageUrl:string;
  name:string;
  id:string;
  category:string;
  @Input() resource:ResourceData;

  constructor(){}

  ngOnInit()
  {
    this.url = 'http://localhost:4200/'+ this.resource.category + '/' + this.resource.id
    this.name = this.resource.name;
    this.imageUrl = this.resource.imageURL;
    this.category = this.resource.category;
    this.id = this.resource.id;
  }

}
