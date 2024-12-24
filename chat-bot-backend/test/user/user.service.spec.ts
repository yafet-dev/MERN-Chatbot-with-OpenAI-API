import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../../src/user/user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of users', () => {
    const users = service.findAll();
    expect(users).toBeDefined();
    expect(Array.isArray(users)).toBe(true);
    expect(users).toHaveLength(2);
    expect(users[0]).toEqual({
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
    });
  });
});