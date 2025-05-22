import { Component, inject } from '@angular/core';
import { MediaInstanceService } from '../mediaInstance/media-instance.service';

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

}
