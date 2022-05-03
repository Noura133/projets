import { Role } from './role.model';
export class User {
    id!: number;
    firstName!: string;
    lastName!: string;
    telephone!: number;
    email!: string;
    password!: string;
    roles!: Role[];
    
}
