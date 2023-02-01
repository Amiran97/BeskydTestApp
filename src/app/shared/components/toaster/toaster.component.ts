import { Component, OnDestroy, TemplateRef } from '@angular/core';
import { ToasterService } from '../../services/toaster.service';


@Component({
    selector: 'app-toaster',
    templateUrl: "./toaster.component.pug",
    styleUrls: ["./toaster.component.scss"],
})
export class ToastsComponent implements OnDestroy {
	constructor(public toasterService: ToasterService) {}

    ngOnDestroy(): void {
        this.toasterService.clear();
    }

	isTemplate(toast: any) {
		return toast.textOrTpl instanceof TemplateRef;
	}
}