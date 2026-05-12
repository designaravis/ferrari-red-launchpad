import * as contentful from 'contentful';

export const client = contentful.createClient({
  space: '2c8ukjy7k1xz',
  accessToken: 'bjHmm7zLxhWBzYTdJaPmcUZWfjjW0yuqtUGj_5ZYFRM',
});

export const urlFor = (source: any) => {
  if (!source || !source.fields || !source.fields.file || !source.fields.file.url) {
    return { url: () => '/placeholder-blog.jpg' };
  }
  const url = source.fields.file.url;
  return {
    url: () => url.startsWith('//') ? `https:${url}` : url
  };
};
