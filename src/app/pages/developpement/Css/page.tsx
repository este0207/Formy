import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";

export default function CssProjectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 py-12 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link href="/pages/developpement/Html">
          <Button variant="ghost" className="flex items-center gap-2 text-gray-700 hover:bg-blue-100/60 rounded-xl mb-2">
            <ArrowLeft className="w-4 h-4" /> Retour aux projets
          </Button>
        </Link>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 drop-shadow-lg mb-2">
          Découverte du CSS
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Apprends à styliser une page web et rends-la belle grâce au CSS !
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          <Badge className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
          <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée estimée : 30 min</Badge>
          <Badge className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-medium">Outil : Navigateur web</Badge>
        </div>

        <Card className="rounded-3xl shadow-xl bg-white/90 border-0">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-2xl font-bold mb-2">🎨 1. C'est quoi le CSS ?</h2>
            <p className="text-base text-gray-700">
              Le CSS (Cascading Style Sheets) permet de styliser et de mettre en forme les pages web : couleurs, polices, espacements, animations…
            </p>

            <h2 className="text-2xl font-bold mb-2">💡 2. Pourquoi apprendre le CSS ?</h2>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
              <li>Personnaliser l’apparence de tes sites web</li>
              <li>Créer des interfaces modernes et responsives</li>
              <li>Indispensable pour tout développeur web</li>
            </ul>

            <h2 className="text-2xl font-bold mb-2">🚀 3. Ton mini-projet : styliser une page web</h2>
            <p className="text-base text-gray-700">
              Tu vas apprendre à donner du style à une page HTML simple : couleurs, polices, boutons, etc.
            </p>

            <h3 className="font-semibold text-lg">Étapes :</h3>
            <ol className="list-decimal pl-6 space-y-1 text-base text-gray-700">
              <li>Crée un fichier <span className="font-mono bg-gray-100 px-1 rounded">index.html</span> et un fichier <span className="font-mono bg-gray-100 px-1 rounded">style.css</span></li>
              <li>Ajoute une structure HTML de base (titre, paragraphe, bouton)</li>
              <li>Relie le fichier CSS à ton HTML</li>
              <li>Change la couleur de fond, la police, et stylise le bouton</li>
              <li>Teste le rendu dans ton navigateur</li>
            </ol>

            <Button className="mt-6 w-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold py-2 rounded-xl shadow hover:from-pink-600 hover:to-yellow-500 transition-all">
              Voir les ressources (exemples + vidéo)
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 