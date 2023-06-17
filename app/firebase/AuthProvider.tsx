"use client";

import { useState, createContext, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { ref, set, push, get, child } from "firebase/database";
import { uploadBytes, ref as refStorage, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "./config";

const AuthContext = createContext<any>({});

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<any>();
  const [userDetails, setUserDetails] = useState<any>();
  const [recipeList, setRecipeList] = useState<any>();
  const [recipeIdList, setRecipeIdList] = useState<any>();
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
          } else if (page === "onlyGetUser") {
            console.log("User details set.");
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
    await getDownloadURL(refStorage(storage, `${currentUser.uid}/recipes/${title}`))
      .then((url) => {
        const recipeRef = push(ref(db, `users/${currentUser.uid}/recipes`));
        set(recipeRef, {
          author,
          title,
          ingredientList,
          description,
          steps,
          likes: 0,
          category,
          url,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getRecipes = async (user: User) => {
    get(child(ref(db), `users/${user.uid}/recipes`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setRecipeIdList(Object.keys(snapshot.val()));
          setRecipeList(Object.values(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addPicture = async (image: string, title: string) => {
    const storageRef = refStorage(storage, `${currentUser.uid}/recipes/${title}`);
    const response = await fetch(image);
    const blob = await response.blob();
    await uploadBytes(storageRef, blob)
      .then((snapshot) => {
        console.log("Uploaded image.");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <AuthContext.Provider value={{ loading, currentUser, signup, login, logout, findUser, userDetails, addRecipes, getRecipes, recipeList, recipeIdList, addPicture }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
