import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryColumn({
    name: 'password',
    type: String,
  })
  password?: string;

  @Column({
    name: 'fullName',
    length: 30,
    nullable: true,
    type: String,
  })
  fullName?: string;

  @Column({
    name: 'email',
    length: 20,
    unique: true,
    nullable: true,
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
