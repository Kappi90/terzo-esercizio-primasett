import { Component } from "react";
import { Accordion } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount = () => {
    this.getComments();
  };
  getComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwYWFmYWVkZDY3ODAwMTUwN2Q3NDYiLCJpYXQiOjE2NjIwMzcyNTQsImV4cCI6MTY2MzI0Njg1NH0.u-ezye-KGIL7cqBpH2D6f9g3jUoAYRVGcM5ybyV2rFc",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({
          comments: data,
        });
      } else {
        alert("error from comment area");
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Accordion className='mb-4'>
        <CommentList userComments={this.state.comments} />
        <AddComment asin={this.props.asin} />
      </Accordion>
    );
  }
}

export default CommentArea;
