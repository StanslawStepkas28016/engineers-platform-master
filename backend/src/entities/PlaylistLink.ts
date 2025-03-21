import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Advert } from "./Advert";
import { PlaylistTypeDict } from "./PlaylistTypeDict";

@Index("PlaylistLink_pk", ["idPlaylistLink"], { unique: true })
@Entity("PlaylistLink", { schema: "dbo" })
export class PlaylistLink {
  constructor(idPlaylistLink: number, link: string, idAdvert: Advert, idPlaylistType: PlaylistTypeDict) {
    this.idPlaylistLink = idPlaylistLink;
    this.link = link;
    this.idAdvert = idAdvert;
    this.idPlaylistType = idPlaylistType;
  }

  @PrimaryGeneratedColumn({ type: "int", name: "IdPlaylistLink" })
  idPlaylistLink: number;

  @Column("varchar", { name: "Link", length: 250 })
  link: string;

  @ManyToOne(() => Advert, (advert) => advert.playlistLinks)
  @JoinColumn([{ name: "IdAdvert", referencedColumnName: "idAdvert" }])
  idAdvert: Advert;

  @ManyToOne(
    () => PlaylistTypeDict,
    (playlistTypeDict) => playlistTypeDict.playlistLinks
  )
  @JoinColumn([
    { name: "IdPlaylistType", referencedColumnName: "idPlaylistTypeDict" },
  ])
  idPlaylistType: PlaylistTypeDict;
}
