import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Provider } from 'src/app/entities/Provider';
import { ProviderService } from 'src/app/services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {

  provider: Provider = new Provider();
  submitted = false;

  constructor(private providerService: ProviderService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmitProviderForm(addProviderForm: NgForm) {
    console.log('Your form data : ' + addProviderForm.value);
    this.submitted = true;
    this.saveProvider();
  }

  newProvider(): void {
    this.submitted = false;
    this.provider = new Provider();
  }

  saveProvider() {
    this.providerService.createProvider(this.provider)
    .subscribe( data => {
      console.log('Provider is submitting');
      this.goToList();
    },
    error => console.log('Error' + error));
    this.provider = new Provider();
  }

  goToList() {
    this.router.navigate(['/providers']);
  }

}
