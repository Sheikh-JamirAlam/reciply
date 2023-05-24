import { getDatabase } from "firebase/database";
import { initFirebase } from "../firebase/config";

export default function Page({ params }: { params: { user: string } }) {
  const firebaseApp = initFirebase();
  const database = getDatabase(firebaseApp);

  return (
    <main className="bg-platinum h-screen">
      <p>Welcome {params.user}!</p>
    </main>
  );
}
