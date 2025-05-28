import { Component, computed, inject, signal } from '@angular/core';
import { MediumType, Series } from '../../models/media/media.model';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MediaInstanceService } from '../media-instance.service';

@Component({
  selector: 'app-media-instance-selector',
  imports: [MatSliderModule, MatButtonToggleModule],
  templateUrl: './media-instance-selector.component.html',
  styleUrl: './media-instance-selector.component.css'
})
export class MediaInstanceSelectorComponent {

  mediaInstanceService = inject(MediaInstanceService)

  selectedMedium = signal<MediumType | undefined>(undefined)
  selectedSeasonBook = signal<string | undefined>(undefined)
  selectedEpisodeChapter = signal<number>(1)

  data: Series[] = [
    {
      medium: 'book',
      seasonsBooks: [
        {
          id: 'bk-01',
          number: 1,
          title: 'first book',
          episodesChapters: [
            {
              id: 'bk-01-01',
              number: 1,
              title: 'first chapter',
            },
            {
              id: 'bk-01-02',
              number: 2,
              title: 'second chapter',
            },
            {
              id: 'bk-01-03',
              number: 3,
              title: '3rd chapter',
            },
            {
              id: 'bk-01-04',
              number: 4,
              title: '4th chapter',
            },
            {
              id: 'bk-01-05',
              number: 5,
              title: '5th chapter',
            },
            {
              id: 'bk-01-06',
              number: 6,
              title: '6th chapter',
            },
            {
              id: 'bk-01-07',
              number: 7,
              title: '7th chapter',
            },
            {
              id: 'bk-01-08',
              number: 8,
              title: '8th chapter',
            },
          ]
        }
      ]
    },
    {
      medium: 'series',
      seasonsBooks: [
        {
          id: 'ss-01',
          number: 1,
          title: 'first season',
          episodesChapters: [
            {
              id: 'ss-01-01',
              number: 1,
              title: 'first episode',
            },
            {
              id: 'ss-01-02',
              number: 2,
              title: 'second episode',
            }
          ]
        }
      ]
    }
  ]

  seasonBookList = computed(()=> this.data.find((i) => i.medium === this.selectedMedium())?.seasonsBooks)
  episodeChapterList = computed(()=> this.seasonBookList()?.find((i) => i.id === this.selectedSeasonBook())?.episodesChapters)

  selectMedium(medium: MediumType) {
    this.selectedMedium.set(medium)
  }

  selectSeasonBook(seasonBookId: string) {
    this.selectedSeasonBook.set(seasonBookId)
  }

  selectEpisodeChapter() {
    this.mediaInstanceService.setMediaInstance({
      mediumType: this.selectedMedium()!,
      segment: {
        book: this.seasonBookList()!.find((i) => i.id === this.selectedSeasonBook())!.number,
        chapter: this.selectedEpisodeChapter()
      }
    })
  }
}
