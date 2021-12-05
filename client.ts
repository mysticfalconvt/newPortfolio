import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: process.env.SANITY_ID,
  dataset: "production",
  useCdn: true,
});
