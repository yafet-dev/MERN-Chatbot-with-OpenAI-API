import { Test, TestingModule } from '@nestjs/testing';
import { UserResolver } from '../../src/user/user.resolver';
import { UserService } from '../../src/user/user.service';

describe('UserResolver', () => {
  let resolver: UserResolver;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserResolver,
        {
          provide: UserService,
          useValue: {
            findAll: jest.fn().mockReturnValue([
              { id: 1, name: 'John Doe', email: 'john@example.com' },
              { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
            ]),
          },
        },
      ],
    }).compile();

    resolver = module.get<UserResolver>(UserResolver);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should return an array of users', async () => {
    const users = resolver.findAll();
    expect(users).toBeDefined();
    expect(Array.isArray(users)).toBe(true);
    expect(users).toHaveLength(2);
    expect(users[0]).toEqual({
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
    });

    expect(service.findAll).toHaveBeenCalled();
  });
});