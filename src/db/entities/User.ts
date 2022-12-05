import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
    id?: number;

  @Column({
    name: 'password',
    type: String,
  })
  password?: string;

  @Column({
    name: 'fullName',
    length: 30,
    nullable: false,
    type: String,
  })
  fullName?: string;

  @Column({
    name: 'email',
    length: 20,
    unique: true,
    nullable: false,
    type: String,
  })
    email?: string;

  @Column({
    length: 20,
    type: String,
  })
  dob?: string;
}

export default User;
