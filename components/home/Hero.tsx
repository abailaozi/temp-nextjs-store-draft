import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <section className="grid grid-cols-2 gap-24 items-center">
    <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
            We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
        Zhejiang Hongming Tea Machinery Complete Technology Co., Ltd. is a professional supplier of complete tea processing equipment and integrated technical solutions, integrating research and development, production, sales, and service. The company boasts top-tier technical experts, an outstanding team of employees, advanced manufacturing equipment, and comprehensive testing methods. It has been dedicated to the research and development of key tea processing equipment and complete technology solutions.
        </p>
        <Button asChild size='lg' className="mt-10">
           <Link href='/products'>Our Products</Link>
        </Button>
    </div>
    <HeroCarousel />
    </section>
  );
};

export default Hero