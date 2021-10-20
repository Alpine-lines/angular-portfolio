import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { multi, programmingLanguages, frontendSkills, backendSkills, marketingSkills } from '../../../../assets/portfolio/data';
import { BreakpointObserver, Breakpoints, BreakpointState, LayoutModule } from '@angular/cdk/layout';
import { NGXLogger } from "ngx-logger";

@Component({
  selector: "app-aboutmepage",
  templateUrl: "aboutmepage.component.html",
  styleUrls: ['aboutmepage.component.scss']
})
export class AboutMepageComponent implements OnInit, OnDestroy {

  isCollapsed: boolean = true;

  // guage chart options
  singleGuage: any[] = programmingLanguages;
  viewGuage: [number, number] = [650, 400];
  showAxis: boolean = true;
  showText: boolean = true;
  legendGuage: boolean = true;
  legendPositionGuage: string = 'bottom';
  legendTitleGuage: string = "Skill Level"
  min: number = 0;
  max: number = 5;
  colorSchemeGuage = {
    domain: [
      '#344675',
      '#e14eca',
      '#f4f5f7',
      '#00f2c3',
      '#1d8cf8',
      '#ff8d72',
      '#fd5d93',
      '#222a42',
    ],
  };

  // advanced pie chart options
  singlePie: any[] = frontendSkills;
  viewPie: [number, number] = [650, 400];
  gradientPie: boolean = true;
  showLegendPie: boolean = true;
  showLabelsPie: boolean = true;
  isDoughnutPie: boolean = false;
  animationsPie: boolean = true;
  colorSchemePie = {
    domain: [
      '#344675',
      '#e14eca',
      '#f4f5f7',
      '#00f2c3',
      '#1d8cf8',
      '#ff8d72',
      '#fd5d93',
      '#222a42',
    ]
  };

  showBioAsStacked: boolean = false;

  constructor(
    private logger: NGXLogger,
  ) {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("aboutme-page");

    Object.assign(this, { multi });
    Object.assign(this, { data: this.singleGuage })
    Object.assign(this, { data: this.singlePie });
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("aboutme-page");
  }


  onSelectPie(data: any): void {
    //this.logger.info('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivatePie(data: any): void {
    //this.logger.info('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivatePie(data: any): void {
    //this.logger.info('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onSelect(data: any): void {
    //this.logger.info('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    //this.logger.info('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    //this.logger.info('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  skillsAccumulator(data: any[]) {
    const totalSkills = data.reduce((accumulator, currentValue) => { accumulator + currentValue.x }, 0);
    return totalSkills;
  }
}
