import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO: OTP verification / paskey */}
      <section className="remove-scrollbar container my-auto flex">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            width={1000}
            height={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
          />
          <PatientForm />
          <div className="text-14-regular flex justify-between mt-20">
            <p className="text-dark-600 justify-items-end xl:text-left">
              © 2024 CarePulse. All rights reserved.
            </p>
            <Link className="text-green-500" href="/?admin=true">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        width={1000}
        height={1000}
        alt="onboarding image"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
