import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegisterForm from "@/components/RegisterForm";

export const metadata = { title: "Register | TechNova 2026" };

export default function Register() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 pb-20 pt-28">
        <h1 className="text-3xl font-bold text-glow sm:text-4xl">Register for TechNova 2026</h1>
        <p className="mt-2 mb-8 text-slate-400">
          One registration per team. Fill in the details, pay, and upload your screenshot.
        </p>
        <RegisterForm />
      </main>
      <Footer />
    </>
  );
}