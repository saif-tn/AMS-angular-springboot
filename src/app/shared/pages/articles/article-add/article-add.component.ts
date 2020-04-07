import { Component, OnInit, Provider } from '@angular/core';
import { ProviderService } from 'src/app/services/provider.service';
import { PageProvider } from 'src/app/entities/PageProvider';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ListProviderComponent } from '../../providers/list-provider/list-provider.component';
import { Article } from 'src/app/entities/Article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
export class ArticleAddComponent implements OnInit {

  article: Article = new Article();
  submitted = false;
  provider_id: number;


  constructor(private articleService: ArticleService,
              private router: Router) { }


  ngOnInit() {
  }

  onSubmitArticleForm(addArticleForm: NgForm) {
    console.log(addArticleForm.value);
    console.log(this.provider_id);
    console.log(addArticleForm.value);
    this.submitted = true;
    // this.saveArticle();
  }

  newArticle(): void {
    this.submitted = false;
    this.article = new Article();
  }

  saveArticle() {
    this.articleService.createArticle(this.provider_id, this.article)
    .subscribe( data => {
      console.log('Article is submitting');
      this.goToList();
    },
    error => console.log('Error' + error));
    this.article = new Article();
  }

  goToList() {
    this.router.navigate(['/articles']);
  }

}
