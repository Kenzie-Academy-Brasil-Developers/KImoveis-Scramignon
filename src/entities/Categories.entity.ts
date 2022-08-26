import { PrimaryGeneratedColumn, Column, Entity } from "typeorm"

@Entity()
export class Categories {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column({unique: true, length: 128})
    name: string
}