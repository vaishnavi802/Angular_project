import { Component, Input } from '@angular/core';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [NgbRating],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {

    @Input() rating:any;
    @Input() readonly:boolean = false;
    
}
