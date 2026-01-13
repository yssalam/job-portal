import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchJobs } from "../api/jobs";

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadJob = async () => {
      const jobs = await fetchJobs();
      const found = jobs.find(
        (item) => String(item.id) === String(id)
      );

      setJob(found);
      setLoading(false);
    };

    loadJob();
  }, [id]);

  if (loading) {
    return <p className="loading">Loading job detail...</p>;
  }

  if (!job) {
    return <p className="empty-state">Job tidak ditemukan</p>;
  }

  return (
    <div className="job-detail-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="job-detail-card">
        <h1 className="job-title">{job.title}</h1>

        <div className="job-meta">
          <span>🏢 {job.company}</span>
          <span>📍 {job.location}</span>
        </div>

        <div className="job-description">
          <h3>Description</h3>
          <p>{job.description}</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
