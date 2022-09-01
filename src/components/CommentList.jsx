import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroup.Item>
          {this.props.userComments.map((comment) => (
            <SingleComment singleComment={comment} key={comment._id} />
          ))}
        </ListGroup.Item>
      </ListGroup>
    );
  }
}
export default CommentList;
