import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss']
})
export class BanksComponent implements OnInit {
  banks: any = []
  constructor(private bankService: BankService,
    private router:Router) { }

  ngOnInit(): void {
    this.getBanks();
  }

  getBanks(){
    this.bankService.getBanks().subscribe((response: any) => {
      this.banks = response;
    })
  }

  newBank(){
    this.router.navigate(['banks/new-bank'])
  }

}
