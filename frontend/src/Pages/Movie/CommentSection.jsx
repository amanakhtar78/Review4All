import React, { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([]); // State to hold comments
  const [newComment, setNewComment] = useState(""); // State to hold the new comment

  // Function to handle form submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      // Add new comment to the comments array
      setComments([...comments, newComment]);
      setNewComment(""); // Clear the input field
    }
  };

  return (
    <div className="m-5 p-5 bg-slate-100 rounded">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>

      {/* Comment Form */}
      <form onSubmit={handleCommentSubmit} className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share your thoughts..."
          rows="4"
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </form>

      {/* Comments List */}
      <div>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="border-b pb-2 mb-2">
              <p className="text-gray-700">{comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
