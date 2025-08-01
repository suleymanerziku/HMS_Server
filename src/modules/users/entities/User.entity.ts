import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseTrackingEntity } from 'src/common/entities/BaseTrackingEntity.entity';
import { Gender } from 'src/common/entities/Gender.entity';
import { Address } from 'src/common/entities/Address.entity';

@Entity()
export class User extends BaseTrackingEntity {
   @Column({ type: 'varchar', length: 100, nullable: false })
   title: string;

   @Column({ type: 'varchar', length: 100, nullable: false })
   firstName: string;

   @Column({ type: 'varchar', length: 100, nullable: false })
   middleName: string;

   @Column({ type: 'varchar', length: 100, nullable: false })
   lastName: string;

   @Column({ type: 'varchar', length: 200, unique: true, nullable: false })
   username: string;

   @Column({ type: 'varchar', length: 255,unique: true, nullable: false })
   email: string;

   @Column({ type: 'varchar', length: 255, nullable: false })
   password: string; // Hashed

   @Column({ type: 'varchar', length: 15, nullable: true })
   phoneNumber: string;

   @Column({ type: 'date', nullable: false })
   dateOfBirth: Date;

   @ManyToOne(() => Gender)
   @JoinColumn({ name: 'id' })
   gender: Gender;

   @ManyToOne(() => Address)
   @JoinColumn({ name: 'id' })
   address: Address;

}