import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';

@Component({
	moduleId: module.id,
	selector: 'search',
	templateUrl: 'search.component.html',
	providers: [SpotifyService]
})

export class SearchComponent {
	searchStr: string;
	searchResults: Artist[];

	constructor(private _spotifyService: SpotifyService){

	}

	searchMusic(){
		this._spotifyService.searchMusic(this.searchStr)
			.subscribe(res =>{
				this.searchResults = res.artists.items;
			})

	}
}
