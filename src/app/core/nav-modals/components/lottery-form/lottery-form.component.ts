import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { SettingScreenLauncherService } from 'src/app/services/setting-screen-launcher.service';
import { Wallet } from 'src/app/models/wallet';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LotteryService } from 'src/app/services/lottery.service';

@Component({
  selector: 'app-lottery-form',
  templateUrl: './lottery-form.component.html',
  styleUrls: ['./lottery-form.component.scss']
})
export class LotteryFormComponent implements OnInit, OnDestroy {
  currentUser!: Wallet;
  form!: FormGroup;

  constructor(private loginService: LoginService, private modalService: SettingScreenLauncherService, private fb: FormBuilder, private lottery: LotteryService) { }

  ngOnInit(): void {
    if (this.isLoggedIn()) {
      this.currentUser = this.loginService.getLoggedUser();
    }
    this.form = this.fb.group({
      ticket: ['', Validators.compose([Validators.required, Validators.pattern('\\d{1}-\\d{1}-\\d{1}-\\d{1}-\\d{1}-\\d{1}')])]
    });
  }

  ngOnDestroy(): void {
    this.form.reset();
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  closeWindow(): void {
    this.modalService.closeModal();
  }

  buyTicket(): void {
    this.lottery.buyTicket(this.form.value.ticket);
    this.form.reset();
    this.modalService.closeModal();
  }

}
