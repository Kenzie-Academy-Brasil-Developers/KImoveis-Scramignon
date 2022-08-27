import { MigrationInterface, QueryRunner } from "typeorm";

export class addingPropertiesManyToOneCategories1661536310808 implements MigrationInterface {
    name = 'addingPropertiesManyToOneCategories1661536310808'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" ADD "categorieId" uuid`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_e231e0251284e117e3d7aebf20e" FOREIGN KEY ("categorieId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_e231e0251284e117e3d7aebf20e"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "categorieId"`);
    }

}
