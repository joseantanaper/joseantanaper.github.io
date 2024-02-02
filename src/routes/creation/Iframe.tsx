import React from 'react'

interface Props {
  title: string
  url: string
  aspectRatio: '16/9' | '4/3'
}

const options = '?rel=0&showinfo=0&autohide=1'

const YTVideo = ({ title, url, aspectRatio }: Props) => {
  return (
    <>
      <iframe
        style={{ aspectRatio }}
        loading="lazy"
        allowTransparency={true}
        allowFullScreen={true}
        title={title}
        className="w-100 shadow rounded bg-black"
        src={url + options}
      />
      <span className="float-end mx-3">{title}</span>
    </>
  )
}

export default YTVideo
