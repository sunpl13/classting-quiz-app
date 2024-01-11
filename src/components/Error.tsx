import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/', { replace: true });
  };
  return (
    <Wrapper>
      <h2>에러 발생!</h2>
      <p>
        에러가 발생했어요..😥 <br />
        다음에 다시 시도해 주세요.
      </p>

      <Button variant="outlined" onClick={onClick}>
        되돌아가기
      </Button>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.div`
  width: 500px;
  background: var(--bg);
  border-radius: 4px;
  margin-top: 100px;
  padding: 30px 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  & h2 {
    font-size: 24px;
    letter-spacing: 1.4px;
    text-align: center;
  }

  & p {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  }

  & button {
    margin-top: 20px;
  }
`;
