import { Entity, Column } from 'typeorm';
import { BaseTrackingEntity } from './BaseTrackingEntity.entity';

@Entity()
export class ResourceType extends BaseTrackingEntity {
    @Column({ type: 'varchar', length: 100, nullable: false })
    title: string;

    @Column( {type: 'varchar', length: 100, nullable: false} )
    abbrevation: string;

    @Column( {type: 'varchar', length: 100, nullable: false} )
    description: string;
}