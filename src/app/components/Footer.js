import React from "react";
import { Facebook, Be, Instagram, LinkedIn, Website } from "../icons";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  const socialMediaLinks = [
    {
      icon: Facebook,
      link: "test",
    },
    {
      icon: Website,
      link: "test",
    },
    {
      icon: LinkedIn,
      link: "test",
    },
    {
      icon: Instagram,
      link: "test",
    },
    {
      icon: Be,
      link: "test",
    },
  ];
  return (
    <div className="flex px-12 lg:px-24 pt-14 pb-[87px] xl:pr-[348px] justify-between items-center flex-wrap gap-4">
      <h2 className="font-semibold text-sm">
        Israa Elshebli - Skincare Backed by Science.
      </h2>
      <div className="flex gap-2">
        {socialMediaLinks.map((socialLink, index) => {
          return (
            <Link key={index} href={socialLink.link} target="_blank">
              <Image src={socialLink.icon} alt="socialMedia"></Image>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
