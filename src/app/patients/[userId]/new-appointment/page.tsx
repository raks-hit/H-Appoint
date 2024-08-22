import Image from "next/image";

import { getPatient } from "@/lib/actions/patient.actions";
import { AppointmentForm } from "@/components/forms/AppointmentForm";

const Appointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
        <div className="flex">
          <Image
            src="/assets/images/logo.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <div className="text-3xl ml-2 mt-1 font-sans font-extrabold ">AppointMed</div>
          </div>

          <AppointmentForm
            patientId={patient?.$id}
            userId={userId}
            type="create"
          />

          <p className="copyright mt-10 py-12">© 2024 AppointMed</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1500}
        width={1500}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default Appointment;