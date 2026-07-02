import React from 'react'

type Props = { selected?: boolean }

const CloudDownload = ({ selected }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 17.01V11H15V17.01H17.01C17.84 17.01 18.26 18.01 17.66 18.61L12.66 23.61C12.29 23.98 11.7 23.98 11.33 23.61L6.33 18.61C5.73 18.01 6.16 17.01 6.99 17.01H9Z"
        stroke={selected ? '#fff' : 'rgba(255,255,255,0.4)'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 11H17.5C18.88 11 20.13 10.31 20.88 9.2C21.87 7.73 22 5.87 21.17 4.26C20.13 2.24 17.94 1 15.63 1C14.93 1 14.24 1.14 13.59 1.41C12.72 -0.1 11.12 -0.44 9.82 0.15C8.53 0.74 7.79 2.14 8.05 3.54C6.38 3.82 4.93 4.84 4.08 6.28C2.68 8.47 3.28 11.28 5.39 12.77C6.5 13.57 7.84 14 9.2 14H9"
        stroke={selected ? '#fff' : 'rgba(255,255,255,0.4)'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CloudDownload
