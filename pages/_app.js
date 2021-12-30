import globalCssUrl from '!!file-loader!../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log(globalCssUrl)
  return <Component {...pageProps} />
}

export default MyApp
