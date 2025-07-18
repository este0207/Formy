import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";


export default function UnityProjectPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <Link href="/">
      <Button variant="ghost" className="flex items-center gap-2">
        <ArrowLeft className="w-4 h-4" /> Retour aux projets
      </Button>
      </Link>

      <h1 className="text-3xl font-bold">Découverte de Unity</h1>
      <p className="text-muted-foreground text-sm">
        Apprends les bases du moteur de jeu Unity en réalisant un petit jeu 2D.
      </p>

      <div className="flex flex-wrap gap-2">
        <Badge>Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
        <Badge>Durée estimée : 45 min</Badge>
        <Badge>Logiciel requis : Unity Hub</Badge>
      </div>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">📘 1. C'est quoi Unity ?</h2>
          <p>
            Unity est un moteur de jeu multiplateforme utilisé pour créer des jeux 2D et 3D. Il est populaire
            pour son interface visuelle, sa flexibilité et sa grande communauté.
          </p>

          <h2 className="text-xl font-semibold">💡 2. Pourquoi apprendre Unity ?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Créer des jeux facilement sans tout coder à la main</li>
            <li>Utilisé dans le jeu vidéo, la réalité virtuelle, les applis interactives</li>
            <li>Gratuit pour les petits projets</li>
          </ul>

          <h2 className="text-xl font-semibold">🚀 3. Ton premier projet : un jeu 2D simple</h2>
          <p>
            Tu vas créer un petit jeu 2D où un personnage peut se déplacer avec les touches du clavier.
          </p>

          <h3 className="font-semibold">Étapes :</h3>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Télécharge Unity Hub et installe Unity (version LTS recommandée)</li>
            <li>Crée un nouveau projet 2D</li>
            <li>Ajoute un sprite (personnage)</li>
            <li>Ajoute un script pour les contrôles clavier (C#)</li>
            <li>Lance le jeu dans l’éditeur</li>
          </ol>

          <Button className="mt-4">Voir les ressources (vidéo + code exemple)</Button>
        </CardContent>
      </Card>
    </div>
  );
}
