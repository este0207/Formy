import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";

export default function JavascriptProjectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-12 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link href="/">
          <Button variant="ghost" className="flex items-center gap-2 text-gray-700 hover:bg-yellow-100/60 rounded-xl mb-2">
            <ArrowLeft className="w-4 h-4" /> Retour aux projets
          </Button>
        </Link>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 drop-shadow-lg mb-2">
          Découverte de JavaScript
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Apprends à rendre tes pages web interactives grâce à JavaScript !
        </p>
        <div className="flex flex-wrap gap-3 mb-6">
          <Badge className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
          <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée estimée : 40 min</Badge>
          <Badge className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full font-medium">Outil : Navigateur web</Badge>
        </div>
        <Card className="rounded-3xl shadow-xl bg-white/90 border-0">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-2xl font-bold mb-2">🟨 1. C'est quoi JavaScript ?</h2>
            <p className="text-base text-gray-700">
              JavaScript est le langage qui permet de rendre les pages web dynamiques et interactives (animations, boutons, formulaires, etc.).
            </p>
            <h2 className="text-2xl font-bold mb-2">💡 2. Pourquoi apprendre JavaScript ?</h2>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
              <li>Créer des sites web modernes et interactifs</li>
              <li>Langage incontournable du web</li>
              <li>Utilisé aussi pour le back-end (Node.js)</li>
            </ul>
            <h2 className="text-2xl font-bold mb-2">🚀 3. Mini-projet : bouton interactif</h2>
            <p className="text-base text-gray-700">
              Tu vas créer un bouton qui change de couleur quand on clique dessus !
            </p>
            <h3 className="font-semibold text-lg">Étapes :</h3>
            <ol className="list-decimal pl-6 space-y-1 text-base text-gray-700">
              <li>Crée un fichier <span className="font-mono bg-gray-100 px-1 rounded">index.html</span> et un fichier <span className="font-mono bg-gray-100 px-1 rounded">script.js</span></li>
              <li>Ajoute un bouton dans le HTML</li>
              <li>Dans <span className="font-mono">script.js</span>, écris le code pour changer la couleur du bouton au clic</li>
              <li>Relie le JS à ton HTML et teste dans le navigateur</li>
            </ol>
            <Button className="mt-6 w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold py-2 rounded-xl shadow hover:from-yellow-500 hover:to-yellow-700 transition-all">
              Voir les ressources (exemples + vidéo)
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 