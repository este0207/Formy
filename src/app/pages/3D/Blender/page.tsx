import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";

export default function BlenderProjectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-100 py-12 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link href="/">
          <Button variant="ghost" className="flex items-center gap-2 text-gray-700 hover:bg-orange-100/60 rounded-xl mb-2">
            <ArrowLeft className="w-4 h-4" /> Retour aux projets
          </Button>
        </Link>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 drop-shadow-lg mb-2">
          Découverte de Blender
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Apprends la 3D libre et puissante avec Blender !
        </p>
        <div className="flex flex-wrap gap-3 mb-6">
          <Badge className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
          <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée estimée : 45 min</Badge>
          <Badge className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">Logiciel : Blender</Badge>
        </div>
        <Card className="rounded-3xl shadow-xl bg-white/90 border-0">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-2xl font-bold mb-2">🟠 1. C'est quoi Blender ?</h2>
            <p className="text-base text-gray-700">
              Blender est un logiciel libre et gratuit pour la modélisation, l’animation et le rendu 3D.
            </p>
            <h2 className="text-2xl font-bold mb-2">💡 2. Pourquoi apprendre Blender ?</h2>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
              <li>Créer des images et animations 3D</li>
              <li>Utilisé dans le cinéma, le jeu vidéo, l’illustration</li>
              <li>Communauté active et ressources gratuites</li>
            </ul>
            <h2 className="text-2xl font-bold mb-2">🚀 3. Mini-projet : modéliser un objet simple</h2>
            <p className="text-base text-gray-700">
              Tu vas modéliser une tasse en 3D, ajouter des couleurs et faire un rendu.
            </p>
            <h3 className="font-semibold text-lg">Étapes :</h3>
            <ol className="list-decimal pl-6 space-y-1 text-base text-gray-700">
              <li>Télécharge et installe Blender</li>
              <li>Découvre l’interface (viewport, outils, navigation)</li>
              <li>Ajoute un cylindre, extrude pour faire la tasse, ajoute une anse</li>
              <li>Ajoute des matériaux/couleurs</li>
              <li>Fais un rendu de ton objet</li>
            </ol>
            <Button className="mt-6 w-full bg-gradient-to-r from-orange-400 to-blue-400 text-white font-bold py-2 rounded-xl shadow hover:from-orange-500 hover:to-blue-500 transition-all">
              Voir les ressources (tutos + exemples)
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 