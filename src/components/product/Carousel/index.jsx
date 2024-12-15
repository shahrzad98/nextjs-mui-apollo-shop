import * as React from 'react';
import { CarouselContainer } from './carousel.style';
import MainCarousel from './MainCarousel';
import SubCarousel from './SubCarousel';
import { useState } from 'react';
import { useMediaQuery } from '@mui/material';

const Carousel = ({ images, label }) => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <CarouselContainer>
      <MainCarousel
        images={images}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        label={label}
      />
      {!isSmall && (
        <SubCarousel
          images={images}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          label={label}
        />
      )}
    </CarouselContainer>
  );
};

export default Carousel;
