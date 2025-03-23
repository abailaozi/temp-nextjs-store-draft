'use client'

import LoadingTable from "@/components/global/LoadingTable";

const loading = () => {
  return (
    <div>
      <LoadingTable row={10}/>
    </div>
  );
};

export default loading;