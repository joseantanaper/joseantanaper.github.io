import React from 'react'
import { useEffect } from 'react'
import { Suspense, lazy } from 'react'
import Loading from '@components/widgets/Loading'

interface Props {
  title: string
  url: string
  aspectRatio: '16/9' | '4/3'
}

const options = '?rel=0&showinfo=0&autohide=1&wmode=transparent'

const YTVideo = ({ title, url, aspectRatio }: Props) => {
  useEffect(() => {
    // const iframe = document.getElementsByTagName('iframe').item(0)
    // iframe?.setAttribute('src', iframe.getAttribute('data-bs-src')!)
  }, [])
  return (
    <Suspense fallback={<Loading />}>
      <iframe
        style={{ aspectRatio, opacity: 0.1 }}
        loading="lazy"
        // allowTransparency={true}
        allowFullScreen={true}
        title={title}
        className="w-100 shadow rounded bg-black"
        // src={url + options}
        // data-bs-src={url + options}
      />
      <span className="float-end mx-3">{title}</span>
    </Suspense>
  )
}

export default YTVideo
