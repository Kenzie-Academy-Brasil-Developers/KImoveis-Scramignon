import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Properties {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column({default: false})
    sold: boolean

    @Column()
    value: number

    @Column({type:"int"})
    size: number

    @CreateDateColumn({name: "createdAt"})
    createdAt: Date

    @UpdateDateColumn({name: "updatedAt"})
    updatedAt: Date
}