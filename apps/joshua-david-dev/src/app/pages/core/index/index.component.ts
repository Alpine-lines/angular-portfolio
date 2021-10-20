import { Component, OnInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "index.component.html",
  styleUrls: ["index.component.scss"]
})
export class IndexComponent implements OnInit, OnDestroy {

  isCollapsed = true;
  focus: boolean = false;
  focus1: boolean = false;
  focus2: boolean = false;
  date = new Date();

  constructor() {  }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }

  download($event: any) {

  }
}
