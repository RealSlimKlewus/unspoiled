import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { MediaInstance } from '../models/media/media.model';
import { MediaInstanceService } from '../mediaInstance/media-instance.service';

@Directive({
  selector: '[unspoiledSpoiler]',
  standalone: true,
})
export class SpoilerDirective {
  mediaInstance = input.required<MediaInstance[]>({alias: 'unspoiledSpoiler'})

  private mediaInstanceService = inject(MediaInstanceService)

  private templateRef = inject(TemplateRef)
  private viewContainerRef = inject(ViewContainerRef)
  

  constructor() {
    effect(()=>{
      if (!this.mediaInstanceService.checkIfIsSpoiler(this.mediaInstance())){
        this.viewContainerRef.createEmbeddedView(this.templateRef)
      } else {
        this.viewContainerRef.clear()
      }
    })
   }

}
