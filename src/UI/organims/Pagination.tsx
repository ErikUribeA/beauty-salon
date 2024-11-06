"use client";
import { IServices } from "@/app/core/application/dto";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { StepBack, StepForward } from "lucide-react";

interface IProps {
    data: IServices;
}
function Pagination({ data }: IProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const onPageChange = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", newPage.toString());

        router.push(`?${params.toString()}`);
    };
    const currentPage = data.pageable.pageNumber + 1;
    return (
        <div className="flex justify-center items-center mt-5 gap-3">
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}> <StepBack className="text-blue-500"/> </button>
            <span>Page</span>
            <span> {currentPage}</span>
            <span>  of  </span>
            <span> {data.totalPages}</span>
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === data.totalPages}> <StepForward className="text-blue-500" /> </button>
        </div>
    );
}

export default Pagination;
