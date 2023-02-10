import React, { useMemo, useDeferredValue, useEffect } from 'react'

function List({ input }) {
  const LIST_SIZE = 20123
  const deferredInput = useDeferredValue(input)
  const list = useMemo(() => {
    const l = []
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredInput}</div> )
    }
  }, [deferredInput])

  useEffect(() => {
    console.log(`Input: ${input}\nDeferred: ${deferredInput}`)
  }, [input, deferredInput])

  return list

}

export default List
