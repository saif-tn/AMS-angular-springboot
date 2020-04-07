import { OnInit } from '@angular/core';
import { Article } from './Article';

export class PageArticle {
    content: Article[];
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number ;
    first: boolean ;
    sort: string ;
    numberOfElements: number ;
}
