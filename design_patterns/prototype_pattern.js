/*
Prototype pattern will help you to create an object from an existing object.

In order to clone an object in Javascript, we have several ways such as 
Object.assign(), spread operator, libraries and so on.

However, we should build by ourselves to understand about the core concepts.

*/

class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    clone() {
        return new Post(this.title, this.content);
    }
}

const firstPost = new Post('Post Title', 'Post Content');

const secondPost = firstPost.clone();

console.log('The first post: ');
console.log(firstPost);
console.log('The second post: ');
console.log(secondPost);