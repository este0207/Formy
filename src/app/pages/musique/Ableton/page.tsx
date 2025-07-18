import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";

export default function AbletonProjectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-gray-200 py-12 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link href="/pages/musique">
          <Button variant="ghost" className="flex items-center gap-2 text-gray-700 hover:bg-yellow-100/60 rounded-xl mb-2">
            <ArrowLeft className="w-4 h-4" /> Retour aux projets
          </Button>
        </Link>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 drop-shadow-lg mb-2">
          Découverte d’Ableton Live
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Apprends à créer des loops et des morceaux avec Ableton Live !
        </p>
        <div className="flex flex-wrap gap-3 mb-6">
          <Badge className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
          <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée estimée : 1h</Badge>
          <Badge className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full font-medium">Logiciel : Ableton Live (démo possible)</Badge>
        </div>
        <Card className="rounded-3xl shadow-xl bg-white/90 border-0">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-2xl font-bold mb-2">🎛️ 1. C'est quoi Ableton Live ?</h2>
            <p className="text-base text-gray-700">
              Ableton Live est un logiciel de production musicale très utilisé pour la composition, le live et le mixage.
            </p>
            <h2 className="text-2xl font-bold mb-2">💡 2. Pourquoi apprendre Ableton ?</h2>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
              <li>Créer des loops et des morceaux facilement</li>
              <li>Parfait pour la musique électronique et le live</li>
              <li>Utilisé par de nombreux producteurs pros</li>
            </ul>
            <h2 className="text-2xl font-bold mb-2">🚀 3. Mini-projet : créer un loop</h2>
            <p className="text-base text-gray-700">
              Tu vas créer un loop simple (batterie, basse, synthé) et l’arranger dans la session.
            </p>
            <h3 className="font-semibold text-lg">Étapes :</h3>
            <ol className="list-decimal pl-6 space-y-1 text-base text-gray-700">
              <li>Télécharge et installe Ableton Live (version démo possible)</li>
              <li>Découvre l’interface (Session, Arrangement, Devices)</li>
              <li>Crée un loop de batterie, ajoute une basse et un synthé</li>
              <li>Arrange les clips dans la session</li>
              <li>Exporte ton loop en audio</li>
            </ol>
            <Button className="mt-6 w-full bg-gradient-to-r from-yellow-400 to-gray-400 text-white font-bold py-2 rounded-xl shadow hover:from-yellow-500 hover:to-gray-500 transition-all">
              Voir les ressources (tutos + exemples)
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 