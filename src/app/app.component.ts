import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MediaInstance, StoryEvent } from './models/media/media.model';
import { MediaInstanceService } from './mediaInstance/media-instance.service';
import { SpoilerDirective } from './directives/spoiler.directive';
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SpoilerDirective, SidebarComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'unspoiled';

  private mediaInstanceService = inject(MediaInstanceService)
  currentMediaInstance = this.mediaInstanceService.currentMediaInstance

  showSelector = computed(()=>this.mediaInstanceService.showMediaInstanceSelector())


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

  filteredData = computed(() => this.data.filter(storyEvent=> !this.mediaInstanceService.checkIfIsSpoiler(storyEvent.mediaInstances)))

  constructor() {}

  ngOnInit() {
    console.log(this.filteredData())
  }
}
