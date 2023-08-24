import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Dashboard Home Page</h1>
      <Link href="/" className="link link-primary">
        Home
      </Link>
      <Link href="/dashboard/users" className="link">
        Users
      </Link>
    </div>
  );
};

export default page;
