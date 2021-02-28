interface AppProps {
  Component: () => JSX.Element,
  pageProps: Record<string, any>
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
