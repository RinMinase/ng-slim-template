import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from "./home/home.module";

const routes: Routes = [
	{
		path: "about",
		loadChildren: () =>
			import("./about/about.module").then((m) => m.AboutModule),
	},
	{
		path: "",
		pathMatch: "full",
		redirectTo: "",
  },
];

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),

		HomeModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
