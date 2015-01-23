function getPosts() {
    return [
        {
            id: 1,
            title: "Post 1",
            author: {
                name: "John Doe"
            },
            content: "This is a post with id of 1",
            comments: [
                {
                    id: 1,
                    name: "Jacob Smith",
                    content: "Great post!"
                },
                {
                    id: 2,
                    name: "Jane Doe",
                    content: "Thanks for the info!"
                }
            ]
        },
        {
            id: 2,
            title: "Post 2",
            author: {
                name: "Jane Doe"
            },
            content: "This is a post with id of 2",
            comments: []
        }
    ];
}

function getPost(id) {
    return {
        id: id,
        title: "Post " + id,
        author: {
            name: "John Doe"
        },
        content: "This is a post with id of " + id,
        comments: [
            {
                id: 1,
                name: "Jacob Smith",
                content: "Great post!"
            },
            {
                id: 2,
                name: "Jane Doe",
                content: "Thanks for the info!"
            }
        ]
    };
}