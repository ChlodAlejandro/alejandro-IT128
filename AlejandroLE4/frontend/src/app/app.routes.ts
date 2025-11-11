import { Routes } from '@angular/router';
import { ListPosts } from './components/list-posts/list-posts';
import { PostDetail } from './components/post-detail/post-detail';

export const routes: Routes = [
    { path: '', component: ListPosts },
    { path: 'posts/:id', component: PostDetail },
];
