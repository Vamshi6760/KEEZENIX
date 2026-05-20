import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  mobile: z.string().regex(/^\d{10}$/, "Mobile number must be exactly 10 digits."),
  college: z.string().min(2, "College name must be at least 2 characters."),
  course: z.string().min(1, "Please select a course."),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select a gender.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const StudentRegistration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      college: "",
      course: "",
      gender: undefined,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    toast.success("Registration Successful!", {
      description: "Welcome to Keezenix. We'll be in touch soon.",
    });
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-28 pb-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Student Registration
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Join our global community and accelerate your career.
          </p>
        </div>

        <Card className="shadow-xl border-white/50 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-blue-900">Application Form</CardTitle>
            <CardDescription className="text-center">
              Please fill out all required fields carefully.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  {...register("name")}
                  className={errors.name ? "border-red-500 focus-visible:ring-red-500" : "border-gray-300 focus-visible:ring-blue-500"}
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...register("email")}
                    className={errors.email ? "border-red-500 focus-visible:ring-red-500" : "border-gray-300 focus-visible:ring-blue-500"}
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-sm font-medium text-gray-700">Mobile Number *</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="1234567890"
                    {...register("mobile")}
                    className={errors.mobile ? "border-red-500 focus-visible:ring-red-500" : "border-gray-300 focus-visible:ring-blue-500"}
                  />
                  {errors.mobile && <p className="text-sm text-red-500">{errors.mobile.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="college" className="text-sm font-medium text-gray-700">College/University *</Label>
                <Input
                  id="college"
                  placeholder="Enter your college name"
                  {...register("college")}
                  className={errors.college ? "border-red-500 focus-visible:ring-red-500" : "border-gray-300 focus-visible:ring-blue-500"}
                />
                {errors.college && <p className="text-sm text-red-500">{errors.college.message}</p>}
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Course Selection *</Label>
                <Select onValueChange={(value) => setValue("course", value)} value={watch("course") || ""}>
                  <SelectTrigger className={errors.course ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}>
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-development">Full Stack Web Development</SelectItem>
                    <SelectItem value="data-science">Data Science & AI</SelectItem>
                    <SelectItem value="cloud-computing">Cloud Computing & DevOps</SelectItem>
                    <SelectItem value="cyber-security">Cyber Security</SelectItem>
                    <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                  </SelectContent>
                </Select>
                {errors.course && <p className="text-sm text-red-500">{errors.course.message}</p>}
              </div>

              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-700">Gender *</Label>
                <RadioGroup 
                  onValueChange={(value: "male" | "female" | "other") => setValue("gender", value)} 
                  className="flex space-x-4"
                  value={watch("gender")}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" className={errors.gender ? "border-red-500 text-red-600" : ""} />
                    <Label htmlFor="male" className="font-normal">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" className={errors.gender ? "border-red-500 text-red-600" : ""} />
                    <Label htmlFor="female" className="font-normal">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" className={errors.gender ? "border-red-500 text-red-600" : ""} />
                    <Label htmlFor="other" className="font-normal">Other</Label>
                  </div>
                </RadioGroup>
                {errors.gender && <p className="text-sm text-red-500">{errors.gender.message}</p>}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit Registration"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentRegistration;
