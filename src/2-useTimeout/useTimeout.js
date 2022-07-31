import { useCallback, useEffect, useRef } from "react"

export default function useTimeout(callback, delay) {
  const timeoutRef = useRef()

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callback(), delay)
  }, [callback, delay])

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [])

  useEffect(() => {
    set()
    return clear
  }, [delay, set, clear])

  const reset = useCallback(() => {
    clear()
    set()
  }, [clear, set])

  return { reset, clear }
}


// the above is the same, except usage of callbackRef
// export default function useTimeout(callback, delay) {
//   const callbackRef = useRef(callback)
//   const timeoutRef = useRef()

//   useEffect(() => {
//     callbackRef.current = callback
//   }, [callback])

//   const set = useCallback(() => {
//     timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
//   }, [delay])

//   const clear = useCallback(() => {
//     timeoutRef.current && clearTimeout(timeoutRef.current)
//   }, [])

//   useEffect(() => {
//     set()
//     return clear          // will execute on the app exit
//   }, [delay, set, clear])

//   const reset = useCallback(() => {
//     clear()
//     set()
//   }, [clear, set])

//   return { reset, clear }
// }