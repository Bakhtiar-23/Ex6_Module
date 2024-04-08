async function getCommentsWithAsyncAwait() {
    try {
      const response = await fetch('https://my-json-server.typicode.com/typicode/demo/comments');
      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      }
      const comments = await response.json();
      return comments;
    } catch (error) {
      console.error('Error fetching comments:', error);
      throw error; // Re-throw the error for further handling if needed
    }
  }
  
  // Usage
  (async () => {
    try {
      const comments = await getCommentsWithAsyncAwait();
      console.log('Comments:', comments);
    } catch (error) {
      // Handle errors from the operation
      console.error('Error in main function:', error);
    }
  })();
  

  