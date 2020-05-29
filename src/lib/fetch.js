import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import { isEqual } from "./object"

const HttpMethod = {
  GET: "get",
  POST: "post",
  PATCH: "patch",
  DELETE: "delete",
}

const defaultRequestOptions = {
  method: HttpMethod.GET,
  headers: {},
  data: null,
  withCredentials: true,
}

export function request(url, options = defaultRequestOptions) {
  const method = options?.method ?? defaultRequestOptions.method

  return axios({
    method,
    url,
    ...options,
  })
}

export function useFetch(url = "", options = defaultRequestOptions) {
  const [loading, setLoading] = useState(true)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [requestOptions, setRequestOptions] = useState(options)
  const executeRequest = useCallback(() => {
    setLoading(true)
    setResponse(null)
    setError(null)

    request(url, requestOptions)
      .then((response) => response.data)
      .then(setResponse)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [requestOptions, url])

  useEffect(() => {
    if (!isEqual(options, requestOptions)) {
      setRequestOptions(options)
    }
  }, [options, requestOptions])

  useEffect(() => {
    executeRequest()
  }, [executeRequest])

  return {
    response,
    error,
    loading,
    retry: executeRequest,
  }
}
