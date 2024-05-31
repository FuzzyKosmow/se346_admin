import React from "react";

const ReportItem = ({ report, onDelete }) => {
  return (
    <div className="report-item">
      <h3>{report.user.name}</h3>
      <p>
        <strong>Post content:</strong> {report.post.content}
      </p>
      {report.post.mediaUrl && (
        <img src={report.post.mediaUrl} alt="Post media" className="media" />
      )}
      <p>
        <strong>Reason:</strong> {report.reason}
      </p>
      <button className="button" onClick={() => onDelete(report.post._id)}>
        Delete Post
      </button>
    </div>
  );
};

export default ReportItem;
