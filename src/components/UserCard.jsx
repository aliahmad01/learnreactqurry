// PURPOSE: Reusable UI component to display one user
// RULE: No fetching here — receives data as props
// USED IN: UsersPage.jsx
// EXAMPLE: <UserCard user={user} onDelete={deleteUser} />

export function UserCard({ user, onDelete }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 12, marginBottom: 8 }}>
    {console.log("Rendering with data:", user)}
      <h3 style={{ margin: '0 0 4px' }}>{user.name}</h3>
      <p style={{ margin: '0 0 4px', color: '#666' }}>{user.email}</p>
      <p style={{ margin: '0 0 8px', color: '#999' }}>{user.phone}</p>
      <p style={{ margin: '0 0 8px', color: '#999' }}>{user.website}</p>

      {/* onDelete is passed from the parent page, not called directly here */}
      <button
        onClick={() => onDelete(user.id)}
        style={{ background: 'red', color: 'white', border: 'none', borderRadius: 4, padding: '4px 10px', cursor: 'pointer' }}
      >
        Delete
      </button>
    </div>
  );
}