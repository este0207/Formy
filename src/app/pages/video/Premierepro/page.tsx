import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";

export default function PremiereProProjectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-100 py-12 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link href="/">
          <Button variant="ghost" className="flex items-center gap-2 text-gray-700 hover:bg-purple-100/60 rounded-xl mb-2">
            <ArrowLeft className="w-4 h-4" /> Retour aux projets
          </Button>
        </Link>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 drop-shadow-lg mb-2">
          Découverte de Premiere Pro
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Apprends le montage vidéo professionnel avec Premiere Pro !
        </p>
        <div className="flex flex-wrap gap-3 mb-6">
          <Badge className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
          <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée estimée : 40 min</Badge>
          <Badge className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">Logiciel : Premiere Pro</Badge>
        </div>
        <Card className="rounded-3xl shadow-xl bg-white/90 border-0">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-2xl font-bold mb-2">🟣 1. C'est quoi Premiere Pro ?</h2>
            <p className="text-base text-gray-700">
              Premiere Pro est un logiciel de montage vidéo professionnel utilisé dans le cinéma, la TV et le web.
            </p>
            <h2 className="text-2xl font-bold mb-2">💡 2. Pourquoi apprendre Premiere Pro ?</h2>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
              <li>Monter des vidéos de qualité pro</li>
              <li>Outils puissants et interface intuitive</li>
              <li>Utilisé par de nombreux créateurs et studios</li>
            </ul>
            <h2 className="text-2xl font-bold mb-2">🚀 3. Mini-projet : monter une vidéo simple</h2>
            <p className="text-base text-gray-700">
              Tu vas importer des rushs, couper, ajouter une transition et exporter ta vidéo.
            </p>
            <h3 className="font-semibold text-lg">Étapes :</h3>
            <ol className="list-decimal pl-6 space-y-1 text-base text-gray-700">
              <li>Installe Premiere Pro (version d’essai possible)</li>
              <li>Importe tes vidéos dans le projet</li>
              <li>Découpe les séquences, ajoute une transition</li>
              <li>Ajoute une musique de fond</li>
              <li>Exporte la vidéo finale</li>
            </ol>
            <Button className="mt-6 w-full bg-gradient-to-r from-purple-400 to-blue-400 text-white font-bold py-2 rounded-xl shadow hover:from-purple-500 hover:to-blue-500 transition-all">
              Voir les ressources (tutos + exemples)
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 