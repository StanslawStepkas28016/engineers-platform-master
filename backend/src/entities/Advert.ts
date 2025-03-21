import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { AdvertCategoryDict } from "./AdvertCategoryDict";
import { Image } from "./Image";
import { PlaylistLink } from "./PlaylistLink";
import { Review } from "./Review";

@Index("Advert_pk", ["idAdvert"], { unique: true })
@Entity("Advert", { schema: "dbo" })
export class Advert {
  constructor(idAdvert: number, title: string, description: string, price: number, isActive: boolean, dateCreated: Date, dateDeleted: Date | null, isDeleted: boolean, idUser: User, advertCategoryDicts: AdvertCategoryDict[], images: Image[], playlistLinks: PlaylistLink[], reviews: Review[]) {
    this.idAdvert = idAdvert;
    this.title = title;
    this.description = description;
    this.price = price;
    this.isActive = isActive;
    this.dateCreated = dateCreated;
    this.dateDeleted = dateDeleted;
    this.isDeleted = isDeleted;
    this.idUser = idUser;
    this.advertCategoryDicts = advertCategoryDicts;
    this.images = images;
    this.playlistLinks = playlistLinks;
    this.reviews = reviews;
  }

  @PrimaryGeneratedColumn({ type: "int", name: "IdAdvert" })
  idAdvert: number;

  @Column("varchar", { name: "Title", length: 150 })
  title: string;

  @Column("varchar", { name: "Description", length: 500 })
  description: string;

  @Column("money", { name: "Price" })
  price: number;

  @Column("bit", { name: "IsActive" })
  isActive: boolean;

  @Column("datetime", { name: "DateCreated" })
  dateCreated: Date;

  @Column("datetime", { name: "DateDeleted", nullable: true })
  dateDeleted: Date | null;

  @Column("bit", { name: "IsDeleted" })
  isDeleted: boolean;

  @ManyToOne(() => User, (user) => user.adverts)
  @JoinColumn([{ name: "IdUser", referencedColumnName: "idUser" }])
  idUser: User;

  @ManyToMany(
    () => AdvertCategoryDict,
    (advertCategoryDict) => advertCategoryDict.adverts
  )
  @JoinTable({
    name: "AdvertCategories",
    joinColumns: [{ name: "IdAdvert", referencedColumnName: "idAdvert" }],
    inverseJoinColumns: [
      {
        name: "IdAdvertCategoryDict",
        referencedColumnName: "idAdvertCategoryDict",
      },
    ],
    schema: "dbo",
  })
  advertCategoryDicts: AdvertCategoryDict[];

  @OneToMany(() => Image, (image) => image.idAdvert)
  images: Image[];

  @OneToMany(() => PlaylistLink, (playlistLink) => playlistLink.idAdvert)
  playlistLinks: PlaylistLink[];

  @OneToMany(() => Review, (review) => review.idAdvert)
  reviews: Review[];
}
