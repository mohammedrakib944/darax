import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h2>Users Page</h2>
      <Link href="/dashboard" className="link">
        Dash home
      </Link>
    </div>
  );
};

export default page;
