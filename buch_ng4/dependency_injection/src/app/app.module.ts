import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {UserService} from './services/user-service/user.service';
import {AppComponent} from './app.component';
import {MainViewComponent} from './components/main-view/main-view.component';
import {VideoLibraryComponent} from './components/video-library/video-library.component';
import {MusicLibraryComponent} from './components/music-library/music-library.component';
import {TABS_DIRECTIVES} from './components/tabs/tabs.component';
import {DiExamplesComponent} from './components/di-examples/di-examples.component';
import {MedipediaComponent} from './components/medipedia/medipedia.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {UserBadgeComponent} from './components/user-badge/user-badge.component';
import {BorderDirective} from './directives/border/border.directive';
import {AlertDirective} from './directives/alert/alert.directive';
import {DirectoryComponent} from './components/directory/directory.component';


@NgModule({
  imports: [BrowserModule, HttpModule],
  providers: [
    UserService
  ],
  declarations: [
    AppComponent,
    DiExamplesComponent,
    SearchBarComponent,
    MedipediaComponent,
    MusicLibraryComponent,
    VideoLibraryComponent,
    MainViewComponent,
    UserBadgeComponent,
    DirectoryComponent,
    AlertDirective,
    BorderDirective,
    TABS_DIRECTIVES
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
