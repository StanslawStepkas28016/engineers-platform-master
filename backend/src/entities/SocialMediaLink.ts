import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { SocialMediaTypeDict } from "./SocialMediaTypeDict";

@Index("SocialMediaLink_pk", ["idSocialMediaLink"], { unique: true })
@Entity("SocialMediaLink", { schema: "dbo" })
export class SocialMediaLink {
  constructor(idSocialMediaLink: number, socialMediaLink: string, idUser: User, idSocialMediaTypeDict: SocialMediaTypeDict) {
    this.idSocialMediaLink = idSocialMediaLink;
    this.socialMediaLink = socialMediaLink;
    this.idUser = idUser;
    this.idSocialMediaTypeDict = idSocialMediaTypeDict;
  }

  @PrimaryGeneratedColumn({ type: "int", name: "IdSocialMediaLink" })
  idSocialMediaLink: number;

  @Column("varchar", { name: "SocialMediaLink", length: 250 })
  socialMediaLink: string;

  @ManyToOne(() => User, (user) => user.socialMediaLinks)
  @JoinColumn([{ name: "IdUser", referencedColumnName: "idUser" }])
  idUser: User;

  @ManyToOne(
    () => SocialMediaTypeDict,
    (socialMediaTypeDict) => socialMediaTypeDict.socialMediaLinks
  )
  @JoinColumn([
    {
      name: "IdSocialMediaTypeDict",
      referencedColumnName: "idSocialMediaType",
    },
  ])
  idSocialMediaTypeDict: SocialMediaTypeDict;
}
