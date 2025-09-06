import { useState } from "react";
import Comments from "./Comments.jsx";

function CommentsForm() {
  const [formData, setFormData] = useState({
    userName: "",
    comment: "",
    review: "",
  });

  const [comments, setComments] = useState([
    {
      userName: "Onkar",
      comment: "Nice post!",
      review: "5",
    },
  ]);

  function handleInput(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // add new comment to list
    setComments((prev) => [...prev, formData]);

    // clear form
    setFormData({ userName: "", comment: "", review: "" });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter your name: </label>
        <br />
        <input
          type="text"
          name="userName"
          value={formData.userName}
          id="username"
          onChange={handleInput}
          placeholder="Enter Your Name"
        />
        <br /><br />

        <label htmlFor="comment">Enter comment: </label>
        <br />
        <input
          type="text"
          name="comment"
          value={formData.comment}
          onChange={handleInput}
          id="comment"
          placeholder="Enter Your Comment"
        />
        <br /><br />

        <label htmlFor="review">Enter your rating: </label>
        <br />
        <input
          type="number"
          name="review"
          onChange={handleInput}
          value={formData.review}
          id="review"
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {/* pass the list down */}
      <Comments viewComments={comments} />
    </div>
  );
}

export default CommentsForm;

