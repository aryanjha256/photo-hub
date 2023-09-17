import React from "react";

const GalleryPage = () => {
  return (
    <div>
      <section>
        <div className="flex flex-col gap-8">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold">Gallery</h1>
            {/* <UploadButton /> */}
          </div>

          {/* <SearchForm initialSearch={search} />

        <GalleryGrid images={results.resources} /> */}
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
