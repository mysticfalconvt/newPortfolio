import client from "client";
// get all blog posts from sanity
const getBlogPosts = async () => {
  const response = await client.fetch(
    `*[_type == "blogPost"]{
                ...,
                "mainImage": mainImage.asset->url,
                "author": author->name,
                "categories": categories[]->title,
                "tags": tags[]->title
            }`
  );
  return response;
};
