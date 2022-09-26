import { Member } from '../entity/member.entity';

export interface IMemberRepository {
  save(member: Member): Promise<Member>;
}

export const IMemberRepository = Symbol('IMemberRepository');
