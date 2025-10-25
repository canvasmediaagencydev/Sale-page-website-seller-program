import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default async function Icon() {
  // Fetch the actual PayDee logo
  const imageData = await fetch(
    new URL('../../../public/img/paydee LOGO 03.png', import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'white',
        }}
      >
        <img
          // @ts-ignore
          src={imageData}
          alt="PayDee Logo"
          width="32"
          height="32"
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
