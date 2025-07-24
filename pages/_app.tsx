import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import React, { JSX } from 'react'

export default function _app({ Component, pageProps }: { Component: JSX.ElementType, pageProps: any }) {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps}></Component>
    </QueryClientProvider>
  )
}
