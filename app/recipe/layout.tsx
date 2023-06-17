import "./recipe.css";

export const metadata = {
  title: "Reciply - Recipes",
  description: "Your recipes",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
