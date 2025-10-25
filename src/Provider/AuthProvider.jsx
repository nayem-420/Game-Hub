// import { getAuth } from 'firebase/auth';
// import React, { createContext, useState } from 'react';
// import { app } from '../firebase/firebase.config';

// const AuthContext = createContext();
// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const createUser = (email, password) => {
        
//         createUserWithEmailAndPassword(auth, email, password);
//     }
//     const authData = {
//         user, 
//         setUser,
//         createUser
//     }
//     return <AuthContext value={authData}>
//         {children}
//     </AuthContext>
// };

// export default AuthProvider;