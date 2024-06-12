import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  director: string;

  @Column()
  releaseDate: Date;

  @Column({ nullable: true })
  imageUrl: string; // Novo campo para armazenar o URL da imagem
}
