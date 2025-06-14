import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "../api/projectsApi";
import { setProjects } from "../features/projectsSlice";
import HeroSection from "../components/HeroSection";
import CategoryLists from "../components/CategoryLists";
import Footer from "../components/Footer";
import CardContainer from "../components/CardContainer";
import LoadingSpinner from "../components/LoadingSpinner";

export default function KeyHighlights() {
  const dispatch = useDispatch();
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  useEffect(() => {
    if (data) dispatch(setProjects(data));
  }, [data]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <HeroSection />
      <div className=" bg-white">
        <CategoryLists />
        <CardContainer />
      </div>

      <Footer />
    </>
  );
}
