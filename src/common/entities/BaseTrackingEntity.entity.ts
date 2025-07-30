import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from 'typeorm';

export class BaseTrackingEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true })
    createdBy: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
 
    @Column({ nullable: true })
    updatedBy: string;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @Column({ nullable: true })
    deletedBy: string;

    @DeleteDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    deletedAt: Date;

    @Column({ nullable: true })
    enabledBy: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    enabledAt: Date;

    @Column({ nullable: true })
    activatedBy: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: true})
    activatedAt: Date;

    @Column({ default: true })
    isEnabled: boolean;

    @Column({ default: false })
    isDeleted: boolean;

    @Column({ default: true })
    isActive: boolean;
}