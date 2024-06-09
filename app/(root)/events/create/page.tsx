
import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs/server";


const CreateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-primary-50 bg-cover bg-center py-3 md:py-5">
        <h3 className="wrapper h3-bold text-center sm:text-left">Create An Event</h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  )
}

export default CreateEvent