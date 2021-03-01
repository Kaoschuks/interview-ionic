import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'items-slide',
  templateUrl: './items-slide.component.html',
  styleUrls: ['./items-slide.component.scss'],
})
export class ItemsSlideComponent implements OnInit {

  custom = {
    centeredSlides: false,
    slidesPerView: 2.1
  }
  constructor() { }

  ngOnInit() {}

}
