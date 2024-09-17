import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useRef, useState } from "react";
import { clubDetails } from "../../DataSource/TableData";
import { colDefination } from "../../DataSource/CoulmDefination";
import "../../App.css";
import { ClubModels } from "../../Types/ClubModels";
import {
  pagination,
  paginationPageSize,
  paginationPageSizeSelector,
  rowSelection,
  TOP_FOUR,
} from "../../utils/constants";
import { PremierLeague } from "../LeagueHeader";
import { FaDownload } from "react-icons/fa";

const Dashboard = () => {
  const [rowData] = useState<ClubModels[]>(clubDetails);
  const [colDefs] = useState(colDefination);
  const gridApi = useRef(null);
  const rowClassRules = {
    // apply red to Ford cars
    "green-border-row": (params: any) => {
      return params.rowIndex < TOP_FOUR;
    },
  };
  const onGridReady = (params) => {
    gridApi.current = params.api;
};

const exportToCsv = () => {
    if (gridApi.current) {
        gridApi.current.exportDataAsCsv({
            fileName: 'data-export.csv',
            allColumns: true, // Include all columns
            onlySelected: false, // Export all rows
        });
    }
};
  return (
    // wrapping container with theme & size
    <div>
      <PremierLeague />
      <div className="download-table" onClick={exportToCsv}>
       <p>Download</p>
       <FaDownload color="grey">Export Selected Data</FaDownload>
      </div>
      <div className="ag-theme-quartz" style={{ height: 500 }}>
        <AgGridReact
          onGridReady={onGridReady}
          rowData={rowData}
          columnDefs={colDefs}
          rowSelection={rowSelection}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
          rowClassRules={rowClassRules}
        />
      </div>
    </div>
  );
};
export default Dashboard;
