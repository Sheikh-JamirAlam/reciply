"use client";

import { useState, createContext, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { ref, set, push, get, child, update } from "firebase/database";
import { auth, db } from "./config";

const AuthContext = createContext<any>({});

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<any>();
  const [userDetails, setUserDetails] = useState<any>();
  const [recipeList, setRecipeList] = useState<any>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser({ uid: user.uid, email: user.email });
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });
  }, []);

  const signup = (email: string, password: string, firstName: string, lastName: string, userName: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const createdUser = userCredential.user;
        console.log(currentUser);
        set(ref(db, "users/" + createdUser.uid), {
          firstName,
          lastName,
          userName,
          email: createdUser.email,
          followers: 0,
          recipes: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const login = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setCurrentUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const findUser = async (user: User, page: string) => {
    await get(child(ref(db), `users/${user.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUserDetails(snapshot.val());
          if (page === "create") {
            router.push(`/${snapshot.val().userName}/create`);
          } else {
            router.push(`/${snapshot.val().userName}`);
          }
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addRecipes = async (author: string, title: string, ingredientList: Array<string>, description: string, steps: Array<string>, category: string) => {
    const recipeRef = push(ref(db, `users/${currentUser.uid}/recipes`));
    await set(recipeRef, {
      author,
      title,
      ingredientList,
      description,
      steps,
      likes: 0,
      category,
    });
  };

  const getRecipes = async (user: User) => {
    get(child(ref(db), `users/${user.uid}/recipes`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setRecipeList(Object.values(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return <AuthContext.Provider value={{ loading, currentUser, signup, login, logout, findUser, userDetails, addRecipes, getRecipes, recipeList }}>{loading ? null : children}</AuthContext.Provider>;
};
