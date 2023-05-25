import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "./firebase/AuthProvider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Reciply",
  description: "Make fun reciples and share!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
