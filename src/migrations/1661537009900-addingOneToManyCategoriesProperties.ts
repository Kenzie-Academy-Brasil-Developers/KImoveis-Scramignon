import { MigrationInterface, QueryRunner } from "typeorm";

export class addingOneToManyCategoriesProperties1661537009900 implements MigrationInterface {
    name = 'addingOneToManyCategoriesProperties1661537009900'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_e231e0251284e117e3d7aebf20e"`);
        await queryRunner.query(`ALTER TABLE "properties" RENAME COLUMN "categorieId" TO "categoryId"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_a82b56d3d456c30b8c630cba0c6" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_a82b56d3d456c30b8c630cba0c6"`);
        await queryRunner.query(`ALTER TABLE "properties" RENAME COLUMN "categoryId" TO "categorieId"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_e231e0251284e117e3d7aebf20e" FOREIGN KEY ("categorieId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

}
