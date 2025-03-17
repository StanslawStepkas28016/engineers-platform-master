import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('User')
export class User {
    @PrimaryGeneratedColumn()
    IdUser!: number;

    @Column()
    FirstName?: string;

    @Column()
    LastName?: string;

    @Column()
    Age?: number;
}
