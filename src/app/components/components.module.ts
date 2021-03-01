import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemsSlideComponent } from './items-slide/items-slide.component';
import { CategoryButtonComponent } from './category-button/category-button.component';
import { CommonModule } from '@angular/common';

export const component = [
	ItemsSlideComponent, CategoryButtonComponent
]

@NgModule({
	declarations: component,
	imports: [
		FormsModule,
		ReactiveFormsModule,
		CommonModule,
		IonicModule
	],
	exports: component
})
export class ComponentsModule {}
