import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

  @Input()
  dataTime: number

  public hour: number;

  constructor() {
  }

  ngOnInit(): void {
    const date = new Date(this.dataTime * 1000);
    this.hour = date.getHours();
  }

}
