import * as React from "react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { graphql, Link, useStaticQuery } from "gatsby";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import "swiper/css";

import ArticleCard from "../ArticleCard";

SwiperCore.use([Navigation]);

export default function LatestPosts() {
  const data = useStaticQuery<IPageData<IPost>>(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }, limit: 6) {
        edges {
          node {
            frontmatter {
              title
              slug
              date(formatString: "MMMM DD, YYYY")
              cover {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
                }
              }
              tags
            }
          }
        }
      }
    }
  `);

  return (
    <section>
      <hr />
      <div className="mt-16 flex justify-between container m-auto">
        <h3 className="text-4xl font-extralight  leading-[3.2rem] tracking-wide">
          See what I’ve <br />
          <strong>written lately</strong>
        </h3>
        <div className="flex gap-4 justify-start items-start">
          <button type="button" className="post-highlight-prev cursor-pointer">
            <FontAwesomeIcon
              icon={faArrowLeftLong}
              size="xl"
              className="font-extralight"
            />
          </button>
          <button type="button" className="post-highlight-next cursor-pointer">
            <FontAwesomeIcon icon={faArrowRightLong} size="xl" />
          </button>
        </div>
      </div>

      <div className="mt-10">
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          navigation={{
            nextEl: ".post-highlight-next",
            prevEl: ".post-highlight-prev",
          }}
          centeredSlides={true}
        >
          {data.allMdx.edges.map(({ node }, index) => (
            <SwiperSlide
              key={node.frontmatter.slug}
              className={[!index ? "" : ""].join(" ")}
              style={{ width: 450, background: "transparent" }}
            >
              <ArticleCard
                title={node.frontmatter.title}
                slug={node.frontmatter.slug}
                cover={node.frontmatter.cover}
                tags={node.frontmatter.tags}
                date={node.frontmatter.date}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container m-auto mt-16 text-center flex justify-center">
        <Link
          to="/blog"
          className="text-lg block bg-zinc-950 text-white w-max text-center rounded-full px-6 py-2"
        >
          See all posts
        </Link>
      </div>
    </section>
  );
}
