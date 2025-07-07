import React, { Suspense } from 'react'
import SignInClient from './SignInClient'

export default function SignInPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white bg-gray-900">Loading...</div>}>
      <SignInClient />
    </Suspense>
  )
}
