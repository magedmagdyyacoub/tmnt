import { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Layout = styled.div`
  background-color: #0d0d0d;
  color: #00ffcc;
  min-height: 100vh;
  font-family: 'Orbitron', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
`;

const Username = styled.h1`
  font-size: 2.5rem;
  margin-top: 2rem;
  color: #00ffcc;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 1rem;
  object-fit: cover;
`;

const Info = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const ActionButton = styled.button`
  background-color: #00ffcc;
  color: #0d0d0d;
  border: none;
  padding: 0.5rem 1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;
`;

export default function UserProfile() {
  const navigate = useNavigate();

  // بيانات ثابتة مؤقتًا بدل backend
  const [user, setUser] = useState({
    name: 'Maged',
    bio: 'I love TMNT 🍕',
    avatar: '/avatars/leo.png',
    pizzacount: 10,
    fanartcount: 2,
    score: 150,
  });

  const [bio, setBio] = useState(user.bio);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    alert('تم حفظ البيانات (بدون Backend) ✅');

    setUser(prev => ({
      ...prev,
      bio,
      avatar: avatarPreview ? avatarPreview : prev.avatar
    }));

    setShowForm(false);
  };

  return (
    <>
    
      <Layout>

        <Avatar src={avatarPreview || user.avatar} alt="avatar" />
        <Username>Welcome, {user.name}</Username>
        <Info>Bio: {user.bio}</Info>
        <Info>🍕 Pizza Count: {user.pizzacount}</Info>
        <Info>🎨 Fanart Count: {user.fanartcount}</Info>
        <Info>🏆 Score: {user.score}</Info>

        <ButtonRow>
          <ActionButton onClick={() => setShowForm(prev => !prev)}>
            {showForm ? 'Hide Edit' : 'Update Profile'}
          </ActionButton>

          <ActionButton onClick={() => navigate('/users')}>
            Add Friend
          </ActionButton>

          <ActionButton onClick={() => navigate('/friend-requests')}>
            View Requests
          </ActionButton>

          <ActionButton onClick={() => navigate('/my-friends')}>
            My Friends
          </ActionButton>
        </ButtonRow>

        {showForm && (
          <Form onSubmit={handleSubmit}>
            <label>Update BIO</label>
            <textarea
              value={bio}
              onChange={e => setBio(e.target.value)}
              rows={4}
              style={{ fontFamily: 'Orbitron', padding: '0.5rem' }}
            />

            <input
              type="file"
              accept="image/*"
              onChange={e => {
                const fileURL = URL.createObjectURL(e.target.files[0]);
                setAvatarPreview(fileURL);
              }}
            />

            {avatarPreview && <Avatar src={avatarPreview} alt="preview" />}

            <ActionButton type="submit">Save Profile</ActionButton>
          </Form>
        )}

      </Layout>
  
    </>
  );
}
