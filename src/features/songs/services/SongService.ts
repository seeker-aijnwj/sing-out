import songs from "../data/songs.json";
import type { Song } from "../models/Song";

export class SongService {

    static getAll(): Song[] {

        return songs as Song[];

    }

}