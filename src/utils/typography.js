import Typography from "typography"

import parnassusTheme from 'typography-theme-parnassus'
parnassusTheme.overrideStyles = () => ({
    a: {
      color: "blue",
    },
  })

const typography = new Typography(parnassusTheme)

export default typography