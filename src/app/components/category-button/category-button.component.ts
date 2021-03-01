import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'category-button',
  templateUrl: './category-button.component.html',
  styleUrls: ['./category-button.component.scss'],
})
export class CategoryButtonComponent implements OnInit {
  custom = {
    centeredSlides: false,
    slidesPerView: 2.2
  }
  constructor() { }

  ngOnInit() {}

}
