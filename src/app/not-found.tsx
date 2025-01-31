import Link from "next/link";
import Button from "./components/shared/Button";

export default function NotFound() {
  return (
    <div className="text-center h-screen flex flex-col items-center justify-center ">
      <h1 className="lg:text-9xl text-3xl">𝓞𝓸𝓹𝓼 !</h1>
      <h1 className="text-3xl my-4 font-semibold">404 PAGE NOT-FOUND</h1>
      <p className="font-semibold my-2">
        This page is not found you can check another page. And check another
        site visit this <br /> page you dont user your improtent time soo try another
        page
      </p>
      <Button>
        <Link href={"/"}>Go To Home Page</Link>
      </Button>
    </div>
  );
}
