import HomeContainer from "@/containers/Home";
import { testGetData } from "@/services/test";

export default async function Page() {
  const data = await testGetData();

  const allData = {
    dataExample: data,
  };

  return <HomeContainer {...allData} />;
}
