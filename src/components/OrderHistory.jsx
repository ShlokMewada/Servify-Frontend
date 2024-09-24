import React, { useState } from "react";
import { Star } from "lucide-react";

const OrderHistory = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      serviceName: "House Cleaning",
      amount: 80,
      date: "2024-09-20",
      review: null,
    },
    {
      id: 2,
      serviceName: "Lawn Mowing",
      amount: 50,
      date: "2024-09-18",
      review: null,
    },
    {
      id: 3,
      serviceName: "Plumbing Repair",
      amount: 120,
      date: "2024-09-15",
      review: null,
    },
  ]);

  const [activeReview, setActiveReview] = useState(null);

  const handleAddReview = (orderId) => {
    setActiveReview(orderId);
  };

  const handleSubmitReview = (orderId, rating, comment) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, review: { rating, comment } } : order
      )
    );
    setActiveReview(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order History</h1>
      {orders.map((order) => (
        <div key={order.id} className="bg-white shadow-md rounded-lg mb-4 p-4">
          <h2 className="text-xl font-semibold">{order.serviceName}</h2>
          <p className="text-gray-600">Date: {order.date}</p>
          <p className="text-gray-600">Amount: ₹{order.amount}</p>
          {order.review ? (
            <div className="mt-2">
              <p>Rating: {order.review.rating}/5</p>
              <p>Review: {order.review.comment}</p>
            </div>
          ) : activeReview === order.id ? (
            <ReviewForm orderId={order.id} onSubmit={handleSubmitReview} />
          ) : (
            <button
              onClick={() => handleAddReview(order.id)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Add Review
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

const ReviewForm = ({ orderId, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <div className="mt-2">
      <div className="flex mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`cursor-pointer ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
            onClick={() => setRating(star)}
          />
        ))}
      </div>
      <textarea
        placeholder="Write your review here..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <button
        onClick={() => onSubmit(orderId, rating, comment)}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
      >
        Submit Review
      </button>
    </div>
  );
};

export default OrderHistory;
