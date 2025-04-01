'use client';

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
  currentPath: string;
}

export default function Pagination({
  hasNextPage,
  hasPreviousPage,
  startCursor,
  endCursor,
  currentPath,
}: PaginationProps) {
  return (
    <div className="mt-8 flex items-center justify-center gap-4">
      {hasPreviousPage && (
        <Link
          href={`${currentPath}?before=${startCursor}`}
          className="inline-flex items-center rounded-lg bg-white px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-50"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          前へ
        </Link>
      )}
      {hasNextPage && (
        <Link
          href={`${currentPath}?after=${endCursor}`}
          className="inline-flex items-center rounded-lg bg-white px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-50"
        >
          次へ
          <ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      )}
    </div>
  );
} 