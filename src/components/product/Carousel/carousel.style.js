import styled from '@emotion/styled';
import { css, Grid } from '@mui/material';

let arrow = css`
  height: 100%;
  transition: opacity 0.5s;
  opacity: 0;
`;
const arrowNext = css`
  ${arrow};
  right: 0;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.9) 100%
  );
`;
const arrowPrev = css`
  ${arrow};
  left: 0;
  background-image: linear-gradient(
    to left,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.8) 100%
  );
`;

export const CarouselContainer = styled(Grid)`
  width: 100%;
  max-width: 490px;
  height: 100%;

  .swiper-button-prev:after,
  .swiper-rtl .swiper-button-next:after {
    color: #000;
    font-size: 25px;
  }

  .mainCarousel {
    margin-bottom: 4px;

    .swiper-slide {
      width: 490px;
      height: 500px;

      img {
        max-width: 489px;
        max-height: 489px;
        width: 100%;
        height: 100%;
      }
    }

    .subCarouselFitStyle {
      min-inline-size: fit-content;
    }

    :hover {
      .swiper-rtl .swiper-button-prev {
        opacity: 1;
      }

      .swiper-rtl .swiper-button-next {
        opacity: 1;
      }
    }

    .swiper-rtl .swiper-button-prev {
      width: 50px;
      transform: translateY(-45.5%);

      ${props => props.theme.breakpoints.up('md')} {
        ${arrowPrev};
      }
    }

    .swiper-rtl .swiper-button-next {
      width: 50px;
      transform: translateY(-45.5%);

      ${props => props.theme.breakpoints.up('md')} {
        ${arrowNext};
      }
    }
  }

  .subCarousel {
    height: 136px;
    position: relative;
    margin-top: 14px;

    .swiper {
      height: inherit;
    }
    .swiper-slide {
      height: 134px;

      img {
        width: 100vh;
        height: 100vh;
        max-height: 136px;
        max-width: 136px;
        object-fit: cover;
      }
    }

    :hover {
      .swiper-rtl .swiper-button-prev {
        opacity: 1;
      }

      .swiper-rtl .swiper-button-next {
        opacity: 1;
      }
    }

    .swiper-rtl .swiper-button-prev {
      ${arrowPrev};
      width: 35px;
      transform: translateY(-35%);
    }

    .swiper-rtl .swiper-button-next {
      ${arrowNext};
      width: 35px;
      transform: translateY(-35%);
    }
  }

  ${props => props.theme.breakpoints.down('md')} {
    max-width: 360px;

    .mainCarousel {
      .swiper-slide {
        height: 370px;
      }
      .swiper {
        max-width: 360px;
      }

      .swiper-slide img {
        max-height: 360px;
        max-width: 360px;
      }
    }

    .subCarousel {
      height: 110px;
    }

    .subCarousel {
      .swiper-slide {
        img {
          max-height: 110px;
          max-width: 110px;
        }
      }
    }

    .swiper-button-prev:after,
    .swiper-rtl .swiper-button-next:after {
      font-size: 20px;
    }

    .swiper-pagination {
      position: relative;
      top: -17px;

      .swiper-pagination-bullet {
        width: 6px;
        height: 6px;
      }

      .swiper-pagination-bullet-active {
        background-color: ${({ theme }) => theme.palette.info.dark};
      }
    }
  }
`;
