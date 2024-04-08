function getCommentsWithPromises() {
    return fetch('https://my-json-server.typicode.com/typicode/demo/comments')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch comments');
        }
        return response.json();
      })
      .then(comments => {
        return comments;
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
        throw error; // Re-throw the error for further handling if needed
      });
  }
  
  // Usage
  getCommentsWithPromises()
    .then(comments => {
      console.log('Comments:', comments);
    })
    .catch(error => {
      // Handle errors from the operation
      console.error('Error in main function:', error);
    });
  
    