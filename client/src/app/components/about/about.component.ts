import { Component, OnInit } from '@angular/core';
import { ProfileData } from 'src/app/data/profile-data';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit
{
  name:string = null;
  profile_pic:string = "../../../assets/sleepcycle2bigger.gif";
  profile_link:string = null;

  //TODO: inject the Spotify service
  constructor(private spotify:SpotifyService){ }

  ngOnInit(){ }

  /*TODO: create a function which gets the "about me" information from Spotify when the button in the view is clicked.
  In that function, update the name, profile_pic, and profile_link fields */
  aboutMe(): void
  {
    this.spotify.aboutMe().then((data)=>
    {
      this.profile_link = data.spotifyProfile;
      this.profile_pic = data.imageURL;
      this.name = data.name;
    });}

}
