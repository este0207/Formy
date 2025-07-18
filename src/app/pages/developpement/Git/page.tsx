import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";

export default function GitProjectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-100 py-12 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link href="/">
          <Button variant="ghost" className="flex items-center gap-2 text-gray-700 hover:bg-orange-100/60 rounded-xl mb-2">
            <ArrowLeft className="w-4 h-4" /> Retour aux projets
          </Button>
        </Link>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 drop-shadow-lg mb-2">
          Découverte de Git
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Apprends à versionner et collaborer sur tes projets avec Git !
        </p>
        <div className="flex flex-wrap gap-3 mb-6">
          <Badge className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
          <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée estimée : 25 min</Badge>
          <Badge className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">Outil : GitHub ou local</Badge>
        </div>
        <Card className="rounded-3xl shadow-xl bg-white/90 border-0">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-2xl font-bold mb-2">🔗 1. C'est quoi Git ?</h2>
            <p className="text-base text-gray-700">
              Git est un outil de gestion de versions qui permet de sauvegarder, partager et collaborer sur du code.
            </p>
            <h2 className="text-2xl font-bold mb-2">💡 2. Pourquoi apprendre Git ?</h2>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
              <li>Travailler à plusieurs sur un même projet</li>
              <li>Garder l’historique de ses modifications</li>
              <li>Indispensable dans le monde pro</li>
            </ul>
            <h2 className="text-2xl font-bold mb-2">🚀 3. Mini-projet : ton premier dépôt</h2>
            <p className="text-base text-gray-700">
              Tu vas créer un dépôt Git, faire un commit et envoyer ton code sur GitHub.
            </p>
            <h3 className="font-semibold text-lg">Étapes :</h3>
            <ol className="list-decimal pl-6 space-y-1 text-base text-gray-700">
              <li>Installe Git sur ton ordi (ou utilise GitHub Desktop)</li>
              <li>Initialise un dépôt avec <span className="font-mono bg-gray-100 px-1 rounded">git init</span></li>
              <li>Ajoute un fichier, fais un commit (<span className="font-mono">git add .</span> puis <span className="font-mono">git commit</span>)</li>
              <li>Crée un repo sur GitHub et pousse ton code (<span className="font-mono">git remote add origin ...</span> puis <span className="font-mono">git push</span>)</li>
            </ol>
            <Button className="mt-6 w-full bg-gradient-to-r from-orange-400 to-red-400 text-white font-bold py-2 rounded-xl shadow hover:from-orange-500 hover:to-red-500 transition-all">
              Voir les ressources (exemples + vidéo)
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 