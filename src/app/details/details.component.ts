import { Component, Input, OnInit , Output, EventEmitter} from '@angular/core';
import { ToDos } from '../to-dos';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() do: ToDos | undefined;
  @Output() isComplete = new EventEmitter<boolean>();

  deleteToDo(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
