"use client";

// react imports
import { useEffect, useState } from "react";

import { useTheme } from "next-themes";
import Link from "next/link";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true));

  return (
    <>
      <main className="px-2 container max-w-2xl mx-auto">
        <h1 className="text-chalk-white">Main heading is in accent color</h1>
        <h2 className="text-chalk-primary bg-charcoal-primary">
          level 2 heading, in primary color
        </h2>
        <p className="text-chalk-secondary bg-charcoal-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illum
          dolores molestias minus delectus, ratione nisi inventore esse quasi
          eum, sequi, odio rem hic blanditiis facere est velit expedita
          veritatis.
        </p>
        <p className="text-skin-accent">some text here</p>
        <div className="border-2 border-white p-2 rounded m-2">
          <h2 className="text-charcoal-primary bg-chalk-primary">
            Another sub heading
          </h2>
          <p className="text-charcoal-secondary bg-chalk-secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor et
            dolores expedita, nihil suscipit ipsa adipisci officiis delectus
            numquam, voluptate eligendi ea provident est, obcaecati dicta earum
            amet corporis fugit? Molestias voluptates dolore, sequi ad soluta
            tenetur deleniti quidem corporis laboriosam maiores aliquid amet nam
            fugit consectetur tempora iusto voluptatem tempore mollitia labore
            voluptatibus, unde repellat sunt.
          </p>
          <Link href="/buy-gold" className="text-blue-700 dark:text-blue-400">
            Buy some gold
          </Link>
        </div>
        <p>Currently selecte theme: {mounted && theme}</p>
        <button
          className="btn"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          Change theme
        </button>
      </main>
    </>
  );
}
