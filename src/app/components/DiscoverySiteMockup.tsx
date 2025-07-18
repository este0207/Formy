'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
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
  const musique = page + "/musique";
  const router = useRouter();

  // Suggestions de cours (nom + chemin)
  const suggestions = [
    { label: "Unity", path: dev + "/Unity", icon: "/unity.svg" },
    { label: "HTML", path: dev + "/Html", icon: "/html5.svg" },
    { label: "CSS", path: dev + "/Css", icon: "/css3.svg" },
    { label: "JavaScript", path: dev + "/Javascript", icon: "/javascript.svg" },
    { label: "Python", path: dev + "/Python", icon: "/python.svg" },
    { label: "React", path: dev + "/React", icon: "/react.svg" },
    { label: "Git", path: dev + "/Git", icon: "/git.svg" },
    { label: "FL Studio", path: musique + "/flstudio", icon: "/flstudio.svg" },
    { label: "Ableton Live", path: musique + "/ableton", icon: "/ableton.svg" },
    { label: "Blender", path: "/pages/3D/Blender", icon: "/blender.svg" },
    { label: "Premiere Pro", path: "/pages/video/Premierepro", icon: "/premiere-pro.svg" },
    { label: "After Effects", path: "/pages/video/Aftereffects", icon: "/after-effect.svg" },
  ];

  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filtered = search.length > 0
    ? suggestions.filter(s => s.label.toLowerCase().includes(search.toLowerCase()))
    : [];

  function handleSelect(path: string) {
    setSearch("");
    setShowSuggestions(false);
    router.push(path);
  }

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
            placeholder="Rechercher un domaine (ex: Unity, Guitare, Blender)"
            className="pl-12 py-3 rounded-2xl shadow focus:ring-2 focus:ring-purple-400 border-2 border-gray-200 bg-white"
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => search && setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 120)}
            autoComplete="off"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">🔍</span>
          {showSuggestions && filtered.length > 0 && (
            <ul className="absolute left-0 right-0 mt-2 bg-white/95 border border-gray-200 rounded-xl shadow-lg z-20 text-left max-h-60 overflow-auto animate-fade-in">
              {filtered.map(s => (
                <li
                  key={s.label}
                  className="px-4 py-2 cursor-pointer hover:bg-purple-100 transition-colors rounded-xl flex items-center gap-3"
                  onMouseDown={() => handleSelect(s.path)}
                >
                  <img src={s.icon} alt="" className="w-5 h-5 mr-2" />
                  {s.label}
                </li>
              ))}
            </ul>
          )}
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
                    <img src="/unity.svg" alt="Unity" className="w-8 h-8" />
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
                    <img src="/html5.svg" alt="HTML & CSS" className="w-8 h-8" />
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800">HTML</h2>
                </div>
                <p className="text-base text-gray-600 mt-1 flex-1">
                  Apprends à créer une page web simple avec du HTML.
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

            <Card className="rounded-3xl shadow-xl hover:scale-[1.025] hover:shadow-2xl transition-transform bg-white/90 border-0">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block bg-gradient-to-r from-pink-400 to-yellow-400 p-2 rounded-full shadow">
                    <img src="/css3.svg" alt="CSS" className="w-8 h-8" />
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800">CSS</h2>
                </div>
                <p className="text-base text-gray-600 mt-1 flex-1">
                  Apprends à styliser ton site web avec du CSS.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée : 30 min</Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
                </div>
                <Link href={dev + "/Css"} passHref>
                  <Button asChild className="mt-6 w-full bg-gradient-to-r from-purple-500 to-blue-400 text-white font-bold py-2 rounded-xl shadow hover:from-purple-600 hover:to-blue-500 transition-all">
                    <span>Voir le projet</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* JavaScript */}
            <Card className="rounded-3xl shadow-xl hover:scale-[1.025] hover:shadow-2xl transition-transform bg-white/90 border-0">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block bg-gradient-to-r from-yellow-300 to-yellow-500 p-2 rounded-full shadow">
                    <img src="/javascript.svg" alt="JavaScript" className="w-8 h-8" />
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800">JavaScript</h2>
                </div>
                <p className="text-base text-gray-600 mt-1 flex-1">
                  Découvre la programmation web interactive avec JavaScript.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée : 40 min</Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
                </div>
                <Link href={dev + "/Javascript"} passHref>
                  <Button asChild className="mt-6 w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-bold py-2 rounded-xl shadow hover:from-yellow-500 hover:to-yellow-700 transition-all">
                    <span>Voir le projet</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Python */}
            <Card className="rounded-3xl shadow-xl hover:scale-[1.025] hover:shadow-2xl transition-transform bg-white/90 border-0">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block bg-gradient-to-r from-blue-400 to-green-400 p-2 rounded-full shadow">
                    <img src="/python.svg" alt="Python" className="w-8 h-8" />
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800">Python</h2>
                </div>
                <p className="text-base text-gray-600 mt-1 flex-1">
                  Apprends les bases de la programmation avec Python, le langage polyvalent.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée : 35 min</Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
                </div>
                <Link href={dev + "/Python"} passHref>
                  <Button asChild className="mt-6 w-full bg-gradient-to-r from-blue-400 to-green-400 text-white font-bold py-2 rounded-xl shadow hover:from-blue-500 hover:to-green-500 transition-all">
                    <span>Voir le projet</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* React */}
            <Card className="rounded-3xl shadow-xl hover:scale-[1.025] hover:shadow-2xl transition-transform bg-white/90 border-0">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 p-2 rounded-full shadow">
                    <img src="/react.svg" alt="React" className="w-8 h-8" />
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800">React</h2>
                </div>
                <p className="text-base text-gray-600 mt-1 flex-1">
                  Initie-toi au développement d’interfaces modernes avec React.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée : 50 min</Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
                </div>
                <Link href={dev + "/React"} passHref>
                  <Button asChild className="mt-6 w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold py-2 rounded-xl shadow hover:from-cyan-500 hover:to-blue-600 transition-all">
                    <span>Voir le projet</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Git */}
            <Card className="rounded-3xl shadow-xl hover:scale-[1.025] hover:shadow-2xl transition-transform bg-white/90 border-0">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block bg-gradient-to-r from-orange-400 to-red-400 p-2 rounded-full shadow">
                    <img src="/git.svg" alt="Git" className="w-8 h-8" />
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800">Git</h2>
                </div>
                <p className="text-base text-gray-600 mt-1 flex-1">
                  Découvre le versioning et la collaboration avec Git.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée : 25 min</Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
                </div>
                <Link href={dev + "/Git"} passHref>
                  <Button asChild className="mt-6 w-full bg-gradient-to-r from-orange-400 to-red-400 text-white font-bold py-2 rounded-xl shadow hover:from-orange-500 hover:to-red-500 transition-all">
                    <span>Voir le projet</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="musique">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {/* FL Studio */}
            <Card className="rounded-3xl shadow-xl hover:scale-[1.025] hover:shadow-2xl transition-transform bg-white/90 border-0">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block bg-gradient-to-r from-green-400 to-blue-400 p-2 rounded-full shadow">
                    <img src="/flstudio.svg" alt="FL Studio" className="w-8 h-8" />
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
                <Link href={musique + "/flstudio"} passHref>
                  <Button asChild className="mt-6 w-full bg-gradient-to-r from-green-400 to-blue-400 text-white font-bold py-2 rounded-xl shadow hover:from-green-500 hover:to-blue-500 transition-all">
                    <span>Voir le projet</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Ableton Live */}
            <Card className="rounded-3xl shadow-xl hover:scale-[1.025] hover:shadow-2xl transition-transform bg-white/90 border-0">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block bg-gradient-to-r from-yellow-400 to-gray-400 p-2 rounded-full shadow">
                    <img src="/ableton.svg" alt="Ableton Live" className="w-8 h-8" />
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800">Ableton Live</h2>
                </div>
                <p className="text-base text-gray-600 mt-1 flex-1">
                  Apprends à créer des loops et des morceaux avec Ableton Live.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée : 1h</Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
                </div>
                <Link href={musique + "/ableton"} passHref>
                  <Button asChild className="mt-6 w-full bg-gradient-to-r from-yellow-400 to-gray-400 text-white font-bold py-2 rounded-xl shadow hover:from-yellow-500 hover:to-gray-500 transition-all">
                    <span>Voir le projet</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="3d">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {/* Blender */}
            <Card className="rounded-3xl shadow-xl hover:scale-[1.025] hover:shadow-2xl transition-transform bg-white/90 border-0">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block bg-gradient-to-r from-orange-400 to-blue-400 p-2 rounded-full shadow">
                    <img src="/blender.svg" alt="Blender" className="w-8 h-8" />
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800">Blender</h2>
                </div>
                <p className="text-base text-gray-600 mt-1 flex-1">
                  Découvre la création 3D libre avec Blender (modélisation, rendu, animation).
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée : 45 min</Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
                </div>
                <Link href="/pages/3d/Blender" passHref>
                  <Button asChild className="mt-6 w-full bg-gradient-to-r from-orange-400 to-blue-400 text-white font-bold py-2 rounded-xl shadow hover:from-orange-500 hover:to-blue-500 transition-all">
                    <span>Voir le projet</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="video">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {/* Premiere Pro */}
            <Card className="rounded-3xl shadow-xl hover:scale-[1.025] hover:shadow-2xl transition-transform bg-white/90 border-0">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block bg-gradient-to-r from-purple-400 to-blue-400 p-2 rounded-full shadow">
                    <img src="/premiere-pro.svg" alt="Premiere Pro" className="w-8 h-8" />
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800">Premiere Pro</h2>
                </div>
                <p className="text-base text-gray-600 mt-1 flex-1">
                  Apprends le montage vidéo professionnel avec Premiere Pro.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée : 40 min</Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
                </div>
                <Link href="/pages/video/Premierepro" passHref>
                  <Button asChild className="mt-6 w-full bg-gradient-to-r from-purple-400 to-blue-400 text-white font-bold py-2 rounded-xl shadow hover:from-purple-500 hover:to-blue-500 transition-all">
                    <span>Voir le projet</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* After Effects */}
            <Card className="rounded-3xl shadow-xl hover:scale-[1.025] hover:shadow-2xl transition-transform bg-white/90 border-0">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block bg-gradient-to-r from-blue-400 to-indigo-400 p-2 rounded-full shadow">
                    <img src="/after-effect.svg" alt="After Effects" className="w-8 h-8" />
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800">After Effects</h2>
                </div>
                <p className="text-base text-gray-600 mt-1 flex-1">
                  Découvre l’animation et les effets spéciaux vidéo avec After Effects.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée : 35 min</Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
                </div>
                <Link href="/pages/video/Aftereffects" passHref>
                  <Button asChild className="mt-6 w-full bg-gradient-to-r from-blue-400 to-indigo-400 text-white font-bold py-2 rounded-xl shadow hover:from-blue-500 hover:to-indigo-500 transition-all">
                    <span>Voir le projet</span>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="autres">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {/* Photographie */}
            <Card className="rounded-3xl shadow-xl hover:scale-[1.025] hover:shadow-2xl transition-transform bg-white/90 border-0">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block bg-gradient-to-r from-yellow-400 to-pink-400 p-2 rounded-full shadow">
                    <img src="/file.svg" alt="Photographie" className="w-8 h-8" />
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800">Photographie</h2>
                </div>
                <p className="text-base text-gray-600 mt-1 flex-1">
                  Apprends à capturer et retoucher de belles photos.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée : 30 min</Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
                </div>
                <Button className="mt-6 w-full bg-gradient-to-r from-yellow-400 to-pink-400 text-white font-bold py-2 rounded-xl shadow hover:from-yellow-500 hover:to-pink-500 transition-all">Voir le projet</Button>
              </CardContent>
            </Card>

            {/* Productivité */}
            <Card className="rounded-3xl shadow-xl hover:scale-[1.025] hover:shadow-2xl transition-transform bg-white/90 border-0">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block bg-gradient-to-r from-green-400 to-blue-400 p-2 rounded-full shadow">
                    <img src="/next.svg" alt="Productivité" className="w-8 h-8" />
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800">Productivité</h2>
                </div>
                <p className="text-base text-gray-600 mt-1 flex-1">
                  Découvre des outils et méthodes pour mieux t’organiser.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée : 20 min</Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
                </div>
                <Button className="mt-6 w-full bg-gradient-to-r from-green-400 to-blue-400 text-white font-bold py-2 rounded-xl shadow hover:from-green-500 hover:to-blue-500 transition-all">Voir le projet</Button>
              </CardContent>
            </Card>

            {/* Intelligence Artificielle */}
            <Card className="rounded-3xl shadow-xl hover:scale-[1.025] hover:shadow-2xl transition-transform bg-white/90 border-0">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block bg-gradient-to-r from-purple-400 to-pink-400 p-2 rounded-full shadow">
                    <img src="/file.svg" alt="IA" className="w-8 h-8" />
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800">Intelligence Artificielle</h2>
                </div>
                <p className="text-base text-gray-600 mt-1 flex-1">
                  Initie-toi aux bases de l’IA et découvre ses applications.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée : 40 min</Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
                </div>
                <Button className="mt-6 w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white font-bold py-2 rounded-xl shadow hover:from-purple-500 hover:to-pink-500 transition-all">Voir le projet</Button>
              </CardContent>
            </Card>

            {/* Design Graphique */}
            <Card className="rounded-3xl shadow-xl hover:scale-[1.025] hover:shadow-2xl transition-transform bg-white/90 border-0">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block bg-gradient-to-r from-blue-400 to-indigo-400 p-2 rounded-full shadow">
                    <img src="/photoshop.svg" alt="Design Graphique" className="w-8 h-8" />
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800">Design Graphique</h2>
                </div>
                <p className="text-base text-gray-600 mt-1 flex-1">
                  Découvre les bases du graphisme et de la retouche avec Photoshop.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <Badge className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Durée : 35 min</Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">Niveau : <Star className="inline w-4 h-4 text-yellow-500" /></Badge>
                </div>
                <Button className="mt-6 w-full bg-gradient-to-r from-blue-400 to-indigo-400 text-white font-bold py-2 rounded-xl shadow hover:from-blue-500 hover:to-indigo-500 transition-all">Voir le projet</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
