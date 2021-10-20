import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { LoggerModule, NGXLogger } from 'ngx-logger';
import { LoggerService } from 'src/app/services/logger/logger-service.service';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.sass'],
})
export class SocialIconsComponent implements OnInit {

  @Input() color?: string = 'info';

  @ViewChild('fb', { static: true }) fb?: ElementRef;
  @ViewChild('github', { static: true }) github?: ElementRef;
  @ViewChild('linkedin', { static: true }) linkedin?: ElementRef;

  constructor(
    private logger: NGXLogger
  ) { }

  ngOnInit() {
    this.fb?.nativeElement.classList.add('btn-light')
    this.linkedin?.nativeElement.classList.add('btn-light')
    this.github?.nativeElement.classList.add('btn-light')
  }

  ngOnChanges(): void {
    this.logger.log({
      color: this.color,
      fb: this.fb,
      github: this.github,
      linkedin: this.linkedin
    })
    switch (this.color) {

      case 'default':
        this.fb?.nativeElement.classList.add('border-default')
        this.linkedin?.nativeElement.classList.add('border-default')
        this.github?.nativeElement.classList.add('border-default')
        break;

      case 'primary':
        this.fb?.nativeElement.classList.add('border-primary')
        this.linkedin?.nativeElement.classList.add('border-primary')
        this.github?.nativeElement.classList.add('border-primary')
        break;

      case 'secondary':
        this.fb?.nativeElement.classList.add('border-secondary')
        this.linkedin?.nativeElement.classList.add('border-secondary')
        this.github?.nativeElement.classList.add('border-secondary')
        break;

      case 'accent':
        this.fb?.nativeElement.classList.add('border-accent')
        this.linkedin?.nativeElement.classList.add('border-accent')
        this.github?.nativeElement.classList.add('border-accent')
        break;

      case 'info':
        this.fb?.nativeElement.classList.add('border-info')
        this.linkedin?.nativeElement.classList.add('border-info')
        this.github?.nativeElement.classList.add('border-info')
        break;

      case 'warning':
        this.fb?.nativeElement.classList.add('border-warning')
        this.linkedin?.nativeElement.classList.add('border-warning')
        this.github?.nativeElement.classList.add('border-warning')
        break;

      case 'danger':
        this.fb?.nativeElement.classList.add('border-danger');
        this.github?.nativeElement.classList.add('border-danger');
        this.linkedin?.nativeElement.classList.add('border-danger');
        break;

      case 'success':
        this.fb?.nativeElement.classList.add('border-success')
        this.linkedin?.nativeElement.classList.add('border-success')
        this.github?.nativeElement.classList.add('border-success')
        break;

      case 'dark':
        this.fb?.nativeElement.classList.add('border-dark')
        this.linkedin?.nativeElement.classList.add('border-dark')
        this.github?.nativeElement.classList.add('border-dark')
        break;

      default:
        break;
    }
  }

}
