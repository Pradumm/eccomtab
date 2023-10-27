import React, { useState } from 'react';
// "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk3ODI0MjU0LCJqdGkiOiJlMjQwMGFiYTc4ZDk0MzZiYjVmYjliYjdkMDJhMjRhNiIsInVzZXJfaWQiOiJhYzk1ZTM4Yi0xN2VkLTRiMTItODVmMy0yZmUxYzExNjI2MDgifQ.4yGReX8ygNxzDaJNQgi5N0QjbIeEz0JjN9x8mdZzeYU"
function App() {
  const [apiKey, setApiKey] = useState(''); // Store the API key
  const [isLoggedIn, setIsLoggedIn] = useState(!!apiKey); // Check if the user is logged in based on the presence of the API key

  const handleLogin = (apiKey) => {
    setApiKey(apiKey);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Clear the API key to log the user out
    setApiKey('');
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome, User!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>You are logged out.</p>
          <button onClick={() => handleLogin('your-api-key-here')}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
