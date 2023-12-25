import { Entity, Column, PrimaryColumn, OneToMany} from 'typeorm';
import { Land } from './land.entity';
import { Bill } from './bill.entity';

@Entity()
export class User {
  @PrimaryColumn()
  user_id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  phone_no: number;

  @Column()
  role: string;

  @OneToMany(() => Land, (land) => land.user_id)
  land: Land[]

}

@Entity()
export class collector extends User {

  @OneToMany(() => Bill, (bill) => bill.collector_id)
  bill: Bill[]

}

@Entity()
export class Admin extends User {
  
  @OneToMany(() => Bill, (bill) => bill.admin_id)
  bill: Bill[]

}