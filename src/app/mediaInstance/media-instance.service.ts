import { Injectable, signal } from '@angular/core';
import { MediaInstance } from '../models/media/media.model';

@Injectable({
  providedIn: 'root'
})
export class MediaInstanceService {
  currentMediaInstance = signal<MediaInstance>(
  {
    mediumType: 'series',
    segment: {
      book: 1,
      chapter: 1

    }
  })

  constructor() { }



  getMediaInstance() {
    return this.currentMediaInstance
  }

  setMediaInstance(mediaInstance: MediaInstance) {
    this.currentMediaInstance.set(mediaInstance)
  }

  checkIfIsSpoiler(mediaInstances: MediaInstance[]) {
    const selectedInstance = mediaInstances.find((instance) => instance.mediumType === this.currentMediaInstance().mediumType)

    if(!selectedInstance || selectedInstance.segment.book > this.currentMediaInstance().segment.book ) return true


    if(selectedInstance.segment.book == this.currentMediaInstance().segment.book && selectedInstance.segment.chapter > this.currentMediaInstance().segment.chapter ) return true


    return false
  }
}
