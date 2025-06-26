import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { popForm } from "@/http/api";

export interface PopUpProps {
  btnTxt: string;
}

const schema = z.object({
  parentName: z.string().min(1, "Parent name is required"),
  childName: z.string().min(1, "Child name is required"),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  phone: z
    .string()
    .min(10, "Phone number must be 10 digits")
    .max(10, "Phone number must be 10 digits"),
  previousSchoolName: z.string().optional().or(z.literal("")),
  class: z.string().min(1, "Class is required"),
});
interface FormProps {
  parentName: string;
  childName: string;
  email?: string;
  phone: string;
  previousSchoolName?: string;
  class: string;
}

const submitEnquiry = async (data: FormProps) => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate network
  console.log("Submitted:", data);
  return data;
};

const EnquiryModal = ({ btnTxt }: PopUpProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: zodResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: popForm,
    onSuccess: () => {
      toast.success("Enquiry submitted!");
      reset();
      setIsOpen(false);
    },
    onError: () => toast.error("Failed to submit enquiry."),
  });
  const onSubmit = (data: FormProps) => {

      const formData = {
      ...data,
      access_key: import.meta.env.VITE_PUBLIC_ACCESS_KEY,
    };
      mutation.mutate(formData)
    };

  return (
    <>
      {/* Trigger Button */}

      <Button
        size="lg"
        className="bg-primary hover:bg-primary/90 group"
        onClick={() => setIsOpen(true)}
      >
        {btnTxt}
      </Button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 sm:left-[-2.5rem] bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Admission Enquiry</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium">
                  Parent/Guardian Name
                </label>
                <input
                  {...register("parentName")}
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Parent/Guardian Name"
                />
                <p className="text-sm text-red-500">
                  {errors.parentName?.message}
                </p>
              </div>
              {/* childName */}
              <div>
                <label className="block text-sm font-medium">Child Name</label>
                <input
                  {...register("childName")}
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Child Name"
                />
                <p className="text-sm text-red-500">
                  {errors.childName?.message}
                </p>
              </div>
              {/* Email */}
              <div>
                <label className="block text-sm font-medium">
                  Email (optional)
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full border px-3 py-2 rounded"
                  placeholder="you@example.com"
                />
                <p className="text-sm text-red-500">{errors.email?.message}</p>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input
                  {...register("phone")}
                  className="w-full border px-3 py-2 rounded"
                  placeholder="1234567890"
                />
                <p className="text-sm text-red-500">{errors.phone?.message}</p>
              </div>

              {/* previousSchoolName */}
              <div>
                <label className="block text-sm font-medium">
                  Previous School Name (optional)
                </label>
                <input
                  {...register("previousSchoolName")}
                  type="text"
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Previous School Name"
                />
                <p className="text-sm text-red-500">
                  {errors.previousSchoolName?.message}
                </p>
              </div>
              {/* class */}
                <div>
                <label className="block text-sm font-medium">
                  Class 
                </label>
                <input
                  {...register("class")}
                  type="text"
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Class"
                />
                <p className="text-sm text-red-500">
                  {errors.class?.message}
                </p>
              </div>
              {/* Actions */}
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border rounded text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                >
                  {mutation.isPending ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
          <ToastContainer/>
        </div>
      )}
    </>
  );
};

export default EnquiryModal;
