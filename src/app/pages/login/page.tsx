'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/context/UserContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setUser } = useUser();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await fetch("/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.error || "Erreur inconnue");
    } else {
      setUser(data.user);
      router.push("/");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-100 py-12 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl w-full max-w-md p-8 space-y-6 border-0"
      >
        <h1 className="text-3xl font-extrabold text-center bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent drop-shadow mb-2">Connexion</h1>
        <p className="text-center text-gray-500 mb-4">Connecte-toi à ton compte Formy</p>
        {error && <div className="bg-red-100 text-red-700 rounded-lg px-4 py-2 text-sm text-center font-medium animate-shake">{error}</div>}
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">Email</label>
          <input
            className="w-full border-2 border-gray-200 px-4 py-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="ton@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">Mot de passe</label>
          <input
            className="w-full border-2 border-gray-200 px-4 py-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-blue-400 text-white font-bold py-2.5 rounded-xl shadow-lg hover:from-purple-600 hover:to-blue-500 transition-all mt-2 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Connexion..." : "Se connecter"}
        </button>
      </form>
    </div>
  );
} 