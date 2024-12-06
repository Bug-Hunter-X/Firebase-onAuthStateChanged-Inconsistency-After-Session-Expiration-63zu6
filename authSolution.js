function setupAuthListener(firebaseApp) {
  firebaseApp.auth().onAuthStateChanged((user) => {
    // Check for null user explicitly. onAuthStateChanged won't necessarily reflect immediate changes after session expiry.
    if (user) {
      // User is signed in
      console.log('User is signed in:', user);
      // ...your code for signed in user
    } else {
      // User is signed out
      console.log('User is signed out');
      // ...your code for signed out user
    }
  }, (error) => {
    console.error('Error during onAuthStateChanged:', error); // Handle errors appropriately
  });
}

// Add error handling, for example, a timeout or retry mechanism, to handle transient network issues.  Additionally, consider using a combination of onAuthStateChanged and other security rules to validate user status on each relevant action.