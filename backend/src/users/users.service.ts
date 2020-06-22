import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ name: username });
  }

  async create(input: CreateUserDto) {
    const user = new User();
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(input.password, saltRounds);
    user.name = input.username;
    user.password = hashedPassword;
    return this.userRepository.save(user);
  }
}
