import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import BlogReviewSection from "@/components/BlogReviewSection/BlogReviewSection";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import GallerySectionOneBlog from "@/components/GallerySectionBlog/GallerySectionOne";
import React from "react";

const BlogGrid = () => {
  return (
    <Layout pageTitle="SuBa Blogs">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="SuBa Blogs" />
      <BlogReviewSection showTitle={false} isMore />
      {/* <GallerySectionOneBlog /> */}
      <div className="sponsors-section__about-two">
        <br />
        <br />
      </div>
      <MainFooter />
    </Layout>
  );
};

export default BlogGrid;
