import { useEffect, useState } from "react"

export function useAsset(path = "") {
  const [asset, setAsset] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    import(`../assets/${path}`)
      .then((data) => data.default)
      .then(setAsset)
      .catch(setError)
  }, [path])

  return [asset, error]
}

export function useImage(path = "") {
  return useAsset(`images/${path}`)
}

export function useIcon(name = "") {
  return useAsset(`icons/${name}.svg`)
}
