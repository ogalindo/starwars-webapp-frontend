import { Component } from '@angular/core';
import { StarWarsService } from '../../core/services/star-wars.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  constructor(private starwarsService: StarWarsService) {
    
    }

   ngOnInit() {
    }
}
