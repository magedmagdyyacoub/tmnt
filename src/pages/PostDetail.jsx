import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import post1 from "../assets/img/post1.jpg";
import post2 from "../assets/img/post2.jpg";
import post3 from "../assets/img/post3.jpg";
import post4 from "../assets/img/post4.jpg";

const Container = styled.div`
  background: #111;
  color: #fff;
  min-height: 100vh;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  overflow: hidden;
  border-radius: 16px;
  margin-bottom: 2rem;
  box-shadow: 0 0 20px #00ffcc70;

  @media (max-width: 768px) {
    border-radius: 10px;
    margin-bottom: 1.5rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.4s ease;
  display: block;

  &:hover {
    transform: scale(1.03);
  }
`;

const Title = styled.h1`
  color: #00ffcc;
  font-size: 2.3rem;
  text-align: center;
  margin-bottom: 0.8rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Meta = styled.p`
  font-style: italic;
  color: #aaa;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Excerpt = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  max-width: 800px;
  text-align: center;
  color: #ddd;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

const CommentsSection = styled.div`
  margin-top: 2rem;
  background: #1a1a1a;
  padding: 1.8rem;
  border-radius: 12px;
  box-shadow: 0 0 15px #00ffcc40;
  width: 100%;
  max-width: 800px;
`;

const Comment = styled.div`
  margin-bottom: 1.3rem;
  border-bottom: 1px solid #333;
  padding-bottom: 1rem;
`;

const CommentAuthor = styled.h4`
  color: #00ffcc;
  margin-bottom: 0.4rem;
`;

const CommentText = styled.p`
  color: #ccc;
  font-size: 0.95rem;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 2.5rem;
  background: #00ffcc;
  color: #111;
  padding: 0.7rem 1.4rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s ease;

  &:hover {
    background: #00ccaa;
    transform: translateY(-2px);
  }
`;

export default function PostDetail() {
  const { id } = useParams();

  const mockPosts = [
    {
      id: 1,
      title: "Leonardo Leads",
      excerpt: "Leo steps up to lead the turtles in a dangerous mission.",
      image_url: post1,
      author_name: "Splinter",
    },
    {
      id: 2,
      title: "Raphael Strikes Back",
      excerpt: "Raph faces powerful enemies and his own rage.",
      image_url: post2,
      author_name: "Casey Jones",
    },
    {
      id: 3,
      title: "Donnie the Genius",
      excerpt: "Donatello unveils new high-tech turtle gear.",
      image_url: post3,
      author_name: "April O'Neil",
    },
    {
      id: 4,
      title: "Mikey's Pizza Party",
      excerpt: "Mikey turns battle victory into a celebration.",
      image_url: post4,
      author_name: "Michelangelo",
    },
  ];

  const post = mockPosts.find((p) => p.id === Number(id));

  const dummyComments = [
    { id: 1, author: "Splinter", text: "Excellent strategy, Leonardo!" },
    { id: 2, author: "April O'Neil", text: "Can’t wait to see what happens next!" },
    { id: 3, author: "Casey Jones", text: "That was intense! Raph nailed it!" },
  ];

  if (!post) {
    return (
      <Container>
        <p style={{ color: "#ff5555" }}>❌ Post not found.</p>
        <BackLink to="/">Back to Home</BackLink>
      </Container>
    );
  }

  return (
    <Container>
      <ImageWrapper>
        <Image src={post.image_url} alt={post.title} />
      </ImageWrapper>

      <Title>{post.title}</Title>
      <Meta>
        Posted by <strong>{post.author_name}</strong>
      </Meta>
      <Excerpt>{post.excerpt}</Excerpt>

      <CommentsSection>
        <h2 style={{ color: "#ffcc00", marginBottom: "1rem" }}>💬 Comments</h2>
        {dummyComments.map((comment) => (
          <Comment key={comment.id}>
            <CommentAuthor>{comment.author}</CommentAuthor>
            <CommentText>{comment.text}</CommentText>
          </Comment>
        ))}
      </CommentsSection>

      <BackLink to="/">⬅ Back to Home</BackLink>
    </Container>
  );
}
