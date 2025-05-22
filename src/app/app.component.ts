import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MediaInstance, StoryEvent } from './models/media/media.model';
import { MediaInstanceService } from './mediaInstance/media-instance.service';
import { SpoilerDirective } from './directives/spoiler.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SpoilerDirective],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'unspoiled';

  private mediaInstanceService = inject(MediaInstanceService)
  currentMediaInstance = this.mediaInstanceService.currentMediaInstance

  filteredData = signal<StoryEvent[]>([])
  
  data: StoryEvent[] = [{
    id: '1',
    description: 'smth happened',
    mediaInstances: [
      {
        mediumType: 'series',
        segment: {
          book: 1,
          chapter: 1

        }
      }, 
      {
        mediumType: 'book',
        segment: {
          book: 1,
          chapter: 1
        }
      }
    ],
    consideredSpoiler: false,
    createdBy: 'me'
  },{
    id: '2',
    description: 'smth more happened',
    mediaInstances: [
      {
        mediumType: 'series',
        segment: {
          book: 1,
          chapter: 2

        }
      }, 
      {
        mediumType: 'book',
        segment: {
          book: 1,
          chapter: 2

        }
      }
    ],
    consideredSpoiler: false,
    createdBy: 'me'
  }]
  

  constructor() {}

  ngOnInit() {
    this.filteredData.set(this.data.filter(storyEvent=> !this.mediaInstanceService.checkIfIsSpoiler(storyEvent.mediaInstances)))
    console.log(this.filteredData())
  }
}
