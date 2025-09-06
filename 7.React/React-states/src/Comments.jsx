
function Comments({ viewComments }) {
  return (
    <div>
      {viewComments.map((value, index) => (
        <p key={index}>
          <strong>{value.userName}</strong>: {value.comment} ({value.review}⭐)
        </p>
      ))}
    </div>
  );
}

export default Comments;

