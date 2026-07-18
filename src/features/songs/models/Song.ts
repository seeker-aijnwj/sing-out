import type { SongSection } from "./SongSection";

export interface Song {

  id: string;

  number: number;

  title: string;

  category: string;

  author?: string;

  language: string;

  key?: string;

  tempo?: number;

  sections: SongSection[];

}