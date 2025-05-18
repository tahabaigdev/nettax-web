"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { AlignJustify, LayoutGrid } from "lucide-react";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  const [layout, setLayout] = useState("grid");
  const [selectedTab, setSelectedTab] = useState("all");
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8; // you can change how many posts you want per page
  const [loading, setLoading] = useState(true); // new state

  useEffect(() => {
    setLoading(true); // Start loading

    Promise.all([
      fetch("https://rise.radixtech.org/blogs/wp-json/wp/v2/posts?_embed").then(
        (res) => res.json(),
      ),
      fetch("https://rise.radixtech.org/blogs/wp-json/wp/v2/categories").then(
        (res) => res.json(),
      ),
    ])
      .then(([postsData, categoriesData]) => {
        setPosts(postsData);
        setCategories(categoriesData);
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false)); // Always stop loading
  }, []);

  // Load saved tab and layout from localStorage on mount
  useEffect(() => {
    const storedTab = localStorage.getItem("selectedTab");
    const storedLayout = localStorage.getItem("selectedLayout");

    if (storedTab) setSelectedTab(storedTab);
    if (storedLayout) setLayout(storedLayout);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1025) {
        // 1024px is usually "lg" in Tailwind
        setLayout("list");
      }
    };

    handleResize(); // run once at start
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handlers to update and persist values
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setCurrentPage(1); // Reset to page 1 when tab changes
    localStorage.setItem("selectedTab", tab);
  };

  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
    localStorage.setItem("selectedLayout", newLayout);
  };

  const filteredPosts =
    selectedTab === "all"
      ? posts
      : posts.filter((post) => {
          const postCategories = post._embedded?.["wp:term"]?.[0] || [];
          return postCategories.some((cat) => cat.slug === selectedTab);
        });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const calculateReadTime = (htmlString) => {
    const plainText = htmlString.replace(/<[^>]+>/g, ""); // remove HTML tags
    const wordCount = plainText.trim().split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200); // avg 200 wpm
    return `${readTime} min read`;
  };

  useEffect(() => {
    if (loading) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    // Cleanup function
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [loading]);

  return (
    <main>
      {loading ? (
        <div className="fixed inset-0 z-[999] flex h-screen w-full items-center justify-center bg-[#ffffff]">
          <MoonLoader
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
            color="#006bff"
            loading={true}
            speedMultiplier={0.5}
          />
        </div>
      ) : (
        <div className="container px-[2rem] pt-[12rem] pb-[4rem] xl:px-[0rem]">
          <div className="flex flex-col items-end gap-[1.6rem] md:flex-row">
            <div className="relative h-auto w-full overflow-hidden md:w-8/12 md:pt-8 xl:w-9/12 xl:pr-2">
              <h3 className="mb-[6.4rem] text-[5.6rem] leading-[6.4rem] text-[#000000]">
                Blog
              </h3>

              <h5 className="mb-[2rem] text-[1.2rem] leading-[2rem] font-medium text-[#4F4F4F] uppercase">
                FEATURED STORY
              </h5>

              {posts.length > 0 && (
                <Link
                  href={`/blog/${posts[0].slug}`}
                  className="group relative"
                >
                  <div className="aspect-[1.91/1]">
                    <Image
                      src={
                        posts[0]._embedded?.["wp:featuredmedia"]?.[0]
                          ?.source_url || "/fallback.jpg"
                      }
                      alt={posts[0].title.rendered || "Post Image"}
                      width={1050} // set desired width
                      height={550} // set desired height
                      className="object-cover"
                      priority
                    />
                  </div>

                  <div className="absolute right-0 bottom-0 w-[66.66%] bg-[#ffffff]">
                    <h6 className="border-l-[4px] border-[#006bff] bg-[#eeede9] py-[1.2rem] pl-[1.6rem] text-[1.4rem] leading-[1.2rem] font-medium uppercase transition-all duration-200 group-hover:border-l-[8px]">
                      {posts[0]._embedded?.["wp:term"]?.[0]?.[0]?.name ||
                        "Featured"}
                    </h6>

                    <div className="flex items-center gap-[.5rem] px-[1.6rem] pt-[1.6rem] pb-[.8rem] text-[1.2rem] leading-[2rem] font-medium text-[#4F4F4F]">
                      <span>
                        {new Date(posts[0].date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>{" "}
                      /{" "}
                      <span>
                        {calculateReadTime(posts[0].content.rendered)}
                      </span>
                    </div>
                    <h4
                      className="px-[1.6rem] text-[2.4rem] leading-[3.2rem] group-hover:underline"
                      dangerouslySetInnerHTML={{
                        __html: posts[0].title.rendered,
                      }}
                    />
                  </div>
                </Link>
              )}
            </div>

            <aside className="w-full border-t border-[rgb(233_226_218)] pt-[2rem] md:w-4/12 lg:border-t-0 lg:border-l lg:pt-[0rem] lg:pl-[2rem] xl:w-3/12">
              <h5 className="mb-[2rem] text-[1.2rem] leading-[2rem] font-medium text-[#4F4F4F] uppercase">
                What&apos;s new
              </h5>

              <div className="grid grid-cols-1 gap-[1rem]">
                {posts.slice(1, 3).map((post) => (
                  <Link
                    href={`/blog/${post.slug}`}
                    key={post.id}
                    className="group"
                  >
                    <div className="aspect-[1.9/1]">
                      <Image
                        src={
                          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
                        }
                        alt={post.title.rendered}
                        className="size-full object-cover"
                        width={320} // set desired width
                        height={320} // set desired height
                      />
                    </div>

                    <h6 className="border-l-[4px] border-[#006bff] bg-[#eeede9] py-[1.2rem] pl-[1.6rem] text-[1.4rem] leading-[1.2rem] font-medium uppercase transition-all duration-200 group-hover:border-l-[8px]">
                      {post._embedded?.["wp:term"]?.[0]?.[0]?.name || "New"}
                    </h6>

                    <div className="flex items-center gap-[.5rem] pt-[1.6rem] pb-[.8rem] text-[1.2rem] leading-[2rem] font-medium text-[#4F4F4F]">
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>{" "}
                      / <span>{calculateReadTime(post.content.rendered)}</span>
                    </div>

                    <h4
                      className="line-clamp-3 text-[2rem] leading-[2.8rem] group-hover:underline"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                  </Link>
                ))}
              </div>
            </aside>
          </div>

          <div className="mt-[6rem]">
            <Tabs
              value={selectedTab}
              onValueChange={handleTabChange}
              defaultValue="all"
              className="w-full"
            >
              <TabsList>
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.slug}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={selectedTab}>
                <div className="flex items-center justify-between">
                  <h3 className="py-[3.2rem] text-[3rem] leading-[4rem] font-medium text-[#000000] sm:text-[4.8rem] sm:leading-[5.6rem]">
                    Recent Posts
                  </h3>

                  <div className="hidden items-center gap-[2rem] lg:flex">
                    <button
                      onClick={() => handleLayoutChange("grid")}
                      className={`transition-all duration-200 hover:text-[#006bff] ${layout === "grid" ? "text-[#006bff]" : ""}`}
                    >
                      <LayoutGrid className="size-[3rem]" />
                    </button>

                    <button
                      onClick={() => handleLayoutChange("list")}
                      className={`transition-all duration-200 hover:text-[#006bff] ${layout === "list" ? "text-[#006bff]" : ""}`}
                    >
                      <AlignJustify className="size-[3rem]" />
                    </button>
                  </div>
                </div>

                {layout === "grid" && (
                  <div className="grid grid-cols-1 gap-x-[3.2rem] gap-y-[6.4rem] md:grid-cols-2 lg:grid-cols-4">
                    {currentPosts.map((post) => (
                      <Link
                        href={`/blog/${post.slug}`} // Adjust based on your routing
                        className="group"
                        key={post.id}
                        rel="noopener noreferrer"
                      >
                        <div className="aspect-[1.91/1]">
                          <Image
                            src={
                              post._embedded?.["wp:featuredmedia"]?.[0]
                                ?.source_url
                            }
                            alt="Image"
                            className="size-full object-cover"
                            width={320} // set desired width
                            height={320} // set desired height
                          />
                        </div>

                        <h6 className="border-l-[4px] border-[#006bff] bg-[#eeede9] py-[1.2rem] pl-[1.6rem] text-[1.4rem] leading-[1.2rem] font-medium uppercase transition-all duration-200 group-hover:border-l-[8px]">
                          {post._embedded?.["wp:term"]?.[1]?.map((tag) => (
                            <span key={tag.id}>{tag.name}</span>
                          ))}
                        </h6>

                        <div className="flex items-center gap-[.5rem] pt-[1.6rem] pb-[.8rem] text-[1.2rem] leading-[2rem] font-medium text-[#4F4F4F]">
                          <span>
                            {" "}
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>{" "}
                          /{" "}
                          <span>
                            {calculateReadTime(post.content.rendered)}
                          </span>
                        </div>

                        <h4
                          className="line-clamp-3 text-[2rem] leading-[2.8rem] group-hover:underline"
                          dangerouslySetInnerHTML={{
                            __html: post.title.rendered,
                          }}
                        />
                      </Link>
                    ))}
                  </div>
                )}

                {layout === "list" && (
                  <div className="grid-cols-1">
                    {currentPosts.map((post) => (
                      <div
                        key={post.id}
                        className="group flex gap-[4rem] border-b border-[rgb(233_226_218)] py-[3.2rem] hover:border-[#006bff]"
                      >
                        <Link
                          href={`/blog/${post.slug}`} // Adjust based on your routing
                          className="aspect-[1.91/1] w-[35%]"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={
                              post._embedded?.["wp:featuredmedia"]?.[0]
                                ?.source_url
                            }
                            alt="Image"
                            className="size-full object-cover"
                            width={320} // set desired width
                            height={320} // set desired height
                          />
                        </Link>

                        <div className="w-full">
                          <div className="mb-[.8rem] flex items-center gap-[.8rem] text-[1.2rem] leading-[2rem] font-medium text-[#4F4F4F]">
                            <span>
                              {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </span>{" "}
                            /{" "}
                            {post._embedded?.["wp:term"]?.[0]?.map(
                              (category) => (
                                <button
                                  key={category.id}
                                  href={`/category/${category.slug}`}
                                  className="text-[#016BC1] hover:underline"
                                  rel="noopener noreferrer"
                                >
                                  {category.name}
                                </button>
                              ),
                            )}
                            /
                            <span>
                              {calculateReadTime(post.content.rendered)}
                            </span>
                          </div>

                          <Link
                            href={`/blog/${post.slug}`} // Adjust based on your routing // Adjust based on your routing
                            className="grid grid-cols-2 gap-[2rem]"
                            rel="noopener noreferrer"
                          >
                            <h4
                              className="line-clamp-3 text-[2rem] leading-[2.8rem] group-hover:underline"
                              dangerouslySetInnerHTML={{
                                __html: post.title.rendered,
                              }}
                            />

                            <p
                              className="line-clamp-4 border-l border-[rgb(233_226_218)] pl-[2.4rem] text-[2rem] leading-[2.8rem]"
                              dangerouslySetInnerHTML={{
                                __html: post.excerpt.rendered,
                              }}
                            />
                          </Link>

                          <p className="flex items-center gap-[.5rem] text-[1.2rem] leading-[2rem] font-medium text-[#4F4F4F]">
                            By
                            <button
                              href={post._embedded?.author?.[0]?.link}
                              rel="noopener noreferrer"
                              className="text-[#016BC1] capitalize hover:underline"
                            >
                              {post._embedded?.author?.[0]?.name}
                            </button>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-[6.4rem] mb-[3.2rem] flex items-center gap-[1.2rem]">
                  {totalPages > 1 && (
                    <>
                      <span className="text-[1.4rem] leading-[2rem] font-bold">
                        Page
                      </span>

                      <div className="flex items-center gap-[2rem]">
                        <Pagination>
                          <PaginationContent>
                            {Array.from({ length: totalPages }, (_, index) => (
                              <PaginationItem key={index}>
                                <PaginationLink
                                  href="#"
                                  isActive={currentPage === index + 1}
                                  onClick={() => setCurrentPage(index + 1)}
                                  className="size-[3.2rem] rounded-none bg-[#EDF2F8] text-[1.2rem] leading-[2rem] hover:bg-[#1B3139] hover:text-[#ffffff]"
                                >
                                  {index + 1}
                                </PaginationLink>
                              </PaginationItem>
                            ))}
                          </PaginationContent>
                        </Pagination>
                      </div>
                    </>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      )}
    </main>
  );
};

export default Blog;
