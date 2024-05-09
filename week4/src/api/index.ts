import axios, { isAxiosError } from 'axios';

const API_URL = `${import.meta.env.VITE_BASE_URL}`;

export interface SignUpInfo {
  id: string;
  password: string;
  nickName: string;
  phone: string;
}

export interface LoginInfo {
  id: string;
  password: string;
}

export interface UpdatePassword {
  memberId: string;
  password: string;
  newPassword: string;
  newPasswordCheck: string;
}

export const signUp = async (userInfo: SignUpInfo) => {
  try {
    const response = await axios.post(`${API_URL}/member/join`, {
      authenticationId: userInfo.id,
      password: userInfo.password,
      nickname: userInfo.nickName,
      phone: userInfo.phone,
    });

    return response.data;
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

export const getUser = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/member/info`, {
      headers: {
        memberId: id,
      },
    });

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error);
    }
  }
};

export const updatePassword = async (updatePassword: UpdatePassword) => {
  try {
    const response = await axios.patch(
      `${API_URL}/member/password`,
      {
        previousPassword: updatePassword.password,
        newPassword: updatePassword.newPassword,
        newPasswordVerification: updatePassword.newPasswordCheck,
      },
      {
        headers: {
          memberId: updatePassword.memberId,
        },
      },
    );

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      alert(error.response?.data.message);
    }
  }
};
