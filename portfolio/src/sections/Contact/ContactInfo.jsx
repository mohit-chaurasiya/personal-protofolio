import { Mail, MapPin, CircleDot, Trophy } from "lucide-react";
export default function ContactInfo() {
  return (
    <div
      className="
      rounded-4xl
      border
      border-cyan-500/20
      bg-slate-950/50
      p-8
      "
    >
      <h3 className="text-2xl font-bold text-white mb-8">Contact Info</h3>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <Mail className="h-6 w-6 text-cyan-400 mt-1" />
          <div>
            <p className="text-slate-500">Email</p>

            <p className="text-white">mohit.chaurasiya0857@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <MapPin className="h-6 w-6 text-violet-500 mt-1" />
          <div>
            <p className="text-slate-500">Location</p>

            <p className="text-white">Basti, India</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <CircleDot className="h-6 w-6 text-green-400 fill-green-400 mt-1" />
          <div>
            <p className="text-slate-500 text-sm">Availability</p>
            <p className="text-green-400 font-semibold">Open For Internships</p>
          </div>
        </div>
      </div>
    </div>
  );
}
