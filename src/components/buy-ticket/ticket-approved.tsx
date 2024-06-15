import React from "react";
import Link from "next/link";

const TicketApproved = () => {
  return (
    <div className="">
      <h1>Buy your tickets here!</h1>
      <Link href="https://nextjs.org/docs/pages/api-reference/components/link">
        <a>
          <button type="button">Pay here!</button>
        </a>
      </Link>
    </div>
  );
};

export default TicketApproved;
