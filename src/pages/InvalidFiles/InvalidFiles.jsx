import { Layout } from "../../common/components/layout/Layout.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getReports } from "../../redux/recordSlice.jsx";

export const InvalidFiles = () => {
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.records.getReports.data);
  useEffect(() => {
    dispatch(getReports());
  }, []);
  return (
    <Layout>
      {reports.map((report) => {
        return (
          <div className="flex items-center" key={report}>
            <h1>{report}</h1>
            <a
              href={`${import.meta.env.VITE_BACKEND_URL}/record/${report}`}
              target="_blank"
              className="py-2 px-5 bg-[#0e7dfb] text-white rounded my-2 mx-5 hover:underline"
            >
              Download
            </a>
          </div>
        );
      })}
    </Layout>
  );
};
