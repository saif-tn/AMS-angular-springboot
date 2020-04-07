import { Component, OnInit } from '@angular/core';
import { Provider } from 'src/app/entities/Provider';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderService } from 'src/app/services/provider.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.component.html',
  styleUrls: ['./update-provider.component.css']
})
export class UpdateProviderComponent implements OnInit {

  id: number;
  provider: Provider;
  updated = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private providerService: ProviderService) { }

  ngOnInit() {
    this.provider = new Provider();
    this.id = this.route.snapshot.params.id;

    this.providerService.getProvider(this.id)
    .subscribe(data => {
      this.provider = data;
    },
    error => console.log(error));
  }

  updateProvider() {
    this.providerService.updateProvider(this.id, this.provider)
    .subscribe( data => {
      this.goToList();
    },
    error => console.log(error));
    this.provider = new Provider();
  }

  goToList() {
    this.updated = true;
    this.router.navigate(['/providers']);
  }

  onUpdateProviderForm(updateProviderForm: NgForm) {
    this.updated = true;
    this.updateProvider();
  }

}
