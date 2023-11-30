import { Dispatch, SetStateAction } from "react";

const Pagination = ({
  page,
  lastPage,
  setPage,
}: {
  page: number;
  lastPage: number;
  // setPage: (value: number | ((prevState: number) => number)) => void;
  setPage: Dispatch<SetStateAction<number>>;
}) => {
  const scrollTop = () => {
    scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleNextPage = () => {
    if (page >= lastPage) return;
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    if (page <= 1) return;
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
      {page > 1 ? (
        <button
          onClick={handlePrevPage}
          className="transition-all hover:text-color-accent duration-300"
        >
          Prev
        </button>
      ) : null}

      <p>
        {page} of {lastPage}
      </p>

      {page < lastPage ? (
        <button
          onClick={handleNextPage}
          className="transition-all hover:text-color-accent duration-300"
        >
          Next
        </button>
      ) : null}
    </div>
  );
};

export default Pagination;
