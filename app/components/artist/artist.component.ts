import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';
import { ActivatedRoute } from '@angular/router';



@Component({
	moduleId: module.id,
	selector: 'artist',
	templateUrl: 'artist.component.html'
})
export class ArtistComponent {
	id: string;
	artist: Artist[];
	album: Album[];
	constructor(
		private _route : ActivatedRoute,
		private _spotifyService: SpotifyService){

	}

	ngOnInit(){
		this._route.params
			.map(params => params['id'])
			.subscribe((id) => {
				this._spotifyService.getArtist(id)
					.subscribe(artist => {
					 	this.artist = artist;
					})
			})

	}
}
