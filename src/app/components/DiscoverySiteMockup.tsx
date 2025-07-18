import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/app/components/ui/tabs";
import { Badge } from "@/app/components/ui/badge";
import { Star } from "lucide-react";
import Link from "next/link";

export default function DiscoverySiteMockup() {
  const page = "/pages";
  const dev = page + "/developpement";
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 py-12 px-4 sm:px-8">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 drop-shadow-lg mb-4">
          Découvre n'importe quel domaine
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          Un projet simple pour débuter dans chaque discipline — développement, musique, 3D, et plus.
        </p>
        <div className="mt-4 max-w-lg mx-auto relative">
          <Input
            placeholder="🔍 Rechercher un domaine (ex: Unity, Guitare, Blender)"
            className="pl-12 py-3 rounded-2xl shadow focus:ring-2 focus:ring-purple-400 border-2 border-gray-200 bg-white"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">🔍</span>
        </div>
      </header>

      <Tabs defaultValue="dev" className="w-full">
        <TabsList className="flex justify-center flex-wrap gap-3 bg-white/80 shadow rounded-xl p-2 mb-8">
          <TabsTrigger value="dev" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-400 data-[state=active]:text-white data-[state=active]:shadow-lg px-6 py-2 rounded-lg font-semibold transition-all">Développement</TabsTrigger>
          <TabsTrigger value="musique" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-400 data-[state=active]:text-white data-[state=active]:shadow-lg px-6 py-2 rounded-lg font-semibold transition-all">Musique</TabsTrigger>
          <TabsTrigger value="3d" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-400 data-[state=active]:text-white data-[state=active]:shadow-lg px-6 py-2 rounded-lg font-semibold transition-all">3D / Visuel</TabsTrigger>
          <TabsTrigger value="video" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-400 data-[state=active]:text-white data-[state=active]:shadow-lg px-6 py-2 rounded-lg font-semibold transition-all">Vidéo</TabsTrigger>
          <TabsTrigger value="autres" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-blue-400 data-[state=active]:text-white data-[state=active]:shadow-lg px-6 py-2 rounded-lg font-semibold transition-all">Autres</TabsTrigger>
        </TabsList>

        <TabsContent value="dev">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            <Card className="rounded-3xl shadow-xl hover:scale-[1.025] hover:shadow-2xl transition-transform bg-white/90 border-0">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block bg-gradient-to-r from-purple-400 to-blue-400 p-2 rounded-full shadow">
                    <img src="/globe.svg" alt="Unity" className="w-8 h-8" />
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800">Unity</h2>
                </div>
                <p className="text-base text-gray-600 mt-1 flex-1">
                  Crée ton premier jeu 2D et découvre les bases du moteur Unity.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée : 45 min</Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
                </div>
                <Link href={dev + "/Unity"} passHref>
                  <Button asChild className="mt-6 w-full bg-gradient-to-r from-purple-500 to-blue-400 text-white font-bold py-2 rounded-xl shadow hover:from-purple-600 hover:to-blue-500 transition-all">
                    <span>Voir le projet</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-xl hover:scale-[1.025] hover:shadow-2xl transition-transform bg-white/90 border-0">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block bg-gradient-to-r from-pink-400 to-yellow-400 p-2 rounded-full shadow">
                    <img src="/window.svg" alt="HTML & CSS" className="w-8 h-8" />
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800">HTML & CSS</h2>
                </div>
                <p className="text-base text-gray-600 mt-1 flex-1">
                  Apprends à créer une page web simple avec du HTML et du CSS.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée : 30 min</Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
                </div>
                <Link href={dev + "/Html"} passHref>
                  <Button asChild className="mt-6 w-full bg-gradient-to-r from-purple-500 to-blue-400 text-white font-bold py-2 rounded-xl shadow hover:from-purple-600 hover:to-blue-500 transition-all">
                    <span>Voir le projet</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="musique">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            <Card className="rounded-3xl shadow-xl hover:scale-[1.025] hover:shadow-2xl transition-transform bg-white/90 border-0">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block bg-gradient-to-r from-green-400 to-blue-400 p-2 rounded-full shadow">
                    <img src="/vercel.svg" alt="FL Studio" className="w-8 h-8" />
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800">FL Studio</h2>
                </div>
                <p className="text-base text-gray-600 mt-1 flex-1">
                  Compose ton premier beat de musique électronique.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée : 1h</Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
                </div>
                <Button className="mt-6 w-full bg-gradient-to-r from-purple-500 to-blue-400 text-white font-bold py-2 rounded-xl shadow hover:from-purple-600 hover:to-blue-500 transition-all">Voir le projet</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
