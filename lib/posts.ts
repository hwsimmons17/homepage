import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "pages/blog");

export function getAllPostsData() {
  let returnArray: {
    slug: string;
    title: string;
    description: string;
    date: string;
  }[] = [];
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.tsx/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    let titlePattern = /<h1>.+?</g;
    const titlePre = fileContents.match(titlePattern);
    // @ts-ignore
    const title = titlePre[0].replace("<h1>", "").replace("<", "");

    let descriptionPattern = /<h4>(.|\s)+?</g;
    const descriptionPre = fileContents.match(descriptionPattern);
    // @ts-ignore
    const description = descriptionPre[0]
      .replace("<h4>", "")
      .replace("<", "")
      .replace(/(\r\n|\n|\r)/gm, "")
      .replace(/\s+/g, " ")
      .trim();

    let datePattern = /<h5>.+?</g;
    const datePre = fileContents.match(datePattern);
    // @ts-ignore
    const date = datePre[0].replace("<h5>", "").replace("<", "");

    returnArray.push({ slug, title, description, date });
  });

  return returnArray;
}
