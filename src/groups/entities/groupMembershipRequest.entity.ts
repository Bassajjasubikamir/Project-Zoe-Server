import Contact from "src/crm/entities/contact.entity";
import { PrimaryGeneratedColumn, Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import Group from "./group.entity";

@Entity()
export default class GroupMembershipRequest{
    @PrimaryGeneratedColumn()
    id: number;

    @JoinColumn()
    @ManyToOne(type => Contact, it => it.groupMembershipRequests)
    contact: Contact;

    @Column()
    contactId: number;

    @Column({ nullable: true })
    parentId?: number;

    @JoinColumn()
    @ManyToOne(type => Group, it => it.groupMembershipRequests)
    group: Group;

    @Column()
    groupId: number;
    
    @Column()
    distanceKm?: number | null;

}




