import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { TopicComponent } from './components/topic/topic.component';
import { FormsModule } from '@angular/forms';
import { CreateTopicComponent } from './components/create-topic/create-topic.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreatePostComponent,
    ProfileComponent,
    PostDetailComponent,
    EditPostComponent,
    LoginSignupComponent,
    ErrorHandlingComponent,
    TopicComponent,
    CreateTopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
