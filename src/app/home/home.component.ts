import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingComponent } from '../feature/star-rating/star-rating.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, NgFor, NgbRating,NgbModule, StarRatingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  trendingMovies:any;
  theatreMovies:any;
  popularMovies:any;
  constructor(private http:HttpClient, private router:Router){}
  ngOnInit():void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  getTrendingMovies()
  {
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe(movies=>{
      this.trendingMovies = movies;
      console.log(this.trendingMovies);
    })

  }

  getTheatreMovies()
  {
    this.http.get('http://localhost:4200/assets/data/theatre-movies.json').subscribe(movies=>{
      this.theatreMovies = movies;
      console.log(this.theatreMovies);
    })

  }

  getPopularMovies()
  {
    this.http.get('http://localhost:4200/assets/data/popular-movies.json').subscribe(movies=>{
      this.popularMovies = movies;
      console.log(this.popularMovies);
    })

  }

  goToMovie(type:string, id:string)
  {
    this.router.navigate(['movie',type, id]);
  }
}
