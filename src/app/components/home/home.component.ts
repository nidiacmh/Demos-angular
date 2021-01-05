import { Component, OnInit, OnChanges,DoCheck,
        AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

    <app-ng-style></app-ng-style>
    <br>

    <app-css></app-css>
    <br>

    <app-clases></app-clases>

    <p [appResaltado] ="'purple'">
      Hola mundo
    </p>

    <app-ng-switch></app-ng-switch>

  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnChanges,DoCheck,
        AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    console.log("OnDestroy");
  }
  ngAfterViewChecked(): void {
    console.log("AfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("AfterViewInit");
  }
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked");
  }
  ngDoCheck(): void {
    console.log("DoCheck");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges");
  }
  ngOnInit(): void {
    console.log("OnInit");
  }


}
