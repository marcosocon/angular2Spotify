import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routes, appRoutingProviders }  from './app.routes';

import { NavbarComponent }  from './components/navbar/navbar.component';
import { AboutComponent }  from './components/about/about.component';
import { SearchComponent }  from './components/search/search.component';



@NgModule({
	imports: [ BrowserModule, routes ],
	declarations: [ AppComponent, NavbarComponent, AboutComponent, SearchComponent ],
	providers: [ appRoutingProviders ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
