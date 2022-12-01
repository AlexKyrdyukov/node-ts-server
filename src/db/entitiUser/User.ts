import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryColumn()
  password!: number;

  @Column({
    length: 30,
  })
  fullName!: string;

  @Column({
    length: 20,
  })
    email!: string;

  @Column({
    length: 20,
  })
  dob!: string;
}

export default User;
