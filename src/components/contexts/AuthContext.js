import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  // Usuário e senha padrão
  const defaultUser = {
    email: "gabrielguidob@gmail.com",
    password: "1337"
  }

  const login = (email, password) => {
    if (email === defaultUser.email && password === defaultUser.password) {
      setUser({ email })  
    } else {
      console.log('Usuário ou senha incorretos')
    }
  }

  const register = (email, password) => {
    
  }

  const logout = () => {
    setUser(null) 
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}