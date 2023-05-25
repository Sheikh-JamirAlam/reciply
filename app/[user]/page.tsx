"use client";

import { getAuth, User } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { app, auth } from "../firebase/config";
import Header from "../components/Header";

export default async function Page({ params }: { params: { user: string } }) {
  const dbRef = ref(getDatabase(app));
  const [user, loading, error] = useAuthState(auth);

  const getUser = async (user: User) => {
    await get(child(dbRef, `users/${params.user}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //await getUser(user);

  if (loading) {
    return <div>Hello</div>;
  }
  if (user) {
    return (
      <main className="bg-platinum h-screen">
        <Header />
      </main>
    );
  }
}
