export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61d1d1cc2bc6cb71c54e4884",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-q3xafy71",
                  apiId: "0a105923-b8bb-4c2e-9467-160cb9e205a8",
                },
                {
                  buildHookId: "61d1d1ccbd5723b1042dae6e",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-wk57sbdd",
                  apiId: "a7bf45c2-32c6-4a8c-a553-c51d7264cc0c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/adebiyial/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-wk57sbdd.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
