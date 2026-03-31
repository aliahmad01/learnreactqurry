// PURPOSE: Main page that shows the user list with add/delete
// RULE: Only calls hooks — no fetch() here ever
// USED IN: App.jsx (as a route or direct component)

import { useState } from 'react';

// One clean import for all hooks
import { useUsers, useUserById, useAddUser, useDeleteUser } from '../hooks';
import { UserCard } from '../components/UserCard';

export function UsersPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  // ── Read ──────────────────────────────────────────────────
  const { data: users, isLoading, isError } = useUsers();

  // Only runs when selectedId is set (enabled: !!id inside the hook)
  const { data: selectedUser } = useUserById(selectedId);

  // ── Write ─────────────────────────────────────────────────
  const { mutate: addUser, isPending: isAdding } = useAddUser();
  const { mutate: deleteUser } = useDeleteUser();

  // ── Handlers ──────────────────────────────────────────────
  const handleAdd = () => {
    if (!name) return;
    addUser(
      { name, email },
      {
        onSuccess: () => { setName(''); setEmail(''); },
        onError: () => alert('Something went wrong!'),
      }
    );
  };

  // ── Render ────────────────────────────────────────────────
  if (isLoading) return <p>Loading users...</p>;
  if (isError)   return <p>Failed to load users.</p>;

  return (
    <div style={{ maxWidth: 500, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Users</h1>

      {/* Add User Form */}
      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{ marginRight: 8, padding: '6px 10px' }}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ marginRight: 8, padding: '6px 10px' }}
        />
        <button onClick={handleAdd} disabled={isAdding}>
          {isAdding ? 'Adding...' : 'Add User'}
        </button>
      </div>

      {/* User List — passes deleteUser down as a prop */}
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          onDelete={deleteUser}          // deleteUser(id) is called inside UserCard
          onClick={() => setSelectedId(user.id)}
        />
      ))}

      {/* Selected User Detail — only shows when a user is clicked */}
      {/* {selectedUser && (
        <div style={{ marginTop: 20, padding: 12, background: '#f0f0f0', borderRadius: 8 }}>
          <h3>Selected: {selectedUser.name}</h3>
          <p>{selectedUser.email}</p>
          <p>{selectedUser.company?.name}</p>
        </div>
      )} */}
    </div>
  );
}