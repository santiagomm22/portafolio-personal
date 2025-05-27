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
      {/* Contenedor para las 3 cards */}
      <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card pequeña 1 */}
        <Card className="bg-violet-900 border-none text-white  text-white">
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

        {/* Card  2  */}
        <Card
          className="border-none text-white"
          style={{ background: "rgb(40, 39, 45)" }}
        >
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

        {/* Card pequeña 3 */}
        <Card className="bg-violet-900 border-none text-white  text-white">
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
  );
};

export default CardsLayout;
