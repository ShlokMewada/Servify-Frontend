// const CategoryCard = ({ category }) => {
//   console.log("hello");
//   return (
//     <div className="w-full flex justify-center">
//       <img
//         src={category.service_pic}
//         alt="Category"
//         className="w-40 h-auto rounded-lg"
//       />
//     </div>
//   );
// };

// export default CategoryCard;

// CategoryCard.js
const CategoryCard = ({ category }) => {
  return (
    <div className="flex flex-col items-center w-52">
      <div className="transition-all duration-300 transform hover:scale-105">
        <img
          src={category.service_pic}
          alt="Category"
          className="w-40 h-40 object-cover rounded-md transition-transform duration-300"
        />
      </div>
      <h3 className="mt-2 text-center text-lg font-semibold text-gray-700">
        {category.service_name}
      </h3>
    </div>
  );
};

export default CategoryCard;
