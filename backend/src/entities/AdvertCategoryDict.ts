import {
  Column,
  Entity,
  Index,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Advert } from "./Advert";

@Index("AdvertCategoryDict_pk", ["idAdvertCategoryDict"], { unique: true })
@Entity("AdvertCategoryDict", { schema: "dbo" })
export class AdvertCategoryDict {
  constructor(idAdvertCategoryDict: number, categoryName: string, adverts: Advert[]) {
    this.idAdvertCategoryDict = idAdvertCategoryDict;
    this.categoryName = categoryName;
    this.adverts = adverts;
  }

  @PrimaryGeneratedColumn({ type: "int", name: "IdAdvertCategoryDict" })
  idAdvertCategoryDict: number;

  @Column("varchar", { name: "CategoryName", length: 250 })
  categoryName: string;

  @ManyToMany(() => Advert, (advert) => advert.advertCategoryDicts)
  adverts: Advert[];
}
