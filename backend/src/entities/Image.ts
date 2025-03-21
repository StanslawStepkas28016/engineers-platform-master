import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Advert } from "./Advert";

@Index("Image_pk", ["idImage"], { unique: true })
@Entity("Image", { schema: "dbo" })
export class Image {
  constructor(idImage: number, imageLink: string, idAdvert: Advert) {
    this.idImage = idImage;
    this.imageLink = imageLink;
    this.idAdvert = idAdvert;
  }

  @PrimaryGeneratedColumn({ type: "int", name: "IdImage" })
  idImage: number;

  @Column("varchar", { name: "ImageLink", length: 500 })
  imageLink: string;

  @ManyToOne(() => Advert, (advert) => advert.images)
  @JoinColumn([{ name: "IdAdvert", referencedColumnName: "idAdvert" }])
  idAdvert: Advert;
}
