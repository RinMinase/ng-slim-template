import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<div style="text-align:center" class="content">
			<h1>Navigation</h1>
			<a class="menu-padding" routerLink="/">Landing</a>
			<a class="menu-padding" routerLink="/home">Home</a>
			<a class="menu-padding" routerLink="/about">About</a>
		</div>
		<router-outlet></router-outlet>
	`,
	styles: []
})
export class AppComponent {}
