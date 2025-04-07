/* eslint-disable react/prop-types */
import { Heart, MapPinIcon, Trash2Icon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Link } from "react-router-dom";
import useFetch from "@/hooks/use-fetch";
import { deleteJob, saveJob } from "@/api/apiJobs";
import { useUser, useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
// import { toast } from "react-hot-toast"; // ✅ If using toast

const JobCard = ({ job, savedInit = false, onJobAction = () => {}, isMyJob = false }) => {
  if (!job) return null;

  const [saved, setSaved] = useState(savedInit);
  const { user } = useUser();
  const { getToken } = useAuth();

  const { loading: loadingDeleteJob, fn: fnDeleteJob } = useFetch(deleteJob, {
    job_id: job.id,
  });

  const {
    loading: loadingSavedJob,
    data: savedJob,
    fn: fnSavedJob,
  } = useFetch(saveJob);

  const handleSaveJob = async () => {
    const token = await getToken();
    const saveData = { user_id: user.id, job_id: job.id };

    // console.log(saveData);
    
    const alreadySaved = saved;
   
    

    const res = await fnSavedJob( { alreadySaved }, saveData);

    if (res !== null) {
      setSaved(!alreadySaved); // ✅ toggle saved
      // toast.success(alreadySaved ? "Removed from saved!" : "Job saved!");
    } else {
      // toast.error("Something went wrong while saving.");
      console.error("Error saving job");
    }

    onJobAction();
  };

  const handleDeleteJob = async () => {
    await fnDeleteJob();
    onJobAction();
  };

  useEffect(() => {
    if (savedJob !== undefined) {
      setSaved(savedJob?.length > 0);
    }
  }, [savedJob]);

  return (
    <Card className="flex flex-col">
      {loadingDeleteJob && (
        <BarLoader className="mt-4" width={"100%"} color="#36d7b7" />
      )}

      <CardHeader className="flex justify-between items-start">
        <div className="flex justify-between w-full items-start">
          <CardTitle className="font-bold">{job.title}</CardTitle>

          {isMyJob && (
            <Trash2Icon
              fill="red"
              size={18}
              className="text-red-300 cursor-pointer hover:scale-110 transition-transform"
              onClick={handleDeleteJob}
            />
          )}
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 flex-1">
        <div className="flex justify-between items-center">
          {job.company?.logo_url && (
            <img src={job.company.logo_url} alt="Company Logo" className="h-6" />
          )}
          <div className="flex gap-2 items-center">
            <MapPinIcon size={15} /> {job.location}
          </div>
        </div>
        <hr />
        <p>
          {job.description?.substring(0, job.description.indexOf("."))}.
        </p>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Link to={`/job/${job.id}`} className="flex-1">
          <Button variant="secondary" className="w-full">
            More Details
          </Button>
        </Link>

        {!isMyJob && (
          <Button
            variant="outline"
            className="w-15"
            onClick={handleSaveJob}
            disabled={loadingSavedJob}
          >
            {saved ? (
              <Heart size={20} fill="red" stroke="red" />
            ) : (
              <Heart size={20} />
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default JobCard;
