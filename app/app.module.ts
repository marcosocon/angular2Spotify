import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { routes, appRoutingProviders }  from './app.routes';
import { SpotifyService } from './services/spotify.service';


import { NavbarComponent }  from './components/navbar/navbar.component';
import { ArtistComponent }  from './components/artist/artist.component';
import { AboutComponent }  from './components/about/about.component';
import { SearchComponent }  from './components/search/search.component';



@NgModule({
	imports: [ BrowserModule, FormsModule, HttpModule, routes ],
	declarations: [ AppComponent, NavbarComponent, AboutComponent, SearchComponent, ArtistComponent ],
	providers: [ appRoutingProviders, SpotifyService ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
