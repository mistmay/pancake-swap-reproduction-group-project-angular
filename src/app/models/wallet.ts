export interface Ticket {
    forId: number;
    numbers: number[];
}

export interface Wallet {
    id: string;
    password: string;
    name: string;
    surname: string;
    balance: number;
    tickets: Ticket[];
}

export interface LogFormInput {
    wallet: string;
    password: string;
}