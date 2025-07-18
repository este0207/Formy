import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";

export default function UnityProjectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 py-12 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link href="/">
          <Button variant="ghost" className="flex items-center gap-2 text-gray-700 hover:bg-blue-100/60 rounded-xl mb-2">
            <ArrowLeft className="w-4 h-4" /> Retour aux projets
          </Button>
        </Link>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 drop-shadow-lg mb-2">
          Découverte de Unity
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Apprends les bases du moteur de jeu Unity en réalisant un petit jeu 2D.
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          <Badge className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
          <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée estimée : 45 min</Badge>
          <Badge className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">Logiciel requis : Unity Hub</Badge>
        </div>

        <Card className="rounded-3xl shadow-xl bg-white/90 border-0">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-2xl font-bold mb-2">📘 1. C'est quoi Unity ?</h2>
            <p className="text-base text-gray-700">
              Unity est un moteur de jeu multiplateforme utilisé pour créer des jeux 2D et 3D. Il est populaire
              pour son interface visuelle, sa flexibilité et sa grande communauté.
            </p>

            <h2 className="text-2xl font-bold mb-2">💡 2. Pourquoi apprendre Unity ?</h2>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
              <li>Créer des jeux facilement sans tout coder à la main</li>
              <li>Utilisé dans le jeu vidéo, la réalité virtuelle, les applis interactives</li>
              <li>Gratuit pour les petits projets</li>
            </ul>

            <h2 className="text-2xl font-bold mb-2">🚀 3. Ton premier projet : un jeu 2D simple</h2>
            <p className="text-base text-gray-700">
              Tu vas créer un petit jeu 2D où un personnage peut se déplacer avec les touches du clavier.
            </p>

            <h3 className="font-semibold text-lg">Étapes :</h3>
            <ol className="list-decimal pl-6 space-y-1 text-base text-gray-700">
              <li>Télécharge Unity Hub et installe Unity (version LTS recommandée)</li>
              <li>Crée un nouveau projet 2D</li>
              <li>Ajoute un sprite (personnage)</li>
              <li>Ajoute un script pour les contrôles clavier (C#)</li>
              <li>Lance le jeu dans l’éditeur</li>
            </ol>

            <Button className="mt-6 w-full bg-gradient-to-r from-purple-500 to-blue-400 text-white font-bold py-2 rounded-xl shadow hover:from-purple-600 hover:to-blue-500 transition-all">
              Voir les ressources (vidéo + code exemple)
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
