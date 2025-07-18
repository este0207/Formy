import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";

export default function PythonProjectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-100 py-12 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link href="/">
          <Button variant="ghost" className="flex items-center gap-2 text-gray-700 hover:bg-green-100/60 rounded-xl mb-2">
            <ArrowLeft className="w-4 h-4" /> Retour aux projets
          </Button>
        </Link>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 drop-shadow-lg mb-2">
          Découverte de Python
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Apprends la programmation avec Python, le langage simple et puissant !
        </p>
        <div className="flex flex-wrap gap-3 mb-6">
          <Badge className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
          <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée estimée : 35 min</Badge>
          <Badge className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">Outil : Python (en ligne ou local)</Badge>
        </div>
        <Card className="rounded-3xl shadow-xl bg-white/90 border-0">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-2xl font-bold mb-2">🐍 1. C'est quoi Python ?</h2>
            <p className="text-base text-gray-700">
              Python est un langage de programmation polyvalent, simple à apprendre et très utilisé (web, data, IA, scripts…)
            </p>
            <h2 className="text-2xl font-bold mb-2">💡 2. Pourquoi apprendre Python ?</h2>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
              <li>Facile à lire et à écrire</li>
              <li>Utilisé dans l’IA, la data, le web, l’automatisation…</li>
              <li>Grande communauté et beaucoup de ressources</li>
            </ul>
            <h2 className="text-2xl font-bold mb-2">🚀 3. Mini-projet : une mini-calculatrice</h2>
            <p className="text-base text-gray-700">
              Tu vas créer un script qui additionne deux nombres saisis par l’utilisateur.
            </p>
            <h3 className="font-semibold text-lg">Étapes :</h3>
            <ol className="list-decimal pl-6 space-y-1 text-base text-gray-700">
              <li>Crée un fichier <span className="font-mono bg-gray-100 px-1 rounded">calcul.py</span></li>
              <li>Demande à l’utilisateur deux nombres avec <span className="font-mono">input()</span></li>
              <li>Affiche la somme avec <span className="font-mono">print()</span></li>
              <li>Teste ton script dans un terminal ou un notebook en ligne</li>
            </ol>
            <Button className="mt-6 w-full bg-gradient-to-r from-blue-400 to-green-400 text-white font-bold py-2 rounded-xl shadow hover:from-blue-500 hover:to-green-500 transition-all">
              Voir les ressources (exemples + vidéo)
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 