import profile from '@assets/profile.jpg'

interface Props {
  size?: string
  label?: string
  className?: string
  imgClass?: string
}

export const Avataro = ({
  size = '36',
  label,
  className,
  imgClass = 'rounded-circle app-circle app-profile',
}: Props) => {
  return (
    <>
      <img
        src={profile}
        alt="Avatar"
        width={size}
        height="auto"
        className={`${imgClass} mx-auto ${className}`}
      />
      {label ? <span className="app-legend d-block">{label}</span> : null}
    </>
  )
}
