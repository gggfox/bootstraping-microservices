import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Video {

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    path: string

}
