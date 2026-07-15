// import { Pamphlets } from "../components/Pamphlets";
import { UmrahPackages } from "../components/UmrahPackages";
import { WhatsAppButton } from "../components/WhatsAppButton";

export const UmrahPackagesPage = () => {
  return (
    <div className="pt-20">
      <UmrahPackages />
      {/* <Pamphlets/> */}
      <WhatsAppButton/>
    </div>
  );
};