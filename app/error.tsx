'use client'
import React from 'react'
interface Props {
    error : Error;
    reset : () => void;
}

const ErrorPage = ({error , reset}: Props) => {
    console.log('Error is: ',  error)
  return (
    <>
        <div>An unexpected error has accoured</div>

        {/* Give the chans to retry it in case of any error on the page. */}
        <button className="btn" onClick={() => reset()}>Retry</button>
    </>
  )
}

export default ErrorPage

// Next.js automaticlaly pass errors to this error component
// In real application we should log this error in a logging service to save it permanent so we can you see the issue :
// Like Sentry : https://sentry.io/welcome/