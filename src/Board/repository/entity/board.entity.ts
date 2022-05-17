
import { BaseEntity, Column, Entity, Generated, Index, JoinColumn, JoinTable, Like, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Tag } from './tag.entity';
import { Users } from '../../../users/entity/user.entity';
import { Likes } from './like.entity';


@Entity()
//@Index('id')
export class Board extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number;
    @Column()
    title : string;
    @Column()
    description : string;
    @Column()
    content : string;
    @Column()
    thumbnail : string;
    
    @ManyToOne(type => Users, user => user.boards, {eager : true})
    @JoinColumn([{name : "writer" , referencedColumnName : "id"}])
    //@Column()
    writer : number;
    @Column()
    views : number;
    @Column()
    date : Date;
    @Column()
    board_status : number;
    @Column()
    likes_count : number;

    @OneToMany(type => Tag, tag => tag.board_id)
    tags : Tag[];

    @OneToMany(type => Likes, likes => likes.board_id)
    likes : Likes[];
}


