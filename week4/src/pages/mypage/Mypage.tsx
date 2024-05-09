import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { UpdatePassword, getUser, updatePassword } from '../../api';

const Mypage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState({
    authenticationId: '',
    nickname: '',
    phone: '',
  });
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordCheck, setNewPasswordCheck] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const response = await getUser(id);

        setUserInfo(response.data);
      }
    };

    fetchData();
  }, [id]);

  const handlePasswordChange = async () => {
    if (!password || !newPassword || !newPasswordCheck) {
      alert('모든 입력란을 입력해주세요.');
      return;
    }

    if (newPassword !== newPasswordCheck) {
      alert('새 비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    const updatePasswordData: UpdatePassword = {
      memberId: id!,
      password,
      newPassword,
      newPasswordCheck,
    };

    const data = await updatePassword(updatePasswordData);

    if (data?.code === 200) {
      alert('비밀번호가 변경되었습니다.');
      navigate('/');
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Mypage</Title>

        <FlexContainer>
          <Label>아이디</Label>
          <Text>{userInfo.authenticationId}</Text>
        </FlexContainer>

        <FlexContainer>
          <Label>닉네임</Label>
          <Text>{userInfo.nickname}</Text>
        </FlexContainer>

        <FlexContainer>
          <Label>전화번호</Label>
          <Text>{userInfo.phone}</Text>
        </FlexContainer>

        <Box>
          <ToggleButton onClick={() => setShowPasswordChange(!showPasswordChange)}>
            비밀번호 변경 {showPasswordChange ? '⇧' : '⇩'}
          </ToggleButton>
        </Box>

        {showPasswordChange && (
          <>
            <FlexContainer>
              <Label>현재 비밀번호</Label>
              <Input placeholder="현재 비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FlexContainer>

            <FlexContainer>
              <Label>새 비밀번호</Label>
              <Input placeholder="새 비밀번호" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            </FlexContainer>

            <FlexContainer>
              <Label>비밀번호 확인</Label>
              <Input
                placeholder="비밀번호 확인"
                value={newPasswordCheck}
                onChange={(e) => setNewPasswordCheck(e.target.value)}
              />
            </FlexContainer>

            <Button onClick={handlePasswordChange}>비밀번호 변경</Button>
          </>
        )}
        <Button onClick={() => navigate('/')}>홈으로</Button>
      </Wrapper>
    </Container>
  );
};

export default Mypage;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 4rem 6rem;

  color: white;

  background-color: green;
  border-radius: 10px;
`;

const Title = styled.p`
  margin-bottom: 1rem;

  color: white;
  font-size: 3rem;
  text-align: center;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const Label = styled.label`
  width: 10rem;

  font-size: 1.6rem;
`;

const Text = styled.p`
  width: 15rem;

  font-size: 1.6rem;
`;

const Box = styled.div`
  width: 100%;
`;

const ToggleButton = styled.button`
  padding: 0.5rem 1rem 0.5rem 0;

  color: blue;
  font-size: 1.1rem;
  text-align: start;

  cursor: pointer;
`;

const Input = styled.input`
  width: 15rem;
  padding: 1rem;

  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 1rem;

  color: white;

  background-color: #007bff;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;
