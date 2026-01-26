import GalleryView from "@/components/gallery/GalleryView";
import { baseURL, gallery, person } from "@/resources";
import { Flex, Heading, Meta, Schema } from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(gallery.title)}`,
    path: gallery.path,
  });
}

export default function Gallery() {
  return (
    <Flex maxWidth="l" align="center" className="bg-red-500!">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image={`/api/og/generate?title=${encodeURIComponent(gallery.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <div className="w-full flex flex-col justify-center items-center text-center">
        <Heading marginBottom="l" variant="display-default-m" align="center">
          {gallery.title}
        </Heading>
        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            marginBottom: "48px",
            marginTop: "24px",
            lineHeight: 1.8,
            padding: "0 16px",
          }}
        >
          {gallery.description}
        </p>

        <hr
          style={{
            width: "100%",
            borderColor: "rgba(0, 0, 0, 0.1)",
            margin: "48px 0",
          }}
        />

        <GalleryView />
      </div>
    </Flex>
  );
}
