import { GetServerSideProps } from "next";

export default function Sitemap() {
    return null;
}

export const getServerSideProps: GetServerSideProps<{}> = async (ctx) => {
    ctx.res.setHeader('Content-Type', 'text/xml');

    const xml = await generateSitemap();

    ctx.res.write('');
    ctx.res.end();
    return {
        props: {}
    }
}

async function generateSitemap(): Promise<string> {

    const res = await fetch('https://eliteblue.net/e-panel/api/blogs')
    let data = await res.json();

    return `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${data?.data.map((item) => {
        return `<url>
            <loc> https://eliteblue.net/blog/single-blog/${item.slug} </loc>
            <lastmod>${item.updated_at}</lastmod>
        </url>`
    })}
    </urlset>
    `;

}