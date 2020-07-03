import React from "react";
import { connect } from "frontity";
import Link from "./Link"
import Button from "./Button";

const Items = ({state}) => {
    const data = state.source.get(state.router.link);
   
    return (
        <div>
            <Button></Button>
            <hr />
            {
                data.items.map((item) => {
                    const post = state.source.post[item.id];
                    return (
                        <Link key={item.id} href={item.link}>{post.title.rendered}</Link>
                    )
                })
            }
        </div>
    )
}

export default connect(Items);