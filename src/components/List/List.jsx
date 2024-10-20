import { Article } from "../Article";
import { Video } from "../Video";
import { WithHighlight } from "../WithHighlight";

const HighlightedArticle = WithHighlight(Article);
const HighlightedVideo = WithHighlight(Video);

export const List = (props) => {
  return props.list.map((item, index) => {
    switch (item.type) {
      case 'video':
        return <HighlightedVideo key={index} {...item} />;
      case 'article':
        return <HighlightedArticle key={index} {...item} />;
      default:
        return null;
    }
  });
}
