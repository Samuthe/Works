/**
 * @type {import('next-pwa').NextConfig} 
 * @description This file is used to configure the PWA
 * @returns {import('next-pwa').NextConfig}
*/

const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
});

module.exports = withPWA({
    reactStrictMode: true,
});