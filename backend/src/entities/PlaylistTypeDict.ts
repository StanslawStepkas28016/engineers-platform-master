import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PlaylistLink } from "./PlaylistLink";

@Index("PlaylistTypeDict_pk", ["idPlaylistTypeDict"], { unique: true })
@Entity("PlaylistTypeDict", { schema: "dbo" })
export class PlaylistTypeDict {
  constructor(idPlaylistTypeDict: number, playlistTypeName: string, playlistLinks: PlaylistLink[]) {
    this.idPlaylistTypeDict = idPlaylistTypeDict;
    this.playlistTypeName = playlistTypeName;
    this.playlistLinks = playlistLinks;
  }

  @PrimaryGeneratedColumn({ type: "int", name: "IdPlaylistTypeDict" })
  idPlaylistTypeDict: number;

  @Column("varchar", { name: "PlaylistTypeName", length: 250 })
  playlistTypeName: string;

  @OneToMany(() => PlaylistLink, (playlistLink) => playlistLink.idPlaylistType)
  playlistLinks: PlaylistLink[];
}
