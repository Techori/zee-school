import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import clsx from "clsx";
import { submitForm } from "@/http/api";

// Validation Schema
const formSchema = z.object({
  parentName: z.string().min(1, "Name is required"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
//   classInfo: z.string().optional().or(z.literal("")),
  age:z.string().min(1,"Age is required"),
  class:z.string().min(1,"Class is required"),
  message: z.string().min(1, "Please enter your message"),
});
export interface FormProps {
  parentName: string;
//   childName: string;
  email?: string;
  phone: string;
  age: string;
//   previousSchoolName?: string;
  class: string;
  message: string;
}

// type FormValues = z.infer<typeof formSchema>;

// Simulated API request
// const submitForm = async (data: FormProps) => {
//   await new Promise((res) => setTimeout(res, 1000));
//   console.log("Form submitted:", data);
//   return data;
// };

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: zodResolver(formSchema),
  });

  const mutation = useMutation({
    mutationFn: submitForm,
    onSuccess: () => {
      toast.success("Message sent!");
      reset();
    },
    onError: () => toast.error("Failed to send message."),
  });
  const onSubmit = (data: FormProps) => {

      mutation.mutate(data)
    };

  return (
    <div className="w-full mx-auto p-6  bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Parent/Guardian Name</label>
            <input
              {...register("parentName")}
              placeholder="Enter parent name"
              className={clsx(
                "w-full border rounded px-3 py-2",
                errors.parentName ? "border-red-500" : "border-gray-300"
              )}
            />
            {errors.parentName && <p className="text-sm text-red-600">{errors.parentName.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              {...register("phone")}
              placeholder="Enter your phone number"
              className={clsx(
                "w-full border rounded px-3 py-2",
                errors.phone ? "border-red-500" : "border-gray-300"
              )}
            />
            {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <input
            {...register("email")}
            type="email"
            placeholder="Enter your email"
            className={clsx(
              "w-full border rounded px-3 py-2",
              errors.email ? "border-red-500" : "border-gray-300"
            )}
          />
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        </div>

        {/* Class  */}
        <div>
          <label className="block text-sm font-medium mb-1">Student's Class</label>
          <input
            {...register("class")}
            placeholder="Enter student's current  class"
            className={clsx(
              "w-full border rounded px-3 py-2",
              errors.class ? "border-red-500" : "border-gray-300"
            )}
          />
          {errors.class && <p className="text-sm text-red-600 mt-1">{errors.class.message}</p>}
        </div>
        {/* AGE Info */}
        <div>
          <label className="block text-sm font-medium mb-1">Student's Age</label>
          <input
            {...register("age")}
            placeholder="Enter student's current age"
            className={clsx(
              "w-full border rounded px-3 py-2",
              errors.age ? "border-red-500" : "border-gray-300"
            )}
          />
          {errors.age && <p className="text-sm text-red-600 mt-1">{errors.age.message}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            {...register("message")}
            rows={4}
            placeholder="Tell us about your inquiry, questions, or how we can help you..."
            className={clsx(
              "w-full border rounded px-3 py-2",
              errors.message ? "border-red-500" : "border-gray-300"
            )}
          />
          {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            disabled={mutation.isPending}
            className="w-full py-3 px-4 bg-gray-900 text-white font-medium rounded hover:bg-gray-800"
          >
            {mutation.isPending ? "Submitting..." : "Send Message"}
          </button>
        </div>
      </form>
      <ToastContainer/>
    </div>
  );
}
