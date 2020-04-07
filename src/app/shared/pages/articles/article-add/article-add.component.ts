import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/services/provider.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Article } from 'src/app/entities/Article';
import { ArticleService } from 'src/app/services/article.service';
import { Provider } from 'src/app/entities/Provider';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
export class ArticleAddComponent implements OnInit {

  article: Article = new Article();
  submitted = false;
  providerID: number;
  providers: Provider[];
  addArticleForm: NgForm;


  constructor(private articleService: ArticleService,
              private providerService: ProviderService,
              private router: Router) { }


  ngOnInit() {
    /* this.providerService.getPageProvider(1).subscribe(
      data => {
        console.log('getPageProvider', data.content);
      }
    ); */
    this.providerService.getProviders()
    .pipe(
        map(result => {
              this.providers = result.content;
              console.log(this.providers);
            }
        )
    )
    .subscribe(result => {
      // console.log('getProviders', result.content);
    },
    error => {
      console.log(error);
    }
    );
  }



  onSubmitArticleForm(addArticleForm: NgForm) {
    console.log('addArticleForm', addArticleForm.value);
    this.submitted = true;
    this.saveArticle(addArticleForm.value.provider_id);
  }

  newArticle(): void {
    this.submitted = false;
    this.article = new Article();
  }

  saveArticle(providerID: number) {
    this.articleService.createArticle(providerID, this.article)
    .subscribe( data => {
      console.log('Article is submitting');
      this.goToList();
    },
    error => console.log('saveArticle Error', error));
    this.article = new Article();
  }

  goToList() {
    this.router.navigate(['/articles']);
  }

}
