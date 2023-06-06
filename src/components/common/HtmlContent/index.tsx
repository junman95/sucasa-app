import React from "react";
import ReactHtmlParser from "react-html-parser";

type Props = {
  content: string;
};

const HtmlContent = ({ content }: Props) => {
  return <div>{ReactHtmlParser(content)}</div>;
};

export default HtmlContent;
