import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.action";
import Image from "next/image";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[824px] flex-1 flex-col py-20">
          <Image
            src="/assets/icons/logo-full.svg"
            width={1000}
            height={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
          />
          <RegisterForm user={user} />
          <p className="text-14-regular justify-items-end text-center text-dark-600 xl:text-left py-12">
            © 2024 CarePulse. All rights reserved.
          </p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        width={1000}
        height={1000}
        alt="onboarding image"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
