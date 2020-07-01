export default class Blog {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  imageSrc: string;
  summary: string;
  content: string;
  url: string;
  constructor(
    title: string,
    description: string,
    author: string,
    datePublished: string,
    imageSrc: string,
    summary: string,
    content: string,
    url: string
  ) {
    this.title = title;
    this.description = description;
    this.author = author;
    this.datePublished = datePublished;
    this.imageSrc = imageSrc;
    this.summary = summary;
    this.content = content;
    this.url = url;
  }
}
