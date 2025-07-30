import { Entity, Column } from 'typeorm';
import { BaseTrackingEntity } from './BaseTrackingEntity.entity';

@Entity()
export class Address extends BaseTrackingEntity {

    @Column({ type: 'varchar', length: 100, nullable: true })
    kebele: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    woreda: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    subCity: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    city: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    zone: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    region: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    country: string;

}