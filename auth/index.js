import { AsyncStorage } from 'react-native'
import store from '../store'
const isAuth = async () => {
  try {
    const user = JSON.parse(AsyncStorage.getItem('liblibUser'))
    if (!user) {
      return false
    } else {
      return true
    }
  } catch (error) {
    console.error(error)
  }
}

const setCurrentUser = async (user) => {
  try {
    await AsyncStorage.setItem('liblibUser', JSON.stringify(user))
  } catch (error) {
    console.error(error)
  }
}

const getCurrentUser = async () => {
  try {
    const user = await JSON.parse(await AsyncStorage.getItem('liblibUser'))
    if (user) {
      return user
    } else {
      return null
    }
  } catch (error) {
    console.error(error)
  }
}

const removeCurrentUser = async () => {
  await AsyncStorage.removeItem('liblibUser')
}

const SERVER_URL = 'http://blueto0th.ddns.net:5000/api/'

const getHeaders = (withAuth) => {
  const authToken = store.getState().auth.jwt
  const headersWithoutAuth = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
  if (withAuth && authToken !== null) {
    return {
      ...headersWithoutAuth,
      Authorization: `Bearer ${authToken}`,
    }
  }
  return headersWithoutAuth
}
export {
  isAuth,
  setCurrentUser,
  getCurrentUser,
  removeCurrentUser,
  SERVER_URL,
  getHeaders,
}
