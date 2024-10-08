import Link from "next/link";
import CardComponent from "./components/CardComponent";

export default function Home() {
  return (
    <main>
      <h1>Titan 1</h1>
      <Link href="/users">Users</Link>
      <CardComponent />
    </main>
  );
}
