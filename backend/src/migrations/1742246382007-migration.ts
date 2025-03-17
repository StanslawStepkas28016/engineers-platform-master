import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1742246382007 implements MigrationInterface {
    name = 'Migration1742246382007'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "User" (
                "IdUser" int NOT NULL IDENTITY(1, 1),
                "FirstName" nvarchar(255) NOT NULL,
                "LastName" nvarchar(255) NOT NULL,
                "Age" int NOT NULL,
                CONSTRAINT "PK_73edf55ed0f3f066c3c30571306" PRIMARY KEY ("IdUser")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "User"
        `);
    }

}
