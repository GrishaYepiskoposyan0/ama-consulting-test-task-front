import { Layout } from "../../common/components/layout/Layout.jsx";
import { FileUploader } from "../../common/components/file-uploader/FileUploader.jsx";
import { useSelector } from "react-redux";

export const Home = () => {
  const uploadError = useSelector((state) => state.records.uploadRecord.error);
  return (
    <Layout>
      <h1>Here you can upload file and check it's validity!</h1>
      <h1 className="flex gap-1">
        <p>Also you can see all invalid file reports</p>
        <a href="/invalid-reports" className="text-red-600 hover:underline">
          here!
        </a>
      </h1>
      {uploadError && <h1 className="text-red-600">{uploadError}</h1>}
      <FileUploader />
    </Layout>
  );
};
