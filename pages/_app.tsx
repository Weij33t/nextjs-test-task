import React from 'react'

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { initializeStore } from '../redux'
// import { store } from '../redux'
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const store = initializeStore(pageProps.store)
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
