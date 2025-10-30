import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const message = "Welcome Admin Dashboard"; // رسالة ثابتة بدون Backend

  return (
    <>
  
      <div style={{ padding: '2rem', color: '#00ffcc', background: '#111' }}>
        <h1>{message}</h1>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <button
            onClick={() => navigate('/admin/posts')}
            style={styles.button}
          >
            ➕ Add Post
          </button>

          <button
            onClick={() => navigate('/admin/myposts')}
            style={styles.button}
          >
            🧾 My Posts
          </button>

          <button
            onClick={() => navigate('/admin/add-admin')}
            style={styles.button}
          >
            👤➕ Add Admin
          </button>
        </div>
      </div>
  
    </>
  );
}

const styles = {
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#00ffcc',
    color: '#000',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
};
