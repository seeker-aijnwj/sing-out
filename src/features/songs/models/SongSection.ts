export interface SongSection {
  id: string;
  type: "verse" | "chorus" | "bridge" | "intro" | "outro";
  title: string;
  lines: string[];
}