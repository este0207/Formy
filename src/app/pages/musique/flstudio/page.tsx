import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";

export default function FlstudioProjectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-100 py-12 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link href="/pages/musique">
          <Button variant="ghost" className="flex items-center gap-2 text-gray-700 hover:bg-green-100/60 rounded-xl mb-2">
            <ArrowLeft className="w-4 h-4" /> Retour aux projets
          </Button>
        </Link>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 drop-shadow-lg mb-2">
          Découverte de FL Studio
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Compose ton premier beat de musique électronique avec FL Studio !
        </p>
        <div className="flex flex-wrap gap-3 mb-6">
          <Badge className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
          <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée estimée : 1h</Badge>
          <Badge className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">Logiciel : FL Studio (démo possible)</Badge>
        </div>
        <Card className="rounded-3xl shadow-xl bg-white/90 border-0">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-2xl font-bold mb-2">🎹 1. C'est quoi FL Studio ?</h2>
            <p className="text-base text-gray-700">
              FL Studio est un logiciel de production musicale très populaire pour créer des beats, des mélodies et mixer des morceaux.
            </p>
            <h2 className="text-2xl font-bold mb-2">💡 2. Pourquoi apprendre FL Studio ?</h2>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-700">
              <li>Créer tes propres musiques électroniques</li>
              <li>Interface intuitive et puissante</li>
              <li>Utilisé par de nombreux artistes pros</li>
            </ul>
            <h2 className="text-2xl font-bold mb-2">🚀 3. Mini-projet : ton premier beat</h2>
            <p className="text-base text-gray-700">
              Tu vas composer un beat simple (batterie, basse, mélodie) en utilisant les patterns et la playlist.
            </p>
            <h3 className="font-semibold text-lg">Étapes :</h3>
            <ol className="list-decimal pl-6 space-y-1 text-base text-gray-700">
              <li>Télécharge et installe FL Studio (version démo possible)</li>
              <li>Découvre l’interface (Channel Rack, Playlist, Mixer)</li>
              <li>Crée un pattern de batterie (kick, snare, hi-hat)</li>
              <li>Ajoute une basse et une mélodie</li>
              <li>Arrange le tout dans la Playlist et exporte ton morceau</li>
            </ol>
            <Button className="mt-6 w-full bg-gradient-to-r from-green-400 to-blue-400 text-white font-bold py-2 rounded-xl shadow hover:from-green-500 hover:to-blue-500 transition-all">
              Voir les ressources (tutos + exemples)
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
