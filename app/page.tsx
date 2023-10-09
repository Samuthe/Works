"use client";

import React, { useEffect, useState } from "react";
import "./styles/style.css";
import mixpanel from "../config/mixpanel";
import CookieBanner from "./components/CookiesBanner";
import Link from "next/link";

/**
 * @function FetchWebsite - Fetches the website and displays it in an iframe
 * @type {string} url - URL of the website
 * @description Fetches the website and displays it in an iframe
 * @returns iframe with the website
 */
const FetchWebsite = ({ url }: { url: string }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    /**
     * @class AbortController - A new abortController to abort the fetch request
     * @description AbortController to abort the fetch request
     * @returns void
     */
    const abortController = new AbortController();

    /**
     * @function trackWebsiteFetch - Tracks the website fetch event
     * @param url - URL of the website
     * @description Tracks the website fetch event
     * @returns void
     * @example trackWebsiteFetch("https://www.google.com")
     */
    const trackWebsiteFetch = (url: string) => {
      mixpanel.track("Website Fetched", { url });
    };

    /**
     * @function getSiteAvailability - Checks if the website is available and sets the hasError state
     * @description Checks if the website is available
     * @param {void} void
     * @async - Makes an async request to the website
     * @throws {error} - Throws an error if the website is not available
     * @callback getSiteAvailability - Checks if the website is available
     * @callback trackWebsiteFetch - Tracks the website fetch event
     * @returns void
     */
    const getSiteAvailability = async () => {
      try {
        await fetch(url, { mode: "no-cors", signal: abortController.signal });
        setHasError(false);

        /**
         * @returns url - URL of the website to be tracked
         */
        trackWebsiteFetch(url);
      } catch (err) {
        /**
         * @returns boolean - Sets the hasError state to true
         */
        setHasError(true);
      }
    };

    getSiteAvailability();

    return () => abortController.abort();
  }, [url]);

  return (
    <div>
      {hasError ? (
        <div className="error">
          An error occurred while loading the website.
        </div>
      ) : (
        <iframe
          src={url}
          style={{
            width: "100%",
            height: "600px",
            border: "none",
          }}
        ></iframe>
      )}
    </div>
  );
};

/**
 * @class Home - Home Page
 * @description Home Page of the application
 * @param {void} void
 * @returns Home Page of the application
 */
const Home = () => {
  const [url, setUrl] = useState("");

  return (
    <>
      <div>
        <h1 className="title">Webpage Viewer</h1>
        <div>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
          />
        </div>
        <div>{url && <FetchWebsite url={url} />}</div>
      </div>
      <CookieBanner />
      <Link href="/mySubscription">Go to subscription page</Link>
    </>
  );
};

export default Home;
