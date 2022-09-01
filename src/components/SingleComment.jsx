import { Button, Container } from "react-bootstrap";
import { Component } from "react";

class SingleComment extends Component {
  render() {
    return (
      <Container>
        <p>
          {this.props.singleComment.rate} --- {this.props.singleComment.comment}{" "}
          <Button size='sm' variant='danger'>
            X
          </Button>
        </p>
      </Container>
    );
  }
}

export default SingleComment;
