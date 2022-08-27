import { MigrationInterface, QueryRunner } from "typeorm";

export class changesSchedulesDateToString1661544441079 implements MigrationInterface {
    name = 'changesSchedulesDateToString1661544441079'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "date" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "date" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
