import { Component, computed, inject } from '@angular/core';
import { KeyValuePairSection } from '../../models/media/media.model';
import { MediaInstanceService } from '../../mediaInstance/media-instance.service';

@Component({
  selector: 'app-info-box',
  imports: [],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.css'
})
export class InfoBoxComponent {

  private mediaInstanceService = inject(MediaInstanceService)

  title = 'character name'
  keyValuePairSections: KeyValuePairSection[] = [
    {
      id: 'placeholder',
      title: 'Allgemein',
      keyValuePairs: [
        {
          id: 'alias',
          key: 'Alter Ego',
          value: [
            {
              id: 'alias-1',
              description: 'Edward Nigma',
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
            },
            {
              id: 'alias-2',
              description: 'Riddler',
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
            }
          ]
        },
        {
          id: 'status',
          key: 'Status',
          value: [
            {
              id: 'status-1',
              description: 'Alive',
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
            },
            {
              id: 'status-2',
              description: 'Dead',
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
            }
          ]
        }
      ]
    },
    {
      id: 'job',
      title: 'Job',
      keyValuePairs: [
        {
          id: 'alias',
          key: 'Zugehörigkeit',
          value: [
            {
              id: 'alias-1',
              description: 'Polizei',
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
            },
            {
              id: 'alias-2',
              description: 'Riddler Verbrecherbande',
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
            }
          ]
        },
        {
          id: 'status',
          key: 'Beruf',
          value: [
            {
              id: 'status-1',
              description: 'Forensiker',
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
            },
            {
              id: 'status-2',
              description: 'Bandenboss',
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
            }
          ]
        }
      ]
    }
  ]

// Not sure if it is the way to go or dirty
  filteredData = computed(() => this.keyValuePairSections.map(
    kvps=> ({...kvps, keyValuePairs: kvps.keyValuePairs.map(
      kvp=> ({...kvp, value: kvp.value.filter(
        storyEvent=> !this.mediaInstanceService.checkIfIsSpoiler(storyEvent.mediaInstances))}
      ))}
    )))
}
