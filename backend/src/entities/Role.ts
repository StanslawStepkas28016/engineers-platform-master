import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Index("Role_pk", ["idRole"], { unique: true })
@Entity("Role", { schema: "dbo" })
export class Role {
  constructor(idRole: number, roleName: string, users: User[]) {
    this.idRole = idRole;
    this.roleName = roleName;
    this.users = users;
  }

  @PrimaryGeneratedColumn({ type: "int", name: "IdRole" })
  idRole: number;

  @Column("varchar", { name: "RoleName", length: 20 })
  roleName: string;

  @OneToMany(() => User, (user) => user.idRole)
  users: User[];
}
