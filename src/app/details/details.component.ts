import { Component, Input, OnInit } from '@angular/core';
import { ToDos } from '../to-dos';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() do: ToDos | undefined;
 
  constructor() { }

  ngOnInit(): void {
  }

}
