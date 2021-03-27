import Link from "next/link";

const Pagination = ({ page }) => {
  console.log(`page`, page);
  return (
    <div className="flex justify-start ml-6 mb-5 my-5">
      <Link href={`/?page=${page - 1}`}>
        <button
          disabled={page <= 1}
          className="bg-white hover:bg-gray-100 text-gray-600  font-semibold text-sm py-1 px-5 border border-gray-400 rounded shadow"
        >
          Prev
        </button>
      </Link>
      <Link href={`/?page=${page + 1}`}>
        <button className="bg-white hover:bg-gray-100 text-gray-600 font-semibold text-sm py-1 px-5 border border-gray-400 rounded shadow">
          Next
        </button>
      </Link>
    </div>
  );
};

export default Pagination;
