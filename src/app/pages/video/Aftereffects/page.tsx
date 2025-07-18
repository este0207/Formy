import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";

export default function AfterEffectsProjectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-12 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link href="/">
          <Button variant="ghost" className="flex items-center gap-2 text-gray-700 hover:bg-blue-100/60 rounded-xl mb-2">
            <ArrowLeft className="w-4 h-4" /> Retour aux projets
          </Button>
        </Link>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 drop-shadow-lg mb-2">
          Découverte d’After Effects
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Apprends à animer et créer des effets spéciaux avec After Effects !
        </p>
        <div className="flex flex-wrap gap-3 mb-6">
          <Badge className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
          <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée estimée : 35 min</Badge>
          <Badge className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-medium">Logiciel : After Effects</Badge>
        </div>
        <Card className="rounded-3xl shadow-xl bg-white/90 border-0">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-2xl font-bold mb-2">🔵 1. C'est quoi After Effects ?</h2>
            <p className="text-base text-gray-700">
              After Effects est un logiciel d’animation et d’effets spéciaux vidéo utilisé dans le cinéma, la pub et le web.
            </p>
            <h2 className="text-2xl font-bold mb-2">💡 2. Pourquoi apprendre After Effects ?</h2>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
              <li>Créer des animations et effets visuels impressionnants</li>
              <li>Utilisé dans le motion design, le cinéma, la pub</li>
              <li>Outils puissants et grande communauté</li>
            </ul>
            <h2 className="text-2xl font-bold mb-2">🚀 3. Mini-projet : animer un texte</h2>
            <p className="text-base text-gray-700">
              Tu vas animer un texte (apparition, mouvement, couleur) et exporter la vidéo.
            </p>
            <h3 className="font-semibold text-lg">Étapes :</h3>
            <ol className="list-decimal pl-6 space-y-1 text-base text-gray-700">
              <li>Installe After Effects (version d’essai possible)</li>
              <li>Crée une nouvelle composition</li>
              <li>Ajoute un calque de texte, écris ton message</li>
              <li>Anime le texte (position, opacité, couleur…)</li>
              <li>Exporte l’animation en vidéo</li>
            </ol>
            <Button className="mt-6 w-full bg-gradient-to-r from-blue-400 to-indigo-400 text-white font-bold py-2 rounded-xl shadow hover:from-blue-500 hover:to-indigo-500 transition-all">
              Voir les ressources (tutos + exemples)
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 