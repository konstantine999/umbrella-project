import { Button } from "antd";
import React from "react";

interface paginationProps {
    prev_page_url: string | null;
    next_page_url: string | null;
    goToPrevPage: () => void;
    goToNextPage: () => void;
}

const Pagination = ({
    prev_page_url,
    next_page_url,
    goToPrevPage,
    goToNextPage,
}: paginationProps) => {
    return (
        <div className="flex justify-center gap-5 mt-4 mb-10">
            <Button
                type="primary"
                disabled={prev_page_url ? false : true}
                onClick={goToPrevPage}
            >
                Previous Page
            </Button>
            <Button
                type="primary"
                disabled={next_page_url ? false : true}
                onClick={goToNextPage}
            >
                Next Page
            </Button>
        </div>
    );
};

export default Pagination;
