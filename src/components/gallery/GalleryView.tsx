"use client";

import { gallery } from "@/resources";
import { MasonryGrid, Media } from "@once-ui-system/core";

export default function GalleryView() {
  const proworkflow = gallery.projects.find(
    (p) => p.title.toLowerCase() === "proworkflow",
  );
  const ui = gallery.projects.find(
    (p) => p.title.toLowerCase() === "urban intelligence",
  );
  const additionalProjects = gallery.projects.filter(
    (p) =>
      p.title.toLowerCase() !== "proworkflow" &&
      p.title.toLowerCase() !== "urban intelligence",
  );

  return (
    <div className="w-full flex flex-col justify-center items-center text-center">
      {proworkflow && (
        <section className="flex flex-col justify-center bg-red-500! mb-12 w-full">
          <h1 className="mb-12 text-4xl font-bold">{proworkflow.title}</h1>

          <MasonryGrid columns={2} s={{ columns: 1 }} gap="40">
            {proworkflow.images.map((image, index) => (
              <Media
                enlarge
                priority={index < 10}
                sizes="(max-width: 560px) 100vw, 50vw"
                key={index}
                radius="m"
                objectFit="contain"
                src={image.src}
                alt={image.alt}
              />
            ))}
          </MasonryGrid>
        </section>
      )}
      <hr
        style={{
          width: "100%",
          borderColor: "rgba(0, 0, 0, 0.1)",
          margin: "48px 0",
        }}
      />
      {ui && (
        <section className="mb-12 w-full">
          <h1
            style={{
              margin: "48px 0",
            }}
          >
            {ui.title}
          </h1>

          <MasonryGrid columns={2} s={{ columns: 1 }} gap="40">
            {ui.images.map((image, index) => (
              <Media
                enlarge
                priority={index < 10}
                sizes="(max-width: 560px) 100vw, 50vw"
                key={index}
                radius="m"
                objectFit="contain"
                src={image.src}
                alt={image.alt}
              />
            ))}
          </MasonryGrid>
        </section>
      )}

      {additionalProjects.map((project, pIndex) => (
        <section
          key={pIndex}
          className="mb-12 w-full"
          style={{ marginTop: pIndex === 0 ? "0" : "48px" }}
        >
          <h1
            style={{
              margin: "48px 0",
            }}
          >
            {project.title}
          </h1>

          <MasonryGrid columns={2} s={{ columns: 1 }} gap="40">
            {project.images.map((image, index) => (
              <Media
                enlarge
                priority={index < 10}
                sizes="(max-width: 560px) 100vw, 50vw"
                key={index}
                radius="m"
                objectFit="contain"
                src={image.src}
                alt={image.alt}
              />
            ))}
          </MasonryGrid>
        </section>
      ))}
    </div>
  );
}
