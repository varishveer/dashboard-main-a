import axios from 'axios';

const BASE_URL = 'https://example.com';

function login(email, password) {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);
  return axios.post(`${BASE_URL}/api/login/`, formData)
    .then(response => response.data)
    .catch(error => Promise.reject(error.message));
}

function logout(token) {
  const headers = { Authorization: token };
  return axios.post(`${BASE_URL}/api/store-admin-log-out/`, {}, { headers })
    .then(response => response.data)
    .catch(error => Promise.reject(error.message));
}

function resetPassword(email, currentPassword, newPassword, token) {
  const formData = new FormData();
  formData.append('store_email', email);
  formData.append('current_password', currentPassword);
  formData.append('new_password', newPassword);
  const headers = { Authorization: token };
  return axios.post(`${BASE_URL}/store-reset-pasword/`, formData, { headers })
    .then(response => response.data)
    .catch(error => Promise.reject(error.message));
}

function forgotPassword(email, token) {
