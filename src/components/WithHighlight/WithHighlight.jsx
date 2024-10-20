import { New } from "../New";
import { Popular } from "../Popular";


export const WithHighlight = (Component) => {
  return function HighlightedComponent(props) {
    if (props.views > 1000) {
        return (
            <Popular>
                <Component {...props} />
            </Popular>
        );
    } else if (props.views < 100) {
        return (
            <New>
                <Component {...props} />
            </New>
        );
    } else {
        return <Component {...props} />;
    }
};
}
