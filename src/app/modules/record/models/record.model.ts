import { Role } from "./role.enum";
import { Status } from "./status.enum";

export interface Record {
    id: string,
    name: string,
    address: string,
    amount: number,
    status: Status,
    role: Role
}