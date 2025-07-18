'use client'
import Link from "next/link";
import { useState } from "react";
import { Menu, X, LogOut } from "lucide-react";
import { useUser } from "@/app/context/UserContext";
import { useRouter } from "next/navigation";

export default function Header() {
  const page = "/pages";
  const [open, setOpen] = useState(false);
  const { user, setUser } = useUser();
  const router = useRouter();

  function handleLogout() {
    setUser(null);
    router.push("/");
  }

  return (
    <header className="w-full backdrop-blur bg-white/80 shadow-lg border-b border-transparent sticky top-0 z-30">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 sm:px-8">
        <Link href="/" className="font-extrabold text-4xl bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent drop-shadow-sm tracking-tight">
          Formy
        </Link>
        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 items-center text-base font-medium">
          <li>
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors duration-200">Accueil</Link>
          </li>
          <li>
            <Link href="/course" className="text-gray-700 hover:text-purple-600 transition-colors duration-200">Cours</Link>
          </li>
          <li>
            <Link href="/category" className="text-gray-700 hover:text-purple-600 transition-colors duration-200">Catégories</Link>
          </li>
          {user ? (
            <li className="flex items-center gap-2 text-purple-700 font-bold">
              Bonjour, {user.name || user.email}
              <button
                onClick={handleLogout}
                className="ml-2 px-3 py-1.5 bg-gradient-to-r from-purple-500 to-blue-400 text-white rounded-lg shadow hover:from-purple-600 hover:to-blue-500 transition flex items-center gap-1"
                title="Déconnexion"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Déconnexion</span>
              </button>
            </li>
          ) : (
            <li>
              <Link href={page + "/register"} className="bg-gradient-to-r from-purple-500 to-blue-400 text-white px-5 py-2 rounded-xl shadow hover:from-purple-600 hover:to-blue-500 transition-all font-semibold">
                Connexion
              </Link>
            </li>
          )}
        </ul>
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-purple-100 transition flex items-center justify-center"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen(o => !o)}
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
        {/* Mobile menu */}
        {open && (
          <div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden" onClick={() => setOpen(false)}>
            <nav
              className="absolute top-0 right-0 w-64 h-full bg-white shadow-2xl p-8 flex flex-col gap-6 animate-slide-in rounded-l-3xl"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="self-end mb-4 p-2 rounded-lg hover:bg-purple-100 transition"
                aria-label="Fermer le menu"
                onClick={() => setOpen(false)}
              >
                <X className="w-7 h-7" />
              </button>
              <Link href="/" className="text-gray-700 hover:text-purple-600 text-lg font-semibold transition-colors" onClick={() => setOpen(false)}>Accueil</Link>
              <Link href="/course" className="text-gray-700 hover:text-purple-600 text-lg font-semibold transition-colors" onClick={() => setOpen(false)}>Cours</Link>
              <Link href="/category" className="text-gray-700 hover:text-purple-600 text-lg font-semibold transition-colors" onClick={() => setOpen(false)}>Catégories</Link>
              {user ? (
                <span className="flex items-center gap-2 text-purple-700 font-bold mt-2">
                  Bonjour, {user.name || user.email}
                  <button
                    onClick={() => { setOpen(false); handleLogout(); }}
                    className="ml-2 px-3 py-1.5 bg-gradient-to-r from-purple-500 to-blue-400 text-white rounded-lg shadow hover:from-purple-600 hover:to-blue-500 transition flex items-center gap-1"
                    title="Déconnexion"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="hidden sm:inline">Déconnexion</span>
                  </button>
                </span>
              ) : (
                <Link href={page + "/register"} className="bg-gradient-to-r from-purple-500 to-blue-400 text-white px-5 py-2 rounded-xl shadow hover:from-purple-600 hover:to-blue-500 transition-all font-semibold text-center" onClick={() => setOpen(false)}>
                  Connexion
                </Link>
              )}
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
}