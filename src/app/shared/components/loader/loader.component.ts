import { Component } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.pug',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
    constructor(public loaderService: LoaderService) {}
}