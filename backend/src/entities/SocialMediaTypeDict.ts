import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SocialMediaLink } from "./SocialMediaLink";

@Index("SocialMediaTypeDict_pk", ["idSocialMediaType"], { unique: true })
@Entity("SocialMediaTypeDict", { schema: "dbo" })
export class SocialMediaTypeDict {
  constructor(idSocialMediaType: number, socialMediaTypeName: string, socialMediaLinks: SocialMediaLink[]) {
    this.idSocialMediaType = idSocialMediaType;
    this.socialMediaTypeName = socialMediaTypeName;
    this.socialMediaLinks = socialMediaLinks;
  }

  @PrimaryGeneratedColumn({ type: "int", name: "IdSocialMediaType" })
  idSocialMediaType: number;

  @Column("varchar", { name: "SocialMediaTypeName", length: 250 })
  socialMediaTypeName: string;

  @OneToMany(
    () => SocialMediaLink,
    (socialMediaLink) => socialMediaLink.idSocialMediaTypeDict
  )
  socialMediaLinks: SocialMediaLink[];
}
