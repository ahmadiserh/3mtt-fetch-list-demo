// src/App.jsx
import React from 'react';
import ListComponent from './components/ListComponent';
import useFetch from './hooks/useFetch';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const { data: users, loading, error } = useFetch(API_URL);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>User Directory</h1>

      {loading && <p>Loading users…</p>}
      {error   && <p style={{ color: 'red' }}>Error: {error.message}</p>}

      {/* Once loaded, pass `users` array to your list component */}
      {!loading && !error && (
        <ListComponent
          items={users}
          renderItem={user => (
            <div>
              <strong>{user.name}</strong> — <a href={`mailto:${user.email}`}>{user.email}</a>
            </div>
          )}
        />
      )}
    </div>
  );
}

export default App;
