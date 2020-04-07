import { OnInit } from '@angular/core';
import { Provider } from './Provider';

export class PageProvider {
    content: Provider[];
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number ;
    first: boolean ;
    sort: string ;
    numberOfElements: number ;
}
