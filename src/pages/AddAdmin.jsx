import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AddAdmin() {
  // ✅ بيانات وهمية فقط للعرض
  const [users, setUsers] = useState([
    { id: 1, name: "Leo", email: "leo@tmnt.com", role: "admin" },
    { id: 2, name: "Raph", email: "raph@tmnt.com", role: "user" },
    { id: 3, name: "Donnie", email: "don@tmnt.com", role: "user" },
    { id: 4, name: "Mikey", email: "mikey@tmnt.com", role: "user" }
  ]);

  const [page, setPage] = useState(1);
  const usersPerPage = 3;
  const totalPages = Math.ceil(users.length / usersPerPage);

  const start = (page - 1) * usersPerPage;
  const paginatedUsers = users.slice(start, start + usersPerPage);

  // ✅ ترقية المستخدم
  const updateRole = (id) => {
    setUsers(users.map(u => 
      u.id === id ? { ...u, role: "admin" } : u
    ));
  };

  // ✅ حذف المستخدم
  const deleteUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <>
    
      <div style={{ padding: '2rem', background: '#111', color: '#fff' }}>
        <h2 style={{ color: '#00ffcc' }}>👤 Manage Users</h2>

        <table style={{ width: '100%', marginTop: '1rem', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#222' }}>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Role</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginatedUsers.map((u) => (
              <tr key={u.id} style={{ background: '#1a1a1a', textAlign: 'center' }}>
                <td style={styles.td}>{u.id}</td>
                <td style={styles.td}>{u.name}</td>
                <td style={styles.td}>{u.email}</td>
                <td style={styles.td}>
                  <span style={u.role === 'admin' ? styles.badgeAdmin : styles.badgeUser}>
                    {u.role}
                  </span>
                </td>
                <td style={styles.td}>
                  {u.role !== 'admin' && (
                    <button style={styles.button} onClick={() => updateRole(u.id)}>
                      Promote to Admin
                    </button>
                  )}
                  <button style={styles.deleteBtn} onClick={() => deleteUser(u.id)}>
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ✅ Pagination */}
        <div style={{ marginTop: '1rem' }}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              style={{
                margin: '0 0.25rem',
                padding: '0.25rem 0.5rem',
                background: i + 1 === page ? '#00ffcc' : '#444',
                color: '#000',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
  
    </>
  );
}

const styles = {
  th: {
    padding: '0.75rem',
    borderBottom: '1px solid #333',
    color: '#00ffcc'
  },
  td: {
    padding: '0.5rem',
    borderBottom: '1px solid #222'
  },
  button: {
    padding: '0.3rem 0.75rem',
    backgroundColor: '#00ffcc',
    color: '#000',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '0.5rem'
  },
  deleteBtn: {
    padding: '0.3rem 0.75rem',
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  badgeAdmin: {
    backgroundColor: '#00ffcc',
    color: '#000',
    padding: '0.2rem 0.5rem',
    borderRadius: '4px'
  },
  badgeUser: {
    backgroundColor: '#888',
    color: '#000',
    padding: '0.2rem 0.5rem',
    borderRadius: '4px'
  }
};
