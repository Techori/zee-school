import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import PopUp from "./PopUp";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                className="font-bold text-gray-900 leading-tight"
                style={{
                  fontSize: "4.5vw",
                  lineHeight: "1.1",
                }}
              >
                Mount Litera Zee School K12, Tikamgarh MP
                <style>
                  {`
                    @media (max-width: 640px) {
                      #home h1 {
                        font-size: 28px !important;
                      }
                    }
                  `}
                </style>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                At Mount Literazee School Tikamgarh, we provide quality
                education that shapes bright futures and builds strong character
                in every student.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* add pop */}
              <PopUp/>

              {/* <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Take Virtual Tour
              </Button> */}
            </div>

            {/* <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Teachers</div>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
            </div> */}
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="Images/hero/school.png"
                alt="Students in classroom"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-green-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
