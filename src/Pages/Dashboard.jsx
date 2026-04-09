import { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import Navbar from "../Components/Navbar";
import Searchbar from "../Components/Searchbar";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(6);
  const [newProductName, setNewProductName] = useState(""); 
  const columns = 3;

  useEffect(() => {
    axios
      .get("https://api.restful-api.dev/objects")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addProduct = (e) => {
    e.preventDefault();
    if (newProductName.trim() === "") return;

    const newEntry = {
      id: Date.now().toString(), 
      name: newProductName
    };

    setProducts([newEntry, ...products]);
    setNewProductName("");
  };

  const deleteProduct = (id) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "bg-green-500 text-white px-4 py-2 rounded-lg mx-2",
      cancelButton: "bg-red-500 text-white px-4 py-2 rounded-lg mx-2"
    },
    buttonsStyling: false
  });

  swalWithBootstrapButtons.fire({
    title: "Apakah kamu yakin?",
    text: "Data akan di hapus!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Ya, hapus!",
    cancelButtonText: "Batal",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      const updatedProducts = products.filter((item) => item.id !== id);
      setProducts(updatedProducts);

      swalWithBootstrapButtons.fire({
        title: "Berhasil!",
        text: "Data berhasil dihapus.",
        icon: "success"
      });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire({
        title: "Dibatalkan",
        text: "Data gagal dihapus.",
        icon: "error"
      });
    }
  });
};

  const filteredProducts = products.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const currentProducts = filteredProducts.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredProducts.length / postPerPage);

  const getGridColsClass = () => {
    switch (columns) {
      case 1: return "grid-cols-1";
      case 2: return "grid-cols-1 sm:grid-cols-2";
      case 3: return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
      default: return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-10">
        <Navbar />
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700 pt-5">
          Dashboard
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-md mx-auto">
          <form onSubmit={addProduct} className="flex gap-2">
            <input
              type="text"
              placeholder="Nama produk baru..."
              value={newProductName}
              onChange={(e) => setNewProductName(e.target.value)}
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Tambah
            </button>
          </form>
        </div>

        <Searchbar setSearch={setSearch} />

        <div className={`grid ${getGridColsClass()} gap-4 text-center mt-6`}>
          {currentProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition flex flex-col justify-between"
            >
              <h2 className="text-lg font-semibold mb-4">
                {item.name || "No Name"}
              </h2>
              <button
                onClick={() => deleteProduct(item.id)}
                className="text-red-500 hover:bg-red-500 text-sm font-medium border border-red-500 rounded px-2 py-1 hover:text-white transition"
              >
                Hapus
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 hover:bg-indigo-600"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === page
                  ? "bg-blue-600 text-white font-bold"
                  : "bg-white text-blue-600 border border-blue-500 cursor-pointer"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 hover:bg-indigo-600"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;