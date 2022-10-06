import { PrimaryGeneratedColumn, Column } from 'typeorm';

export class Video {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    path: string
}