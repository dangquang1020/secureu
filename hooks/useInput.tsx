import { useState } from "react"

export const useInput = (initialValue: any, isRequired = false) => {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState(false)

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: (event: any) => {
        let text = event.target.value.replace(/\s/g, "")
        setValue(event.target.value)

        if (isRequired && text == '') {
          setError(true)
        } else {
          setError(false)
        }
      }
    },
    error,
    setError
  }
}