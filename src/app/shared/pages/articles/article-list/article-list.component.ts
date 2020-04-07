import { Component, OnInit } from '@angular/core';
import { PageArticle } from 'src/app/entities/PageArticles';
import { Article } from 'src/app/entities/Article';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[];
  pageArticle: PageArticle ;
  selectedPage: number = 0;
  provider_id: number;


  constructor(private articleService: ArticleService,
              private router: Router) { }

  getProviderArticle() {
    this.provider_id = this.articleService.getProviderArticle(10);
    return this.provider_id;
  }

  getArticle(): void {
    this.articleService.getArticles()
        .subscribe(
          articles => this.articles = articles
        );
  }
  getPageArticle(page:number): void {
    this.articleService.getPageArticle(page)
        .subscribe(
            page => this.pageArticle = page
        );
  }
  onSelect(page: number): void {
    console.log('selected page : ' + page);
    this.selectedPage = page;
    this.getPageArticle(page);
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.getPageArticle(0);
    /* this.providers = this.providerService.getProviders();
    console.log('PROVIDERs' + this.providers); */
  }
  articleDetails(id: number) {
    this.router.navigate(['articles/details', id]);
  }

  updateArticle(id: number) {
    this.router.navigate(['articles/update', id]);
  }

  deleteArticle(id: number) {
    this.articleService.deleteArticle(id)
      .subscribe(
        data => {
          console.log('deleteProvider function ' + data);
          this.reloadData();
        },
        error => console.log(error)
      );
  }

}
