import { connect } from "frontity";
import {TwitterIcon, TwitterShareButton} from "react-share"

const Item = ({state}) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    return (
      <div>
        <h2>{post.title.rendered}</h2>
        <TwitterShareButton url={post.link} title={post.title.rendered}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    );
}

export default connect(Item);