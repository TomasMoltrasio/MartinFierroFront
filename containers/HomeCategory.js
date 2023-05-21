import Category from "components/Category";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

export default function HomeCategory() {
  const category = {
    1: {
      name: "Meganesas",
      image: "/features/mega-chyp.webp",
      link: "/menu/1",
    },
    2: {
      name: "Minutas",
      image: "/features/bife.webp",
      link: "/menu/4",
    },
  };

  return (
    <>
      <div className="flex flex-row flex-wrap items-center justify-between w-full md:w-1/3 h-max gap-4">
        <h2 className="text-lg md:text-2xl font-medium text-center">
          Nuestro menú
        </h2>
        <Link href="/menu">
          <a className="text-base md:text-xl font-bold text-center text-blue-400">
            Accede al menú completo
            <BiRightArrowAlt className="inline-block" />
          </a>
        </Link>
      </div>

      <div className="flex flex-col flex-wrap items-center justify-center w-full md:w-1/3 h-max gap-4">
        <Category
          name={category[1].name}
          image={category[1].image}
          link={category[1].link}
        />
        <Category
          name={category[2].name}
          image={category[2].image}
          link={category[2].link}
        />
      </div>
    </>
  );
}
