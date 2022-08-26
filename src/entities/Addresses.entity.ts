import { PrimaryGeneratedColumn, Column, Entity} from "typeorm"

@Entity()
export class Addresses {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column()
    district: string

    @Column()
    zipCode: string

    @Column({nullable: true})
    number: string

    @Column()
    city: string

    @Column()
    state: string
}