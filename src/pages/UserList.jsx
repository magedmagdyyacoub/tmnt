import { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

import defaultAvatar from "../assets/tmnt.jpg"; // ✅ تأكد الصورة موجودة

const Layout = styled.div`
  background-color: #0d0d0d;
  color: #00ffcc;
  min-height: 100vh;
  font-family: 'Orbitron', sans-serif;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* ✅ ثابتة 3 أعمدة */
  gap: 2rem;
  margin-top: 2rem;
  width: 100%; /* مهم علشان ياخد عرض الصفحة */
  max-width: 900px; /* شكل أحلى */
`;

const UserCard = styled.div`
  text-align: center;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const Button = styled.button`
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  background-color: #00ffcc;
  color: #0d0d0d;
  border: none;
  cursor: pointer;
`;

export default function UsersList() {

  // ✅ 9 مستخدمين ثابتين بدون Backend
  const users = [
    { id: 1, name: "Leo", avatar: defaultAvatar },
    { id: 2, name: "Raph", avatar: defaultAvatar },
    { id: 3, name: "Mikey", avatar: defaultAvatar },
    { id: 4, name: "Donnie", avatar: defaultAvatar },
    { id: 5, name: "Splinter", avatar: defaultAvatar },
    { id: 6, name: "April", avatar: defaultAvatar },
    { id: 7, name: "Casey", avatar: defaultAvatar },
    { id: 8, name: "Shredder", avatar: defaultAvatar },
    { id: 9, name: "Karai", avatar: defaultAvatar },
  ];

  const handleAddFriend = (name) => {
    alert(`✅ Friend request sent to ${name} (UI Only - No Backend)`);
  };

  return (
    <>
  
      <Layout>
        <h2>🧑‍🤝‍🧑 Find Friends</h2>
        <UserGrid>
          {users.map(user => (
            <UserCard key={user.id}>
              <Avatar src={user.avatar} alt={user.name} />
              <p>{user.name}</p>
              <Button onClick={() => handleAddFriend(user.name)}>Add Friend</Button>
            </UserCard>
          ))}
        </UserGrid>

        {/* زرار شكلي فقط */}
        <Button disabled style={{ opacity: 0.5 }}>No More Users</Button>
      </Layout>
    
    </>
  );
}
