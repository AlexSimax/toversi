export const colors = {
  mainGreen: `#1ec515`,
  mainWhite: `#fff`,
  mainLightGrey: `#eaeaea`,
  mainDarkGrey: `#5b5b5b`,
  mainGrey: `#434743`,
  mainHoverDarkGrey: `#afaeae`,
  mainHoverGrey: `#ccc`,
  mainHoverBcgr: `#dee5de`,
}
export const textSlanted = `font-family: 'Roboto'`
export const transDefault = `transition:all 0.5s ease-in-out`
export const transFunction = (
  property = "all",
  time = "0.5s",
  type = "linear"
) => {
  return `transition:${property} ${time} ${type}`
}
export const transObject = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `transition:${property} ${time} ${type}`
}
export const transition = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `transition:${property} ${time} ${type}`
}
export const border = ({
  width = "0.15rem",
  type = "solid",
  color = "white",
}) => {
  return `transition:${width} ${type} ${color}`
}
export const letterSpacing = ({ spacing = "0.1rem" }) => {
  return `letter-spacing:${spacing}`
}
