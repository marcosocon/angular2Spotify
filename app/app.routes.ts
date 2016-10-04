import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent }  from './components/about/about.component';
import { ArtistComponent }  from './components/artist/artist.component';
import { AlbumComponent }  from './components/album/album.component';
import { SearchComponent }  from './components/search/search.component';

const appRoutes: Routes = [
	{path: '', component: SearchComponent},
	{path: 'artist/:id', component: ArtistComponent},
	{path: 'albums/:id', component: AlbumComponent},
	{path: 'about', component: AboutComponent}
];

export const appRoutingProviders: any[] = [];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
