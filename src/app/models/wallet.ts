export interface Ticket {
    forId: number;
    numbers: number[];
    isTaken: boolean;
    isWon: boolean;
    winType: 0 | 1 | 2 | 3 | 4 | 5 | 6;
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