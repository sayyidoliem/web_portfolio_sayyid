export const siteConfig={name:"Sayyid Sunarko Portfolio",url:process.env.NEXT_PUBLIC_SITE_URL??"https://portfolio.example.com",defaultOgImage:"/og-image.png",creator:"SAYYID MUHAMMAD MUSLIM AS'AD SUNARKO"};
export function absoluteUrl(path=""){const p=path.startsWith("/")?path:`/${path}`;return `${siteConfig.url}${p}`}
