import CookieConsent from "react-cookie-consent";
import Cookies from "js-cookie";

/**
 * @function CookieBanner
 * @description Banner to inform user about cookies
 * @param {void}
 * @access public
 * @default void
 * @example Users Session is stored in a cookie
 * @returns Cookie Banner
 */
const CookieBanner = () => {
  const handleAccept = () => {
    Cookies.set("Cookies", "accepted", { expires: 365 });
    console.log("cookies accepted");
  };
  return (
    <CookieConsent
      onAccept={handleAccept}
      location="bottom"
      buttonText="Accept"
      cookieName="Cookies"
    >
      This Website uses cookies to enhance user experience
    </CookieConsent>
  );
};

export default CookieBanner;
