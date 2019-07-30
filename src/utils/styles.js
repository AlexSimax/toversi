export const colors = {
  mainGreen: `#1ec515`,
  mainWhite: `#fff`,
  mainLightGrey: `#eaeaea`,
  mainDarkGrey: `#5b5b5b`,
  mainGrey: `#434743`,
  mainGold: `#D4AF37`,
  mainHoverDarkGrey: `#afaeae`,
  mainHoverGrey: `#ccc`,
  mainHoverBcgr: `#edf9e0`,
  buttonBorder: `#eae8e8`,
}
export const textSlanted = `font-family: 'Roboto'`
export const textTitle = `font-family: 'Lora'`
export const textFamilyRobCond = `font-family: 'Roboto Condensed'`
export const textFamilyMont = `font-family: 'Montserrat'`
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
