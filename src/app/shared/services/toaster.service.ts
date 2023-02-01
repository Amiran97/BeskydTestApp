import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToasterService {
	toasts: any[] = [];

	private show(textOrTpl: string | TemplateRef<any>, options: any = {}, icon: string = '') {
		this.toasts.push({ textOrTpl,  ...options, icon });
	}

    showStandard(message: string) {
		this.show(message);
	}

	showSuccess(message: string) {
		this.show(message, { classname: 'bg-success text-light  d-flex'}, 'bi-check-circle-fill');
	}

    showWarning(message: string) {
        this.show(message, { classname: 'bg-warning text-light'}, 'bi-exclamation-circle-fill');
    }

	showError(message: string) {
		this.show(message, { classname: 'bg-danger text-light', delay: 5000}, 'bi-x-circle-fill');
	}

	remove(toast: any) {
		this.toasts = this.toasts.filter((t) => t !== toast);
	}

	clear() {
		this.toasts.splice(0, this.toasts.length);
	}
}