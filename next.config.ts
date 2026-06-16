import type { NextConfig } from "next";
const nextConfig: NextConfig = { images:{ remotePatterns:[{protocol:"https",hostname:"images.unsplash.com",pathname:"/**"}], formats:["image/avif","image/webp"] }, poweredByHeader:false, reactStrictMode:true };
export default nextConfig;
