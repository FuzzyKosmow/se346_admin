import React, { useEffect, useState } from "react";
import { getReports, deletePost } from "../api";
import ReportItem from "./ReportItem";

const ReportsList = () => {
  const [reports, setReports] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const data = await getReports();
        setReports(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchReports();
  }, []);

  const handleDeletePost = async (postId) => {
    try {
      await deletePost(postId);
      setReports(reports.filter((report) => report.post._id !== postId));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="reports-list">
      {error && <p className="error">{error}</p>}
      {reports.map((report) => (
        <ReportItem
          key={report._id}
          report={report}
          onDelete={handleDeletePost}
        />
      ))}
    </div>
  );
};

export default ReportsList;
