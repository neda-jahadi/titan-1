import Image from "next/image";
import Link from "next/link";
import CardComponent from "./components/CardComponent";

export default function Home() {
  return (
    <main>
      <h1>Hello world</h1>
      <Link href="/users">Users</Link>
      <CardComponent />
    </main>
  );
}
