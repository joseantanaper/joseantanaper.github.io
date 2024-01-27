import React from 'react'
import { Icon, IconMap } from '@components/widgets/Icon'
import { useTranslation, Trans } from 'react-i18next'

export interface CarouselItem {
  img: string
  title: string
  subtitle: string
  link?: string
}

interface Props {
  carouselItems: CarouselItem[]
}

export const Carousel = ({ carouselItems }: Props) => {
  const { t, i18n } = useTranslation()
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {carouselItems.map((image, index) => (
            <div
              key={`carousel-${index}`}
              className={`carousel-item ${
                index === 0 ? 'active' : ''
              } text-center`}
              data-bs-interval="3000"
            >
              <img
                src={image.img}
                className="d-block w-100"
                style={{
                  width: 'auto',
                  height: '260px',
                }}
                alt={`${image.title} ${image.subtitle}`}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{image.title || 'Something'}</h5>
                {image.subtitle ? (
                  <p>{image.subtitle || 'More and more...'}</p>
                ) : null}
                {image.link ? (
                  <a
                    href={image.link}
                    className="btn text-white position-absolute end-0 bottom-0"
                    target="_blank"
                  >
                    <Icon iconmap={IconMap.External} /> {t('More')}...
                  </a>
                ) : // <a href={image.link} target="_blank">
                //   More...
                // </a>
                null}
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}
