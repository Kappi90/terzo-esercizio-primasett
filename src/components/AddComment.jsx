import { Component } from "react";
import { Button, Form, Card, Accordion } from "react-bootstrap";

class AddComment extends Component {
  state = {
    userComment: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    },
  };

  submitComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(this.state.userComment),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwYWFmYWVkZDY3ODAwMTUwN2Q3NDYiLCJpYXQiOjE2NjIwMzcyNTQsImV4cCI6MTY2MzI0Njg1NH0.u-ezye-KGIL7cqBpH2D6f9g3jUoAYRVGcM5ybyV2rFc",
          },
        }
      );
      if (response.ok) {
        alert("Comment added");
      } else {
        alert("error");
      }
    } catch (error) {}
  };

  render() {
    return (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey='0'>
          Add your comment
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
          <Card.Body>
            <Form onSubmit={this.submitComment}>
              <Form.Group>
                <Form.Label>Rate the book</Form.Label>
                <Form.Control
                  as='select'
                  value={this.state.userComment.rate}
                  onChange={(e) => {
                    console.log(e.target.value);
                    this.setState({
                      userComment: {
                        ...this.state.userComment,
                        rate: e.target.value,
                      },
                    });
                  }}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
              >
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  as='textarea'
                  rows={3}
                  placeholder='Your comment...'
                  value={this.state.userComment.comment}
                  onChange={(e) => {
                    console.log(e.target.value);
                    this.setState({
                      userComment: {
                        ...this.state.userComment,
                        comment: e.target.value,
                      },
                    });
                  }}
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Add
              </Button>
            </Form>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}

export default AddComment;
