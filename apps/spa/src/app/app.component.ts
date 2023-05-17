import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'dockerdemo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  pokemon$!: Observable<any>;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.pokemon$ = this.appService.getAllPokemon();
  }
}
