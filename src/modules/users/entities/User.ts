/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Users')
class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int' })
  UserId: number;

  @Column({type: 'varchar'})
  Email: string;

  @Column({type: 'varchar'})
  PasswordSalt: string;

  @Column({type: 'varchar'})
  PasswordHash: string;

  @Column({type: 'int'})
  StatusId: number;

  @Column({type: 'bool'})
  TwoFactorEnable: boolean;

  @Column({ type: 'timestamp', nullable: true })
  FirstAccessAt: Date | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export default User;
