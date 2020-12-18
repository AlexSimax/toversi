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
  primary_1: "#fff9f3",
  primary_2: "#e9ddce",
  primary_3: "#c3b19d",
  primary_4: "#a28d74",
  primary_5: "#7f684f",
  blue_1: "#bebfc5",
  blue_2: "#9092a0",
  blue_3: "#6f7286",
  blue_4: "#54586f",
  blue_5: "#3a3e57",
  green_1: "#c2cbc6",
  green_2: "#94a89c",
  green_3: "#718c7c",
  green_4: "#537561",
  green_5: "#395b47",
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
