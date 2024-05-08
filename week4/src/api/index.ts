import axios, { isAxiosError } from 'axios';

const API_URL = `${import.meta.env.VITE_BASE_URL}`;

interface SignUpInfo {
  id: string;
  password: string;
  nickName: string;
  phone: string;
}

interface LoginInfo {
  id: string;
  password: string;
}

export const signUp = async (userInfo: SignUpInfo) => {
  try {
    const response = await axios.post(`${API_URL}/member/join`, {
      authenticationId: userInfo.id,
      password: userInfo.password,
      nickname: userInfo.nickName,
      phone: userInfo.phone,
    });

    return { data: response.data, location: response.headers.location };
  } catch (error) {
    if (isAxiosError(error)) {
      alert(error.response?.data.message);
    }
  }
};

export const login = async (loginInfo: LoginInfo) => {
  try {
    const response = await axios.post(`${API_URL}/member/login`, {
      authenticationId: loginInfo.id,
      password: loginInfo.password,
    });

    return { data: response.data, location: response.headers.location };
  } catch (error) {
    if (isAxiosError(error)) {
      alert(error.response?.data.message);
    }
  }
};
