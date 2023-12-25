import { Entity, Column, PrimaryColumn, ManyToOne, OneToMany} from 'typeorm';
import { User } from './user.entity';
import { Bill } from './bill.entity';

@Entity()
export class Land {
  @PrimaryColumn()
  regis_no: string;

  @Column()
  meter_no: string;

  @ManyToOne(() => User)
  user_id: User

  @OneToMany(() => Bill, (bill) => bill.regis_no)
  bill: Bill[]

}