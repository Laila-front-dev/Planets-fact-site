import Container from "@/components/ui/container";
import { notFound } from "next/navigation";
import PlanetInfo from "@/components/ui/planetInfo";
import Subtitle from "@/components/ui/subtitle";
import PlanetBg from "@/components/planetBg";

interface Post {
  name: string;
  color: string;
  id: string;
  slug: string;
  title: string;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
}

async function getPost(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/plogs?slug=${slug}`
  );
  const post: Post[] = await res.json();
  if (!post) notFound();
  return post[0];
}

export async function generateStaticParams() {
  const posts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/plogs`).then(
    (res) => res.json()
  );

  return posts.map((post: Post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  return {
    title: post.slug,
    description: post.overview.content,
  };
}

export default async function PagePlanets({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  return (
    <main>
      <div style={{ position: "absolute", width: "100vw", height: "160vh" }}>
        <PlanetBg />
      </div>
      <section className="relative top-[4rem] md:top-0">
        <Container>
          <PlanetInfo
            name={post.name}
            color={post.color}
            overview={post.overview}
            structure={post.structure}
            geology={post.geology}
            images={post.images}
          />
          <div>
            <Subtitle
              rotation={post.rotation}
              revolution={post.revolution}
              radius={post.radius}
              temperature={post.temperature}
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
