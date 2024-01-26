import React, { StyleHTMLAttributes } from 'react'
import { ReactNode } from 'react'
import fullstack from '@assets/skills/fullstack.jpg'
import versioncontrol from '@assets/skills/versioncontrol.jpg'
import uoc from '@assets/uoc/Logo-uoc.png'
import iet from '@assets/iet/escoladeltreball.png'
import fcc from '@assets/fcc/freecodecamp.png'
import microsoft from '@assets/microsoft/microsoft.png'
import uoh from '@assets/uoh/universityofhelsinki.png'
import uohLogo from '@assets/uoh/uohLogo2.png'
import spring from '@assets/spring/spring.png'
import database from '@assets/skills/database.jpg'
import businessintelligence from '@assets/skills/businessintelligence.png'
import virtualization from '@assets/skills/virtualization.jpg'
import world from '@assets/skills/world.jpg'

import xboxbg from '@assets/skills/xboxbg.avif'
import synthbg from '@assets/skills/synthbg.jpg'
import headphones from '@assets/skills/headphones.jpg'
import streaming from '@assets/skills/streaming.jpg'

import aernnova from '@assets/arghos/aernnova.png'
import arghos from '@assets/arghos/arghos.png'
import kh7 from '@assets/arghos/khlloreda.png'
import seat from '@assets/arghos/seatmartorell.png'
import vw from '@assets/arghos/vwnavarra.png'

import omegazeta3dtech from '@assets/omegazeta/omegazeta-3dtech-cut.png'
import omegazetacirca from '@assets/omegazeta/omegazeta-circa-cut.png'
import omegazetaclinica from '@assets/omegazeta/omegazeta-clinica-cut.png'
import omegazetacorporacion from '@assets/omegazeta/omegazeta-corporacion-cut.png'
import omegazetananjing from '@assets/omegazeta/omegazeta-nanjing-cut.png'

interface Props {
  logo: string
  label: string
  className?: string
}

export const CustomBackground = ({ logo, label, className }: Props) => {
  let image
  let extra: ReactNode
  let divStyle = { height: '80px' }
  let divClass = 'position-relative'
  let imageStyle: object = { objectFit: 'cover', height: '100%' }
  let imageClass = ''

  const mode = 1

  switch (logo) {
    case 'uoc':
      image = uoc
      imageStyle = { objectFit: 'contain', height: '100%' }
      imageClass = 'bg-white'
      break
    case 'iet':
      image = iet
      break
    case 'uoh':
      image = uoh
      extra = (
        <img
          src={uohLogo}
          alt="Logo"
          className="position-absolute d-inline end-0"
          style={{
            width: '120px',
            filter:
              'drop-shadow(0 0 1px white) drop-shadow(0 0 4px white) drop-shadow(0 0 8px white)',
          }}
        />
      )
      break
    case 'fcc':
      image = fcc
      break
    case 'spring':
      image = spring
      imageStyle = { objectFit: 'contain', height: '100%' }
      imageClass = 'p-2'
      break
    case 'ms':
      image = microsoft
      break
    case 'fullstack':
      image = fullstack
      break
    case 'ide':
      image = versioncontrol
      break
    case 'arghos':
      image = arghos
      imageStyle = { objectFit: 'contain', height: '100%' }
      imageClass = 'bg-dark px-2'
      break
    case 'aernnova':
      image = aernnova
      imageStyle = { objectFit: 'contain', height: '100%' }
      imageClass = 'bg-dark px-2'
      break
    case 'omegazetacorporacion':
      image = omegazetacorporacion
      imageStyle = { objectFit: 'contain', height: '100%' }
      imageClass = 'rounded bg-body border p-2 w-100'
      break
    case 'omegazetacirca':
      image = omegazetacirca
      imageStyle = { objectFit: 'contain', height: '100%' }
      imageClass = 'rounded bg-body border p-2 w-100'
      break
    case 'omegazetananjing':
      image = omegazetananjing
      imageStyle = { objectFit: 'contain', height: '100%' }
      imageClass = 'rounded bg-body border p-2 w-100'
      break
    case 'omegazetaclinica':
      image = omegazetaclinica
      imageStyle = { objectFit: 'contain', height: '100%' }
      imageClass = 'rounded bg-body border p-2 w-100'
      break
    case 'database':
      image = database
      break
    case 'businessintelligence':
      image = businessintelligence
      break
    case 'virtualization':
      image = virtualization
      break
    case 'world':
      image = world
      break

    case 'xboxbg':
      image = xboxbg
      break
    case 'synthbg':
      image = synthbg
      break
    case 'headphones':
      image = headphones
      break
    case 'streaming':
      image = streaming
      break
  }

  return (
    <div style={divStyle} className={`${divClass} ${className}`}>
      <img
        src={image}
        alt={`${label}`}
        className={`card-img-top rounded ${imageClass}`}
        style={imageStyle}
      />
      {extra && extra}
    </div>
  )
}
