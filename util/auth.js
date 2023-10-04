import axios from "axios";

// const loginAndSIgnUp = async (mode, data) => {
//   const response = await axios.post(
//     `https://1fe3-102-88-63-207.ngrok-free.app/api/V1/skyshowNG/${mode}`,
//     data
//   );
//   return response.data;
// };

const url = `https://776f-102-88-63-203.ngrok-free.app`;

export async function createUser(payload) {
  const response = await axios.post(`${url}/api/V1/skyshowNG/signUp`, payload);
  return response.data;
}

export async function verifyEmailAndNumber(option, data) {
  if (option === "Email") {
    const response = await axios.post(
      `${url}/api/V1/skyshowNG/signUp?email=${data}`
    );
    return response.data;
  }

  if (option === "Number") {
    const response = await axios.post(
      `${url}/api/V1/skyshowNG/signUp?Number=${data}`
    );
    return response.data;
  }
}

export async function login(payload) {
  const response = await axios.post(`${url}/api/V1/skyshowNG/login`, payload);
  return response.data;
}

export async function generateBTC(token) {
  const headers = {
    authorization: `Bearer ${token}`,
    "Content-Type": "Application/json",
  };

  const response = await axios.get(
    `${url}/api/V1/skyshowNG/btc_Wallet_Address`,
    {
      headers,
    }
  );
  return response.data;
}

export async function generateEthereumWallet(token) {
  const headers = {
    authorization: `Bearer ${token}`,
    "Content-Type": "Application/json",
  };

  const response = await axios.get(
    `${url}/api/V1/skyshowNG/generateEtheriumWallet`,
    {
      headers,
    }
  );
  return response.data;
}

export async function generateUsdt(token) {
  const headers = {
    authorization: `Bearer ${token}`,
    "Content-Type": "Application/json",
  };

  const response = await axios.get(
    `${url}/api/V1/skyshowNG/generateTetherAddress`,
    {
      headers,
    }
  );
  return response.data;
}

export async function update(data, token) {
  const headers = {
    authorization: `Bearer ${token}`,
    "Content-Type": "Application/json",
  };

  const response = await axios.patch(`${url}/api/V1/skyshowNG/updateMe`, data, {
    headers,
  });
  return response.data;
}

export async function getBankList(data, token) {
  const headers = {
    authorization: `Bearer ${token}`,
    "Content-Type": "Application/json",
  };

  const response = await axios.get(`${url}/api/V1/skyshowNG/listBank`, {
    headers,
  });
  return response.data;
}

export async function addBank(data, token) {
  const headers = {
    authorization: `Bearer ${token}`,
    "Content-Type": "Application/json",
  };

  const response = await axios.get(
    `${url}/api/V1/skyshowNG/addBank?AccountNumber=${data.number}&bankName=${data.bankName}`,
    {
      headers,
    }
  );
  return response.data;
}

export async function getSavedBank(token) {
  const headers = {
    authorization: `Bearer ${token}`,
    "Content-Type": "Application/json",
  };
  //rewrite url
  const response = await axios.get(`${url}/api/V1/skyshowNG/savedBank`, {
    headers,
  });
  return response.data;
}

export async function withdraw(data, token) {
  // let amount;
  // amount = `${data.amount}00`;

  const headers = {
    authorization: `Bearer ${token}`,
    "Content-Type": "Application/json",
  };

  const response = await axios.get(
    `${url}/api/V1/skyshowNG/withdraw?amount=${data.amount}&desc=${""}&bank=${
      data.selectedBank
    }`,
    {
      headers,
    }
  );
  return response.data;
}

export async function cryptoTransactionHis(token) {
  const headers = {
    authorization: `Bearer ${token}`,
    "Content-Type": "Application/json",
  };

  const response = await axios.get(
    `${url}/api/V1/skyshowNG/transations_Crypo`,
    {
      headers,
    }
  );
  return response.data;
}

export async function refer(token) {
  const headers = {
    authorization: `Bearer ${token}`,
    "Content-Type": "Application/json",
  };

  const response = await axios.get(`${url}/api/V1/skyshowNG/refarral_link`, {
    headers,
  });
  return response.data;
}

export async function getgiftCarfHistory(token) {
  const headers = {
    authorization: `Bearer ${token}`,
    "Content-Type": "Application/json",
  };

  const response = await axios.get(
    `${url}/api/V1/skyshowNG/transations_GiftCard`,
    {
      headers,
    }
  );
  return response.data;
}
