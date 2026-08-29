import { CheckCircle } from "lucide-react";

export default function SubmissionSuccess() {
  return (
    <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#7B3FF2]/10">
        <CheckCircle className="h-8 w-50 text-[#7B3FF2]" />
      </div>

      <h3 className="mt-6 font-poppins text-2xl font-bold text-[#151515]">
        Thanks for submitting your enquiry!
      </h3>

      <p className="mt-3 max-w-md font-inter text-sm leading-6 text-black/55">
        We’ve received your message. Our team will review your enquiry and
        get back to you as soon as possible.
      </p>
    </div>
  );
}