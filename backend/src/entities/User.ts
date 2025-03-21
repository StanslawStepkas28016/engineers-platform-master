import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Advert } from "./Advert";
import { SocialMediaLink } from "./SocialMediaLink";
import { Role } from "./Role";

@Index("User_pk", ["idUser"], { unique: true })
@Entity("User", { schema: "dbo" })
export class User {
  constructor(idUser: number, username: string, email: string, phoneNumber: string, firstName: string, lastName: string, password: string, dateCreated: Date, dateDeleted: Date | null, isDeleted: boolean, adverts: Advert[], socialMediaLinks: SocialMediaLink[], idRole: Role) {
    this.idUser = idUser;
    this.username = username;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.dateCreated = dateCreated;
    this.dateDeleted = dateDeleted;
    this.isDeleted = isDeleted;
    this.adverts = adverts;
    this.socialMediaLinks = socialMediaLinks;
    this.idRole = idRole;
  }

  @PrimaryGeneratedColumn({ type: "int", name: "IdUser" })
  idUser: number;

  @Column("varchar", { name: "Username", length: 50 })
  username: string;

  @Column("varchar", { name: "Email", length: 30 })
  email: string;

  @Column("varchar", { name: "PhoneNumber", length: 16 })
  phoneNumber: string;

  @Column("varchar", { name: "FirstName", length: 50 })
  firstName: string;

  @Column("varchar", { name: "LastName", length: 50 })
  lastName: string;

  @Column("varchar", { name: "Password", length: 50 })
  password: string;

  @Column("datetime", { name: "DateCreated" })
  dateCreated: Date;

  @Column("datetime", { name: "DateDeleted", nullable: true })
  dateDeleted: Date | null;

  @Column("bit", { name: "IsDeleted" })
  isDeleted: boolean;

  @OneToMany(() => Advert, (advert) => advert.idUser)
  adverts: Advert[];

  @OneToMany(() => SocialMediaLink, (socialMediaLink) => socialMediaLink.idUser)
  socialMediaLinks: SocialMediaLink[];

  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn([{ name: "IdRole", referencedColumnName: "idRole" }])
  idRole: Role;
}
