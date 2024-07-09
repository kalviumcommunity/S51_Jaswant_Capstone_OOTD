import React, { useState } from 'react';
import "./Feedback.css"


function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0); // Rating state, if needed

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle feedback submission (e.g., send to server, show confirmation).
    console.log('Feedback submitted:', { feedback, rating });
    // Optionally clear the feedback and rating fields after submission
    setFeedback('');
    setRating(0);
  };

  return (
    <div className="feedback-container">
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label htmlFor="feedbackInput">Your Feedback:</label>
          <textarea
            id="feedbackInput"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows="4"
            cols="50"
            required
            className="form-control"
          />
        </div>
        {/* Optional: Rating input */}
        <div className="form-group">
          <label htmlFor="ratingInput">Rating:</label>
          <input
            type="number"
            id="ratingInput"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            min="1"
            max="5"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn-submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default Feedback;
