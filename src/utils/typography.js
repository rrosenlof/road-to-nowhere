import Typography from "typography"

import parnassusTheme from 'typography-theme-parnassus'
parnassusTheme.overrideStyles = () => ({
    a: {
      color: "#006749",
      boxShadow: "0 0 0 0 white"
    },
  })

const typography = new Typography(parnassusTheme)

export default typography