import { Injectable, Output, EventEmitter } from '@angular/core';
import { Wallet, LogFormInput, Ticket } from '../models/wallet';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  @Output() somethingChanged: EventEmitter<void> = new EventEmitter<void>();
  wallets: Wallet[] = [
    { id: 'wallet-1', password: 'password-1', name: 'John', surname: 'Smith', balance: 10, tickets: [] }
  ];

  constructor() { }

  login(credential: LogFormInput): void {
    const walletToFind: Wallet | undefined = this.wallets.find((wallet: Wallet) => wallet.id === credential.wallet && wallet.password === credential.password);
    if (!walletToFind) {
      alert('Error: User not Found! Try again or register');
    } else {
      alert('Login Successfull');
      localStorage.setItem('login-token', walletToFind.id);
      this.emitChanges();
    }
  }

  logout(): void {
    localStorage.removeItem('login-token');
    this.emitChanges();
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('login-token');
  }

  getLoggedUser(): Wallet {
    return this.wallets.find((wallet: Wallet) => wallet.id === localStorage.getItem('login-token'))!;
  }

  buyTicket(ticket: Ticket): void {
    this.wallets = this.wallets.map((wallet: Wallet) => {
      if (wallet.id === localStorage.getItem('login-token')) {
        const ticketArray: Ticket[] = [...wallet.tickets];
        ticketArray.push(ticket);
        return { ...wallet, balance: wallet.balance - 1, tickets: ticketArray };
      } else {
        return wallet;
      }
    });
    this.emitChanges();
    alert('Ticket Purchased Successfully');
  }

  addLiquidity(liquidity: number): void {
    this.wallets = this.wallets.map((wallet: Wallet) => {
      if (wallet.id === localStorage.getItem('login-token')) {
        return { ...wallet, balance: wallet.balance + liquidity };
      } else {
        return wallet;
      }
    });
    this.emitChanges();
    alert(`${liquidity} CAKES added to your Wallet Successfully!`);
  }

  emitChanges(): void {
    this.somethingChanged.emit();
  }

}
