import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pockemon} from "../../shared/pockemon.model";

@Component({
  selector: 'app-pockemon-detail',
  templateUrl: './pockemon-detail.component.html',
  styleUrls: ['./pockemon-detail.component.css']
})
export class PockemonDetailComponent implements OnInit {
  @Input()
  public pockemon: Pockemon | undefined;

  constructor() { }

  ngOnInit(): void {

  }

}
