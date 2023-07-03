"use client";

// nextjs imports
import Link from "next/link";

// custom components imports
import InfoCard from "@/components/InfoCard";

export default function Home() {
  return (
    <>
      <div className="bg-chalk-background pt-4">
        <main className="px-2 container max-w-5xl mx-auto">
          <div className="my-2">
            <h2 className="text-chalk-primary">Common Components</h2>
            <InfoCard />
          </div>

          <h1 className="text-chalk-white">Main heading</h1>
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
              numquam, voluptate eligendi ea provident est, obcaecati dicta
              earum amet corporis fugit? Molestias voluptates dolore, sequi ad
              soluta tenetur deleniti quidem corporis laboriosam maiores aliquid
              amet nam fugit consectetur tempora iusto voluptatem tempore
              mollitia labore voluptatibus, unde repellat sunt.
            </p>
            <Link href="/buy-gold" className="text-blue-700 dark:text-blue-400">
              Buy some gold
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
