import LogoGraphic from "../img/logo.svg";
import LogoGraphicDark from "../img/logo_darkmode.svg";
import Moon from "../img/moon.svg";
import Sun from "../img/sun.svg";

export const lightTheme = {
  background: "#FFFFFF",
  headerBackground: "#FFFFFF",
  logo: LogoGraphic,
  themeButton: Moon,
  logoBackground: "#3dc0dc",
  navText: "#808080",
  navHoverBackground: "#3dc0dc",
  navHoverText: "#ffffff",
  navSelectedText: "#000000",
  navHoverSelectedText: "#ffffff",
  navSelectedArrow: "#3dc0dc",
  textColor: "#282828",
  buttonColor: "#b4b4b4"
}

export const darkTheme = {
  background: "#022a33",
  headerBackground: "#07323c",
  logo: LogoGraphicDark,
  themeButton: Sun,
  logoBackground: "#0e6779",
  navText: "#b4b4b4",
  navHoverBackground: "#0e6779",
  navHoverText: "#ffffff",
  navSelectedText: "#ffffff",
  navHoverSelectedText: "#ffffff",
  navSelectedArrow: "#0e6779",
  textColor: "#ffffff",
  buttonColor: "#086980"
}