import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";

export default function ReactProjectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-100 py-12 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link href="/">
          <Button variant="ghost" className="flex items-center gap-2 text-gray-700 hover:bg-cyan-100/60 rounded-xl mb-2">
            <ArrowLeft className="w-4 h-4" /> Retour aux projets
          </Button>
        </Link>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 drop-shadow-lg mb-2">
          Découverte de React
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Apprends à créer des interfaces modernes et dynamiques avec React !
        </p>
        <div className="flex flex-wrap gap-3 mb-6">
          <Badge className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
          <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée estimée : 50 min</Badge>
          <Badge className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full font-medium">Outil : CodeSandbox ou local</Badge>
        </div>
        <Card className="rounded-3xl shadow-xl bg-white/90 border-0">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-2xl font-bold mb-2">⚛️ 1. C'est quoi React ?</h2>
            <p className="text-base text-gray-700">
              React est une bibliothèque JavaScript pour créer des interfaces utilisateur interactives et réactives.
            </p>
            <h2 className="text-2xl font-bold mb-2">💡 2. Pourquoi apprendre React ?</h2>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
              <li>Créer des applications web modernes et performantes</li>
              <li>Très utilisé dans le monde professionnel</li>
              <li>Composants réutilisables et code structuré</li>
            </ul>
            <h2 className="text-2xl font-bold mb-2">🚀 3. Mini-projet : un compteur interactif</h2>
            <p className="text-base text-gray-700">
              Tu vas créer un composant React qui affiche un nombre et deux boutons pour l’incrémenter/décrémenter.
            </p>
            <h3 className="font-semibold text-lg">Étapes :</h3>
            <ol className="list-decimal pl-6 space-y-1 text-base text-gray-700">
              <li>Crée un projet React (CodeSandbox ou local)</li>
              <li>Crée un composant <span className="font-mono bg-gray-100 px-1 rounded">Counter</span></li>
              <li>Ajoute un état (useState) pour le nombre</li>
              <li>Ajoute deux boutons pour +1 et -1</li>
              <li>Teste le composant dans l’app</li>
            </ol>
            <Button className="mt-6 w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-2 rounded-xl shadow hover:from-cyan-500 hover:to-blue-600 transition-all">
              Voir les ressources (exemples + vidéo)
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 