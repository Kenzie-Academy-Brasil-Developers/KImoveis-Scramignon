import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Users {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column({length: 128})
    name: string

    @Column({length: 128, unique: true})
    email: string

    @Column()
    isAdm: boolean

    @Column()
    isActive: boolean

    @Column({length: 128})
    password: string

    @CreateDateColumn({name: "createdAt"})
    createdAt: Date

    @UpdateDateColumn({name: "updatedAt"})
    updatedAt: Date
}