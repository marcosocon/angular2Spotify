import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent }  from './components/about/about.component';
import { SearchComponent }  from './components/search/search.component';

const appRoutes: Routes = [{
	path: 'about',
	component: AboutComponent,
	data: {
		 title: 'About'
		}
	},
	{ path: '', component: SearchComponent }
];

export const appRoutingProviders: any[] = [];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
