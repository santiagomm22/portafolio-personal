import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail } from "lucide-react";

const CardsLayout = () => {
  return (
    <div className="p-6 ">
      <h1 className="text-white text-5xl font-bold mb-6">
        Hola! Soy Santiago, Desarrollador Web
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card grande izquierda - Transparente con borde morado */}
        <Card className="md:col-span-1 md:row-span-2 bg-black/15 backdrop-blur-sm border border-violet-700/50 overflow-hidden">
          <CardHeader className="relative">
            <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 rounded-md">
              <span className="font-bold">#NEW ARRIVALS</span>
            </div>
          </CardHeader>
          <CardContent className="flex items-center justify-center p-0 h-full"></CardContent>
        </Card>

        {/* Card grande derecha - Color zinc-800 */}
        <Card className="md:col-span-2 md:row-span-1 bg-zinc-800 border-none text-white overflow-hidden">
          <CardContent className="p-0 h-64">
            <div className="relative h-full">
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-md">
                <span className="font-bold text-white">#COLLECTIONS_23</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contenedor para las 3 cards pequeñas */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card pequeña 1 - Negro con borde morado */}
          <Card className="bg-black border border-violet-700 text-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold">#FAQ</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="inline-block bg-violet-900/50 text-white text-xs px-2 py-1 rounded">
                Popular
              </span>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-gray-400">Have a question?</p>
            </CardFooter>
          </Card>

          {/* Card pequeña 2 - Color morado */}
          <Card className="bg-violet-900 border-none text-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold">#QUALITY</CardTitle>
            </CardHeader>
            <CardContent className="p-0"></CardContent>
          </Card>

          {/* Card pequeña 3 - Gris similar a zinc-800 */}
          <Card className="bg-zinc-800 border-none text-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold">3.650+</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 text-xs">
                See more reviews, exclusive styles & more
              </CardDescription>
            </CardContent>
            <CardFooter className="pt-2">
              <div className="bg-orange-500 p-1 rounded">
                <Mail size={16} className="text-white" />
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardsLayout;
