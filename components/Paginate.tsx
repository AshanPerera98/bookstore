import { useBookStore } from "@/store";
import { Pagination } from "@mantine/core";

type props = {
  className?: string;
};

const Paginate = ({ className }: props) => {
  const { navigatePage, page, totalPages, blockUI } = useBookStore(
    (state) => state
  );

  const pageChange = (value: number) => {
    navigatePage(value);
  };

  return (
    <Pagination
      total={totalPages}
      siblings={2}
      boundaries={1}
      value={page}
      onChange={pageChange}
      className={className}
      disabled={blockUI}
    />
  );
};

export default Paginate;
