import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Land } from './land.entity';
import { collector } from './user.entity';
import { Admin } from './user.entity';

@Entity()
export class Bill {
  @PrimaryGeneratedColumn()
  bill_id: number;

  @Column()
  month: string;

  @Column()
  unit_value: number;

  @Column()
  cost_value: number;

  @Column()
  datetime: Date;

  @ManyToOne(() => Land)
  regis_no: Land

  @ManyToOne(() => collector)
  collector_id: collector

  @ManyToOne(() => Admin)
  admin_id: Admin

}