import { NumberSymbol } from "@angular/common";

export interface StoryEvent {
  id: string,
  description: string;
  mediaInstances: MediaInstance[];
  
  consideredSpoiler: boolean,
  createdBy: string,
}

export interface MediaInstance {
  mediumType: MediumType;
  segment: ContentSegment;
}

export type MediumType = 'series' | 'book';
export interface ContentSegment {
  book: number;
  chapter: number;
}


