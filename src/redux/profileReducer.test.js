const { default: profileReducer, addPostActionCreator, deletePost } = require("./profileReducer");

let initialState = {
    posts: [
      { id: 1, post: "Hi! How r u?", likesCount: "25" },
      { id: 2, post: "My first post!!!", likesCount: "30" },
      { id: 3, post: "", likesCount: "5" },
      { id: 4, post: "", likesCount: "10" },
    ],
    profile: null,
    status: '',
}

// test('post length should increment', () => {
//     // 1. test data
    
//     // 2. action
//     let newState = profileReducer(initialState, addPostActionCreator('test post'));
//     // 3. expectation
//     expect(newState.posts.length).toBe(5);
// }); 

// test('post text should be correct', () => {
//     // 1. test data
    
//     // 2. action
//     let newState = profileReducer(initialState, addPostActionCreator('test post'));
//     // 3. expectation
//     expect(newState.posts[4].post).toBe('test post');
// });
  
// test('after delete post length should be decremented', () => {
//     // 1. test data
    
//     // 2. action
//     let newState = profileReducer(initialState, deletePost(1));
//     // 3. expectation
//     expect(newState.posts.length).toBe(3);
// }); 

test('if id incorrect after delete post length should not be decremented', () => {
    // 1. test data
    
    // 2. action
    let newState = profileReducer(initialState, deletePost(100));
    // 3. expectation
    expect(newState.posts.length).toBe(4);
}); 