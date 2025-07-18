import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Link from "next/link";

export default function DiscoverySiteMockup() {
  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Découvre n'importe quel domaine</h1>
        <p className="text-muted-foreground mt-2">
          Un projet simple pour débuter dans chaque discipline — développement, musique, 3D, et plus.
        </p>
        <div className="mt-4 max-w-md mx-auto">
          <Input placeholder="🔍 Rechercher un domaine (ex: Unity, Guitare, Blender)" />
        </div>
      </header>

      <Tabs defaultValue="dev" className="w-full">
        <TabsList className="flex justify-center flex-wrap gap-2">
          <TabsTrigger value="dev">Développement</TabsTrigger>
          <TabsTrigger value="musique">Musique</TabsTrigger>
          <TabsTrigger value="3d">3D / Visuel</TabsTrigger>
          <TabsTrigger value="video">Vidéo</TabsTrigger>
          <TabsTrigger value="autres">Autres</TabsTrigger>
        </TabsList>

        <TabsContent value="dev">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold">Unity</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Crée ton premier jeu 2D et découvre les bases du moteur Unity.
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <Badge>Durée : 45 min</Badge>
                  <Badge variant="secondary">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
                </div>
                <Link href="/Unity" passHref>
                  <Button asChild className="mt-4 w-full">
                    <span>Voir le projet</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold">HTML & CSS</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Apprends à créer une page web simple avec du HTML et du CSS.
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <Badge>Durée : 30 min</Badge>
                  <Badge variant="secondary">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
                </div>
                <Button className="mt-4 w-full">Voir le projet</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="musique">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold">FL Studio</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Compose ton premier beat de musique électronique.
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <Badge>Durée : 1h</Badge>
                  <Badge variant="secondary">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
                </div>
                <Button className="mt-4 w-full">Voir le projet</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

      </Tabs>
    </div>
  );
}
