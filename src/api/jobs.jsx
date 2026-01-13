const STORAGE_KEY = 'jobs_data';

let initialJobs = [
    {
        id: 1,
        title: 'Frontend Developer',
        company: 'Tech Corp',
        location: 'New York, NY',
        description: 'Develop and maintain web applications using React.js.',
    },{
        id: 2,
        title: 'Backend Developer',
        company: 'Data Solutions',
        location: 'San Francisco, CA',
        description: 'Build and optimize server-side applications with Node.js.',
    },{
        id: 3,
        title: 'Full Stack Developer', 
        company: 'Web Innovations',
        location: 'Austin, TX',
        description: 'Work on both frontend and backend development tasks.',
    }, {
        id: 4,
        title: 'Data Scientist',
        company: 'Analytics Pro',
        location: 'Boston, MA',
        description: 'Analyze and interpret complex data to help companies make decisions.',
    }
]

const loadJobs = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : initialJobs;
}

const saveJobs = (jobs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
}

let jobsData = loadJobs();

export const fetchJobs = async () => {
    return jobsData
}
export const createJob = (job) => {
    if (!job || !job.title) return

    jobsData = [...jobsData, {...job, id: Date.now()}];
    saveJobs(jobsData);
} 
export const deleteJob = (id) => {
    jobsData = jobsData.filter((job) => job?.id !== id);
    saveJobs(jobsData);
}
export const updateJob = (updatedJob) => {
    if (!updatedJob?.id) return;

    jobsData = jobsData.map((job) => 
        job?.id === updatedJob.id ? updatedJob : job
    );
    saveJobs(jobsData);
}
