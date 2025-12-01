import { Component, inject } from '@angular/core';
import { MediaInstanceSelectorComponent } from '../mediaInstance/media-instance-selector/media-instance-selector.component';
import { MediaInstanceService } from '../mediaInstance/media-instance.service';

@Component({
  selector: 'app-sidebar',
  imports: [MediaInstanceSelectorComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {


  private mediaInstanceService = inject(MediaInstanceService)
  currentMediaInstance = this.mediaInstanceService.currentMediaInstance

}
