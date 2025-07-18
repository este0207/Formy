'use client'
import Link from "next/link";

export default function Header() {
  const page = "/pages";
  return (
    <header className="backdrop-blur bg-white/80 shadow-lg border-b border-transparent sticky top-0 z-30">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 sm:px-8">
        <Link href="/" className="font-extrabold text-4xl bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent drop-shadow-sm tracking-tight">
          Formy
        </Link>
        <ul className="flex gap-6 items-center text-base font-medium">
          <li>
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors duration-200">Accueil</Link>
          </li>
          <li>
            <Link href="/course" className="text-gray-700 hover:text-purple-600 transition-colors duration-200">Cours</Link>
          </li>
          <li>
            <Link href="/category" className="text-gray-700 hover:text-purple-600 transition-colors duration-200">Catégories</Link>
          </li>
          <li>
            <Link href={page + "/register"} className="bg-gradient-to-r from-purple-500 to-blue-400 text-white px-5 py-2 rounded-xl shadow hover:from-purple-600 hover:to-blue-500 transition-all font-semibold">
              Connexion
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}