import { Component } from "react";
import { Card, Container } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Container>
        <Card
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{ border: this.state.selected ? "3px solid green" : "none" }}
        >
          <Card.Img variant='top' src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
        {this.state.selected && <CommentArea asin={this.props.book.asin} />}
      </Container>
    );
  }
}

export default SingleBook;
