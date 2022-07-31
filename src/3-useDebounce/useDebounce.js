import { useEffect } from "react"
import useTimeout from "../2-useTimeout/useTimeout"

export default function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = useTimeout(callback, delay)
  useEffect(reset, [...dependencies, reset])  // clear & set
  useEffect(clear, [clear]) // to prevent the immediate kick-off 
}