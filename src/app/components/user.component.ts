import {Component} from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostsService]
})
export class UserComponent {

    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    posts: Post[];

    constructor(private postsService: PostsService) {
        this.name = 'John Do'; 
        this.email = 'john@gmail.com'; 
        this.address = {
            street: '12 main str',
            city: 'Boston',
            state: 'MA'
        }
        this.hobbies = ['Music', 'Movies', 'Sports'];
        this.showHobbies = false;
        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;
        });
    }

    public onSubmit(hobby: any, event: Event) {
        event.preventDefault();
        this.hobbies.push(hobby.value);
        hobby.value = null;
    }

    public deleteHobby(i: number) {
        this.hobbies.splice(i, 1);
    }

    toggleHobbies() {
        this.showHobbies = !this.showHobbies;
    }

}

interface address {
    street: string;
    city: string;
    state: string;
}

interface Post {
    id: number;
    title: string;
    body: string;

}