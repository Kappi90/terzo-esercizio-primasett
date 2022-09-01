const SingleComment = (props) => (
  <>
    <li>
      {props.singleComment.rate} --- {props.singleComment.comment}
    </li>
  </>
);

export default SingleComment;
