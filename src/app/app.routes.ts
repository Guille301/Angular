import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostComponent } from './post/post.component';
import { DetailsComponent } from './details/details.component';
import { AlbumComponent } from './album/album.component';

export const routes: Routes = [
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'posts',
        component: PostComponent
    },
    {
        path: 'details/:id',
        component: DetailsComponent
    },
    { 
        path: 'albums/:id', 
        component: AlbumComponent 
    }


];
