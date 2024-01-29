import User from '../../models/user/user.model';

class UserService {
    static async createUser(email: string, name: string, password: string): Promise<User> {
        try {
            const newUser = await User.create({ email, name, password });
            return newUser;
        } catch (error) {
            throw new Error(`Failed to create user: ${error.message}`);
        }
    }

    static async getAllUsers(): Promise<User[]> {
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            throw new Error(`Failed to retrieve users: ${error.message}`);
        }
    }

    static async getUserByEmail(email: string): Promise<User | null> {
        try {
            const user = await User.findByPk(email);
            return user;
        } catch (error) {
            throw new Error(`Failed to retrieve user: ${error.message}`);
        }
    }

    static async updateUserByEmail(email: string, newData: { name?: string; password?: string }): Promise<[number, User[]]> {
        try {
            const [rowsUpdated, updatedUsers] = await User.update(newData, {
                where: { email },
                returning: true,
            });
            return [rowsUpdated, updatedUsers];
        } catch (error) {
            throw new Error(`Failed to update user: ${error.message}`);
        }
    }

    static async deleteUserByEmail(email: string): Promise<number> {
        try {
            const rowsDeleted = await User.destroy({ where: { email } });
            return rowsDeleted;
        } catch (error) {
            throw new Error(`Failed to delete user: ${error.message}`);
        }
    }
}

export default UserService;
