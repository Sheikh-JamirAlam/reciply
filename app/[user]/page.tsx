import { getDatabase } from "firebase/database";
import { initFirebase } from "../firebase/config";
import Header from "../components/Header";

export default function Page({ params }: { params: { user: string } }) {
  const firebaseApp = initFirebase();
  const database = getDatabase(firebaseApp);

  return (
    <main className="bg-platinum h-screen">
      <Header />
    </main>
  );
}
