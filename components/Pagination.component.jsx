import Link from 'next/link'

const Pagination = ({ page }) => (
  <div class="flex justify-start ml-6 mb-5">
    <Link href={`/?page=${page - 1}`} >
      <button class="bg-white hover:bg-gray-100 text-gray-800 text-semibold text-sm py-1 px-5 border border-gray-400 rounded shadow">Prev</button>
    </Link>
    <Link href={`/?page=${page + 1}`}>
      <button class="bg-white hover:bg-gray-100 text-gray-800 text-semibold text-sm py-1 px-5 border border-gray-400 rounded shadow">Next</button>
    </Link>
  </div>
)

export default Pagination