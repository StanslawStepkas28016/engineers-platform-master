// Repositories
// Encapsulate all database operations using TypeORM’s Repository or DataSource.getRepository().
// If you need custom queries, you can write them here.
// Keep it purely data-access logic: no business rules.
import {User} from "../entities/User";
import {DataSource, Repository} from "typeorm";

export class AuthRepository {
    private readonly userRepository: Repository<User>;

    constructor(dataSource: DataSource) {
        this.userRepository = dataSource.getRepository(User);
    }

    async findUserByUsername(username: string): Promise<User | null> {
        return await this.userRepository.findOne({where: {username}});
    }

    async findPhoneNumber(phoneNumber: string): Promise<string | null> {
        const user = await
            this.userRepository
                .findOne({where: {phoneNumber}});

        const number = user?.phoneNumber;

        return number ?? null;
    }

}