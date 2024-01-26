import profile from '@assets/profile.jpg'

interface Props {
  size?: string
  label?: string
  className?: string
}

export const Avataro = ({ size = '36', label, className }: Props) => {
  return (
    <>
      <img
        src={profile}
        alt="Avatar"
        width={size}
        height="auto"
        className={`rounded-circle mx-auto app-profile ${className}`}
      />
      {label ? <span className="app-legend d-block">{label}</span> : null}
    </>
  )
}
