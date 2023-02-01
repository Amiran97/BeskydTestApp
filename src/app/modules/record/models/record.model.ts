import { Role } from "./role.enum";
import { Status } from "./status.enum";

export interface Record {
    id: number,
    name: string,
    address: string,
    amount: number,
    status: Status,
    role: Role
}