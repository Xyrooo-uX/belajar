import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import toast from "react-hot-toast";
import { z } from "zod";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

   const loginSchema = z.object({
  email: z
  .string()
  .min(1,"Email wajib di isi")
  .email("masukan email yang benar"),

  password: z
  .string()
  .min(1,"Password wajib di isi")
  .min(8,"password minimal 8 karakter"),
  });

  const handleLogin = (e) => {
    e.preventDefault();

    const result = loginSchema.safeParse({
      email,
      password,
    });

    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }

    if (email === "kyy@gmail.com" && password === "12345678") {

     toast.success("Login berhasil");
     localStorage.setItem("token", "123");
     navigate("/dashboard");

    } else {
      toast.error("Login gagal, sandi atau email salah");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-md w-80">

        <h2 className="text-2xl font-bold text-center mb-6 underline decoration-blue-500 decoration-3">
          Login
        </h2>

        <label className="italic">Email</label> 
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
        />
  
        <label className="italic">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-6"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition"
        >
          Login
        </button>

      </form>
    </div>
  )
}

export default Login; 