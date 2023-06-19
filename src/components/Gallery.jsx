import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import SectionHeader from "./SectionHeader";
import { Gallery } from "react-grid-gallery";
import { images } from "../constants";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const GalleryComponent = () => {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index, item) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  const theme = useTheme();

  return (
    <Box width="100%" id="gallery">
      <Box
        width="80%"
        mx="auto"
        padding="0 0 70px 0"
        sx={{
          [theme.breakpoints.down("md")]: {
            width: "90%",
            mx: "auto",
          },
        }}
      >
        <SectionHeader title="Gallery" />
        <Gallery
          images={images}
          onClick={handleClick}
          enableImageSelection={false}
        />
        {!!currentImage && (
          <Lightbox
            mainSrc={currentImage.original}
            imageTitle={currentImage.caption}
            mainSrcThumbnail={currentImage.src}
            nextSrc={nextImage.original}
            nextSrcThumbnail={nextImage.src}
            prevSrc={prevImage.original}
            prevSrcThumbnail={prevImage.src}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
          />
        )}
      </Box>
    </Box>
  );
};

export default GalleryComponent;
