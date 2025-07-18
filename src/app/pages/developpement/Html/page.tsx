import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { ArrowLeft, Star } from "lucide-react";
import Link from "next/link";

export default function HtmlProjectPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <Link href="/">
        <Button variant="ghost" className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Retour aux projets
        </Button>
      </Link>

      <h1 className="text-3xl font-bold">Découverte du HTML</h1>
      <p className="text-muted-foreground text-sm">
        Apprends les bases du langage HTML pour créer tes premières pages web.
      </p>

      <div className="flex flex-wrap gap-2">
        <Badge>Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
        <Badge>Durée estimée : 30 min</Badge>
        <Badge>Logiciel requis : Navigateur web, éditeur de texte</Badge>
      </div>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">📘 1. C'est quoi le HTML ?</h2>
          <p>
            Le HTML (HyperText Markup Language) est le langage de base pour créer des pages web. Il permet de structurer le contenu (titres, paragraphes, images, liens, etc.).
          </p>

          <h2 className="text-xl font-semibold">💡 2. Pourquoi apprendre le HTML ?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Créer des sites web et des blogs</li>
            <li>Comprendre la structure des pages internet</li>
            <li>Base indispensable pour apprendre CSS et JavaScript</li>
          </ul>

          <h2 className="text-xl font-semibold">🚀 3. Ton premier projet : une page web simple</h2>
          <p>
            Tu vas créer une page web avec un titre, un paragraphe et une image.
          </p>

          <h3 className="font-semibold">Étapes :</h3>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Ouvre ton éditeur de texte (ex : VS Code, Sublime Text...)</li>
            <li>Crée un nouveau fichier nommé <code>index.html</code></li>
            <li>Ajoute la structure de base du HTML :</li>
          </ol>
          <pre className="bg-muted p-2 rounded text-sm overflow-x-auto">
{`<!DOCTYPE html>
<html>
  <head>
    <title>Ma première page HTML</title>
  </head>
  <body>
    <h1>Bienvenue sur ma page !</h1>
    <p>Ceci est mon premier site web en HTML.</p>
    <img src="https://via.placeholder.com/150" alt="Image exemple" />
  </body>
</html>`}
          </pre>
          <ol className="list-decimal pl-6 space-y-1" start={4}>
            <li>Enregistre le fichier et ouvre-le dans ton navigateur</li>
            <li>Admire le résultat !</li>
          </ol>

          <Button className="mt-4">Voir les ressources (vidéo + exemples de code)</Button>
        </CardContent>
      </Card>
    </div>
  );
}
