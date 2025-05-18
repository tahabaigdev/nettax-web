"use client";

import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { MoonLoader } from "react-spinners";
import axios from "axios";
import { useParams } from "next/navigation";
import Link from "next/link";

// utils at the top of the file
function decodeHTML(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "India",
  "Germany",
  "France",
  "Brazil",
  "Japan",
];

const Article = () => {
  const { slug } = useParams(); // Renames id to postId for use
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toc, setToc] = useState([]);
  const contentRef = useRef(null);
  const [posts, setPosts] = useState([]);
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ email?: string; country?: string }>(
    {},
  );

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      setLoading(true); // ✅ Reset loading before fetching new post
      try {
        const response = await fetch(
          `https://rise.radixtech.org/blogs/wp-json/wp/v2/posts?slug=${slug}&_embed`,
        );
        const data = await response.json();
        setPost(data[0]); // API returns an array of matching posts
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  // Extract headings and generate TOC
  useEffect(() => {
    if (!contentRef.current) return;
    const headings = contentRef.current.querySelectorAll("h2");

    const tocItems = Array.from(headings).map((heading) => {
      const id = heading.textContent.toLowerCase().replace(/\s+/g, "-");
      heading.id = id;
      return { id, text: heading.textContent, level: heading.tagName };
    });

    setToc(tocItems);
  }, [post]);

  useEffect(() => {
    setLoading(true); // Start loading

    // Fetch blog posts from WordPress REST API
    fetch("https://rise.radixtech.org/blogs/wp-json/wp/v2/posts?_embed")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "https://rise.radixtech.org/subscribe.php",
        {
          email,
          country,
        },
      );
      setMessage(response.data.message || "Subscribed successfully!");
      setEmail("");
      setCountry("");
      setErrors({});
    } catch (error: any) {
      setMessage("Subscription failed.");
    }
  };

  const validateForm = () => {
    const newErrors: { email?: string; country?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!country) {
      newErrors.country = "Please select a country.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // This handles email changes and clears error if valid
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (errors.email && emailRegex.test(value)) {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
  };

  // This handles country changes and clears error if valid
  const handleCountryChange = (value: string) => {
    setCountry(value);

    if (errors.country && value) {
      setErrors((prev) => ({ ...prev, country: undefined }));
    }
  };

  return (
    <article>
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
          <div className="py-[2.4rem]">
            <p className="flex items-center gap-[.8rem] text-[1.4rem] leading-[2rem] text-[#4F4F4F]">
              <Link
                href="/blog"
                className="hover:text-[#016BC1] hover:underline"
              >
                Blog
              </Link>{" "}
              /
              {post._embedded?.["wp:term"]?.[0]?.map((category) => (
                <button
                  key={category.id}
                  href={`/category/${category.slug}`}
                  className="hover:text-[#016BC1] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {category.name}
                </button>
              ))}
              /<span className="text-[#000000]">Article</span>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-[4rem] border-y border-[rgb(233_226_218)] md:grid-cols-2 md:gap-[0rem]">
            <div className="pt-[2.4rem] pr-[3.2rem]">
              <h3
                className="mb-[1rem] text-[3rem] leading-[4rem] font-medium sm:mb-[3.2rem] sm:text-[4rem] sm:leading-[5rem]"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />

              <p
                className="text-[1.8rem] leading-[2.5rem] text-[#4F4F4F] sm:text-[2.5rem] sm:leading-[3.2rem]"
                dangerouslySetInnerHTML={{ __html: post.acf?.hero_subtitle }}
              />
            </div>

            <div className="aspect-[1.6/1] border-[rgb(233_226_218)] md:border-l md:p-[3.2rem]">
              <img
                src={post._embedded["wp:featuredmedia"][0].source_url}
                alt="Image"
                className="size-full object-cover"
              />
            </div>
          </div>

          <ul className="flex items-center text-[1.4rem] leading-[2rem]">
            <li className="px-[1.5rem] py-[2rem] sm:pr-[3.2rem]">
              Published:{" "}
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </li>

            <li className="border-x border-[rgb(233_226_218)] px-[1.5rem] py-[2rem] sm:pr-[3.2rem] sm:pl-[2.4rem]">
              {post._embedded?.["wp:term"]?.[0]?.map((category, index, arr) => (
                <span key={category.id}>
                  <button
                    href={`/category/${category.slug}`}
                    className="hover:text-[#016BC1] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {category.name}
                  </button>
                  {index < arr.length - 1 && ", "}
                </span>
              ))}
            </li>

            <li className="px-[1.5rem] py-[2rem] sm:pr-[3.2rem] sm:pl-[2.4rem]">
              {calculateReadTime(post.content.rendered)}
            </li>

            <li className="flex items-center gap-[.5rem] border-l border-[rgb(233_226_218)] px-[1.5rem] py-[2rem] sm:pl-[2.4rem]">
              By
              <button
                href={post._embedded?.author?.[0]?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#016BC1] capitalize hover:underline"
              >
                {post._embedded?.author?.[0]?.name}
              </button>
            </li>
          </ul>

          <div className="grid grid-cols-1 border-y border-[rgb(233_226_218)] md:grid-cols-[65%_35%]">
            <div className="pt-[4rem] pr-[6rem] pb-[4.8rem]">
              <div
                ref={contentRef}
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </div>

            <aside className="hidden border-l border-[rgb(233_226_218)] md:block">
              <div className="sticky top-0">
                <div className="py-[3.2rem] pl-[3.2rem]">
                  <h4 className="mb-[2.4rem] text-[2.8rem] leading-[3.6rem]">
                    Table of contents
                  </h4>

                  <ul className="text-[1.6rem] leading-[2.4rem] text-[#4f4f4f]">
                    {toc.map((item) => (
                      <li key={item.id} className="mb-2">
                        <button
                          onClick={() => {
                            const target = document.getElementById(item.id);
                            if (target) {
                              target.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            }
                          }}
                          className={`inline-block w-full border-l-[2px] border-[transparent] px-[1.6rem] py-[.8rem] text-left text-[#4f4f4f] hover:border-[#006bff] hover:text-[#000000]`}
                        >
                          {item.text}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-y border-[rgb(233_226_218)] py-[3.2rem] pl-[3.2rem]">
                  <h4 className="mb-[2.4rem] text-[2.8rem] leading-[3.6rem]">
                    Recommended for you
                  </h4>

                  <Carousel className="">
                    <CarouselContent>
                      {posts.slice(0, 8).map((post) => (
                        <CarouselItem key={post.id}>
                          <Link href={`/blog/${post.slug}`} className="group">
                            <div className="aspect-[1.91/1]">
                              <img
                                src={
                                  post._embedded?.["wp:featuredmedia"]?.[0]
                                    ?.source_url
                                }
                                alt={post.title.rendered}
                                className="size-full object-cover"
                              />
                            </div>

                            <h6 className="border-l-[4px] border-[#006bff] bg-[#eeede9] py-[1.2rem] pl-[1.6rem] text-[1.4rem] leading-[1.2rem] font-medium uppercase transition-all duration-200 group-hover:border-l-[8px]">
                              {post._embedded?.["wp:term"]?.[0]?.[0]?.name ||
                                "Uncategorized"}
                            </h6>

                            <div className="flex items-center gap-[.5rem] pt-[1.6rem] pb-[.8rem] text-[1.2rem] leading-[2rem] font-medium text-[#4F4F4F]">
                              <span>
                                {new Date(post.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  },
                                )}
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
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    <div className="mt-[3.2rem] flex items-center gap-[2rem]">
                      <CarouselPrevious className="static size-[4.8rem] -translate-x-0 -translate-y-0 text-[#006bff]" />
                      <CarouselNext className="static size-[4.8rem] -translate-x-0 -translate-y-0 text-[#006bff]" />
                    </div>
                  </Carousel>
                </div>

                <div className="py-[3.2rem] pl-[3.2rem]">
                  <h4 className="mb-[2.4rem] text-[2.8rem] leading-[3.6rem]">
                    Share this post
                  </h4>

                  <ul className="flex items-center gap-[1rem]">
                    <li>
                      <a
                        href="https://www.facebook.com/netaxpvtltd"
                        className="group"
                      >
                        <Facebook className="size-[2rem] stroke-white stroke-[1.5px] opacity-70 group-hover:opacity-100" />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.instagram.com/nettaxpvtltd"
                        className="group"
                      >
                        <Instagram className="size-[2rem] stroke-white stroke-[1.5px] opacity-70 group-hover:opacity-100" />
                      </a>
                    </li>

                    <li>
                      <a href="#" className="group">
                        <Twitter className="size-[2rem] stroke-white stroke-[1.5px] opacity-70 group-hover:opacity-100" />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.linkedin.com/company/nettaxpk"
                        className="group"
                      >
                        <Linkedin className="size-[2rem] stroke-white stroke-[1.5px] opacity-70 group-hover:opacity-100" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>

          <div className="grid border-b border-[rgb(233_226_218)] md:grid-cols-[60%_40%]">
            <div className="flex flex-col justify-between py-[3.2rem] pr-[3.2rem]">
              <h2 className="pb-[.8rem] text-[5.6rem] leading-[6.4rem]">
                Never miss a RadixTech post
              </h2>

              <p className="mt-[1.6rem] text-[2rem] leading-[2.8rem]">
                Subscribe to the categories you care about and get the latest
                posts delivered to your inbox
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col border-t border-[rgb(233_226_218)] py-[3.2rem] md:border-t-0 md:border-l md:pl-[3.2rem]"
            >
              <div className="grid grid-cols-2 gap-x-[2rem] gap-y-[.8rem]">
                <div>
                  <Label
                    htmlFor="email"
                    className="mb-[.5rem] inline-block text-[1.6rem] leading-[2.4rem]"
                  >
                    Work Email <span className="text-[#006bff]">*</span>
                  </Label>

                  <Input
                    value={email}
                    onChange={handleEmailChange}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="mb-[.5rem] inline-block text-[1.6rem] leading-[2.4rem]"
                  >
                    Country: <span className="text-[#006bff]">*</span>
                  </Label>

                  <Select value={country} onValueChange={handleCountryChange}>
                    <SelectTrigger
                      className={errors.country ? "border-red-500" : ""}
                    >
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.country && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.country}
                    </p>
                  )}
                </div>

                {/* <div className="flex items-center gap-[1rem]">
                  <Checkbox id="engineering" />

                  <Label
                    htmlFor="engineering"
                    className="text-[1.2rem] leading-[2rem] text-[#1B5162]"
                  >
                    Engineering
                  </Label>
                </div>

                <div className="flex items-center gap-[1rem]">
                  <Checkbox id="company" />

                  <Label
                    htmlFor="company"
                    className="text-[1.2rem] leading-[2rem] text-[#1B5162]"
                  >
                    Company
                  </Label>
                </div> */}
              </div>

              <p className="my-[2rem] text-[1.2rem] leading-[1.44rem] text-[#1B5162]">
                By clicking “Subscribe” I understand that I will receive RISE
                communications, and I agree to RISE processing my personal data
                in accordance with its <br />
                <a href="" className="hover:underline">
                  Privacy Policy
                </a>
                .
              </p>

              <button
                type="submit"
                className="bg-[#006bff] py-[1rem] text-[1.6rem] leading-[2.4rem] font-medium text-[#ffffff]"
              >
                Subscribe
              </button>

              {message && (
                <p className="mt-[2rem] text-[1.8rem]">
                  Thank you for subscribing!
                  <br />
                  Stay up to date on the latest news and updates from RISE
                </p>
              )}
            </form>
          </div>

          <div className="pt-[8rem]">
            <h3 className="text-[4.8rem] leading-[5.6rem]">
              What&apos;s next?
            </h3>

            <div className="mt-[6.4rem] grid grid-cols-1 gap-[3.2rem] sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col gap-[4.8rem] bg-[#1B3139] p-[3rem]">
                <h4 className="text-[3.2rem] leading-[4rem] text-[#ffffff]">
                  Explore more from the authors
                </h4>

                <div className="flex items-center justify-between border-b border-[#006bff] py-[1.2rem]">
                  <a
                    href=""
                    className="text-[1.4rem] leading-[2.4rem] text-[#ffffff] hover:underline"
                  >
                    Sustainability in Aluminum Production
                  </a>

                  <ExternalLink className="size-[1.6rem] text-[#ffffff]" />
                </div>
              </div>

              {posts.slice(0, 2).map((post) => (
                <Link
                  href={`/blog/${post.slug}`} // Adjust based on your routing
                  className="group"
                  key={post.id}
                >
                  <div className="aspect-[1.91/1]">
                    <img
                      src={
                        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
                      }
                      alt="Image"
                      className="size-full object-cover"
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
                    / <span>{calculateReadTime(post.content.rendered)}</span>
                  </div>

                  <h4 className="line-clamp-3 text-[2rem] leading-[2.8rem] group-hover:underline">
                    {post.title.rendered}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Article;
