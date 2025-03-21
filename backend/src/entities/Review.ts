import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Advert } from "./Advert";

@Index("Review_pk", ["idReview"], { unique: true })
@Entity("Review", { schema: "dbo" })
export class Review {
  constructor(idReview: number, content: string, satisfactionLevel: string, dateCreated: Date, dateDeleted: Date | null, isDeleted: boolean, idAdvert: Advert) {
    this.idReview = idReview;
    this.content = content;
    this.satisfactionLevel = satisfactionLevel;
    this.dateCreated = dateCreated;
    this.dateDeleted = dateDeleted;
    this.isDeleted = isDeleted;
    this.idAdvert = idAdvert;
  }

  @PrimaryGeneratedColumn({ type: "int", name: "IdReview" })
  idReview: number;

  @Column("varchar", { name: "Content", length: 500 })
  content: string;

  @Column("varchar", { name: "SatisfactionLevel", length: 5 })
  satisfactionLevel: string;

  @Column("datetime", { name: "DateCreated" })
  dateCreated: Date;

  @Column("datetime", { name: "DateDeleted", nullable: true })
  dateDeleted: Date | null;

  @Column("bit", { name: "isDeleted" })
  isDeleted: boolean;

  @ManyToOne(() => Advert, (advert) => advert.reviews)
  @JoinColumn([{ name: "IdAdvert", referencedColumnName: "idAdvert" }])
  idAdvert: Advert;
}
