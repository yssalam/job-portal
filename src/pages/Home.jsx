import { useEffect, useState } from "react";
import { fetchJobs } from "../api/jobs";
import JobCard from "../components/JobCard";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadJobs = async () => {
      const data = await fetchJobs();
      setJobs(data);
      setFiltered(data);
      setLoading(false);
    };

    loadJobs();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const result = jobs.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(result);
    }, 300);

    return () => clearTimeout(timer);
  }, [search, jobs]);

  return (
    <div className="home-container">
      {/* HERO */}
      <section className="home-hero">
        <h1>Find Your Dream Job</h1>
        <p>Search thousands of jobs from top companies</p>

        <input
          className="home-search"
          placeholder="Search job title..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      {/* CONTENT */}
      <section className="home-content">
        {loading && <p className="loading">Loading jobs...</p>}

        {!loading && filtered.length === 0 && (
          <p className="empty-state">Tidak ada pekerjaan</p>
        )}

        <div className="job-grid">
          {filtered.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
