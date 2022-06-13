import { Directive, ElementRef, HostListener } from '@angular/core';
import { DataPresenterService } from 'src/app/data/repository/data-presenter.service';
@Directive({
  selector: '[appNotImage]',
})
export class NotImageDirective {
  constructor(
    private imgAll: ElementRef,
    private dataPresenterService: DataPresenterService
  ) {}
  @HostListener('error')
  onError(): void {
    this.imgAll.nativeElement.src = this.dataPresenterService.notImage;
  }
}
