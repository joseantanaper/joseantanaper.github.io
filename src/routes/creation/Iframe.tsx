import React from 'react'

interface Props {
  title: string
  url: string
  aspectRatio: '16/9' | '4/3'
}

const YTVideo = ({ title, url, aspectRatio }: Props) => {
  return (
    <>
      <iframe
        loading="lazy"
        allowTransparency={true}
        title={title}
        className="w-100 shadow rounded"
        src={url}
        style={{ aspectRatio }}
      />
      <span className="float-end mx-3">{title}</span>
    </>
  )
}

export default YTVideo
