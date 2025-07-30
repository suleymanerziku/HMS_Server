import { Entity, Column } from 'typeorm';
import { BaseTrackingEntity } from './BaseTrackingEntity.entity';

@Entity()
export class Priority extends BaseTrackingEntity {
    @Column({ type: 'varchar', length: 100, nullable: false })
    title: string;

    @Column( {type: 'varchar', length: 100, nullable: false} )
    abbrevation: string;

    @Column( {type: 'varchar', length: 100, nullable: false} )
    description: string;

    @Column({ type: 'int', nullable: false })
    level: number; // Represents the priority level, e.g., 1 for high, 2 for medium, 3 for low
}