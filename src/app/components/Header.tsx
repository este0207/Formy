'use client'
import Link from "next/link";

export default function Header() {
  const page = "/pages";
  return (
    <header className="bg-white border-b shadow-sm">
      <nav className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link href="/" className="font-bold text-xl text-black">Formy</Link>
        <ul className="flex gap-6 items-center">
          <li>
            <a href="/" className="text-gray-700 hover:text-black transition">Accueil</a>
          </li>
          <li>
            <a href="/course" className="text-gray-700 hover:text-black transition">Cours</a>
          </li>
          <li>
            <a href="/category" className="text-gray-700 hover:text-black transition">Catégories</a>
          </li>
          <li>
            <a href={page + "/register"} className="bg-black text-white px-4 py-1.5 rounded hover:bg-gray-900 transition">Connexion</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}