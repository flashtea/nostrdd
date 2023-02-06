import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { TopicComponent } from './components/topic/topic.component';
import { LoginGuard } from './components/login-signup/login.guard';
import { CreateTopicComponent } from './components/create-topic/create-topic.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
  { path: 'create-post', component: CreatePostComponent, canActivate: [LoginGuard] },
  { path: 'create-topic', component: CreateTopicComponent, canActivate: [LoginGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [LoginGuard] },
  { path: 'post/:id', component: PostDetailComponent, canActivate: [LoginGuard] },
  { path: 'edit-post/:id', component: EditPostComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginSignupComponent },
  { path: 'error', component: ErrorHandlingComponent },
  {
    path: 'topic/:id/create-post',
    component: CreatePostComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'topic/:id',
    component: TopicComponent,
    canActivate: [LoginGuard]
  },
  { path: '**', redirectTo: 'error' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }