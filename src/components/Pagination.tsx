"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

type PaginationProps = {
  currentPage: number;
  hasPrev: boolean;
  hasNext: boolean;
}

const Pagination = ({ currentPage, hasPrev, hasNext }: PaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams as unknown as URLSearchParams);
    params.set("page", pageNumber.toString());
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex justify-between w-full">
      <Suspense fallback={<div>Loading...</div>}>
        <button
          onClick={() => createPageUrl(currentPage - 1)}
          disabled={!hasPrev}
          className="px-4 py-2 rounded-md bg-gray-200"
        >
          Prev
        </button>
        <button
          onClick={() => createPageUrl(currentPage + 1)}
          disabled={!hasNext}
          className="px-4 py-2 rounded-md bg-gray-200"
        >
          Next
        </button>
      </Suspense>
    </div>
  );
}

export default Pagination;
