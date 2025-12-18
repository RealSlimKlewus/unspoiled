import { Component, inject } from '@angular/core';
import { MediaInstanceService } from '../mediaInstance/media-instance.service';
import { MediaInstanceSelectorComponent } from "../mediaInstance/media-instance-selector/media-instance-selector.component";

@Component({
  selector: 'unspoiled-header',
  imports: [],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private mediaInstanceService = inject(MediaInstanceService)
  currentMediaInstance = this.mediaInstanceService.currentMediaInstance

  toggleShowSelector() {
    this.mediaInstanceService.toggleShowMediaInstanceSelector()
  }

}
