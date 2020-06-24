import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './create-post.dto';
import { User } from 'src/users/user.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,

    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.postRepository.find();
  }

  async create(input: CreatePostDto, userId: string) {
    const post = new Post();
    post.content = input.content;
    if (userId) {
      const user = await this.userRepository.findOne(userId);
      // TODO: fix
      delete user.password;
      post.user = user;
    }
    this.postRepository.save(post);
    return post;
  }
}
