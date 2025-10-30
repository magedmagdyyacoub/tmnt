import { useState } from 'react';

export default function PostList({ posts, onDelete, onEdit }) {
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ title: '', excerpt: '' });

  const handleDelete = (id) => {
    onDelete(id); // ✅ يمسح من ال state فقط
  };

  const handleEdit = (post) => {
    setEditingId(post.id);
    setFormData({ title: post.title, excerpt: post.excerpt });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    onEdit({ id: editingId, ...formData }); // ✅ يعدل في ال state فقط
    setEditingId(null);
  };

  return (
    <div>
      {posts.map((post) =>
        editingId === post.id ? (
          <form key={post.id} onSubmit={handleEditSubmit} style={styles.card}>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Title"
              style={styles.input}
              required
            />

            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              placeholder="Excerpt"
              style={styles.input}
              required
            />

            <button type="submit" style={styles.save}>Save</button>
            <button onClick={() => setEditingId(null)} style={styles.cancel}>Cancel</button>
          </form>
        ) : (
          <div key={post.id} style={styles.card}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>

            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                style={{ width: '150px', borderRadius: '6px', marginTop: '0.5rem' }}
              />
            )}

            <div style={{ marginTop: '0.5rem' }}>
              <button onClick={() => handleEdit(post)} style={styles.edit}>✏️ Edit</button>
              <button onClick={() => handleDelete(post.id)} style={styles.delete}>🗑️ Delete</button>
            </div>
          </div>
        )
      )}
    </div>
  );
}

const styles = {
  card: {
    background: '#222',
    color: '#fff',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1rem'
  },
  input: {
    width: '100%',
    marginBottom: '0.5rem',
    padding: '0.5rem',
    borderRadius: '4px'
  },
  edit: {
    marginRight: '0.5rem',
    backgroundColor: '#00ffcc',
    border: 'none',
    padding: '0.25rem 0.75rem',
    cursor: 'pointer',
    borderRadius: '4px'
  },
  delete: {
    backgroundColor: '#ff4d4f',
    border: 'none',
    padding: '0.25rem 0.75rem',
    cursor: 'pointer',
    borderRadius: '4px',
    color: '#fff'
  },
  save: {
    backgroundColor: '#00ffcc',
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    borderRadius: '4px',
    marginRight: '0.5rem'
  },
  cancel: {
    backgroundColor: '#666',
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    borderRadius: '4px',
    color: '#fff'
  }
};
