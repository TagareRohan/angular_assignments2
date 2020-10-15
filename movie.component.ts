import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movieList: Movie[];
  constructor(private service: MovieService) { }

  ngOnInit() {

    this.service.findAll().subscribe( data=>this.movieList=data );
    console.log("done");

  }

}
