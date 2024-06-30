import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    NgbRating
  ]
})
export class FeatureModule { }
