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

export type MediumType = 'series' | 'book' | 'anime' | 'manga';
export interface ContentSegment {
  book: number;
  chapter: number;
}

type Story = Series[]

export type Series = {
  medium: MediumType
  seasonsBooks: SeasonBook[]
}


export type SeasonBook = {
  id: string
  number: number
  title: string | undefined
  episodesChapters: EpisodeChapter[]
}

export type EpisodeChapter = {
  id: string
  number: number
  title: string | undefined
}




