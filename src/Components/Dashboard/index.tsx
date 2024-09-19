import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useCallback, useMemo, useRef, useState } from "react";
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
import { GridReadyEvent, GridApi } from 'ag-grid-community';

const Dashboard = () => {
  const [rowData] = useState<ClubModels[]>(clubDetails);
  const [colDefs] = useState(colDefination);
  let gridApi: any | null = useRef(null);
  const rowClassRules = {
    // apply red to Ford cars
    "green-border-row": (params: any) => {
      return params.rowIndex < TOP_FOUR;
    },
  };
  const onGridReady = (params: GridReadyEvent) => {
    params.api.sizeColumnsToFit();
    gridApi = params.api;
  };
  const onExportHandlerCsv = useCallback(() => {
    const paramsForCsv = { suppressQuotes: true, columnSeparator: '||' };
    gridApi && gridApi.exportDataAsCsv(paramsForCsv);
  }, [gridApi]);

  const onExportHandlerXls = useCallback(() => {
    const paramsForXls = {
      exportMode: 'xls',
      headerRowHeight: 20,
      rowHeight: 15,
      sheetName: 'EmployeeData',
    };
    gridApi && gridApi.exportDataAsExcel(paramsForXls);
  }, [gridApi]);

  const defaultEmployeeTableColDef = useMemo(() => {
    return {
      sortable: false,
      enableRowGroup: true,
    };
  }, []);

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
      <div className="table-header">
        <PremierLeague />
        <div className="download-table" onClick={onExportHandlerXls}>
        <p>Download</p>
        <FaDownload color="grey">Export Selected Data</FaDownload>
        </div>
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
          defaultColDef={defaultEmployeeTableColDef}
          rowClassRules={rowClassRules}
          domLayout="autoHeight"
          suppressColumnsToolPanel = {true}
        />
      </div>
    </div>
  );
};
export default Dashboard;
