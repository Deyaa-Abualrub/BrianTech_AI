import { CheckCircle } from "lucide-react";
import dr_photo from "../assets/dr_photo.png";

export default function HeroSection() {
  return (
    <div
      className="bg-[#101828] text-white p-6 px-10 md:px-20 rounded-none shadow-lg flex flex-col md:flex-row items-center relative"
      style={{ height: "60vh" }}
    >
      <div className="flex-1 space-y-4">
        <h1 className="text-5xl font-bold text-gray-300">
          Brain<span className="text-gray-500">Tech</span> AI
        </h1>
        <p className="text-xl font-semibold">
          Detection and identification of glioma brain tumors
        </p>
        <div className="flex space-x-4">
          <div>
            <p className="text-3xl font-bold">+245K</p>
            <p className="text-sm text-gray-400">new cases worldwide</p>
          </div>
          <div>
            <p className="text-3xl font-bold">100+</p>
            <p className="text-sm text-gray-400">distinct types</p>
          </div>
          <div>
            <p className="text-3xl font-bold">+60G</p>
            <p className="text-sm text-gray-400">Training datasets</p>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src={dr_photo} alt="Doctor" className="h-64" />
      </div>
      <div className="space-y-2 flex-[0.3]">
        <div className="flex items-center space-x-2">
          <CheckCircle className="text-gray-500" />
          <span>Early Detection</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle className="text-gray-500" />
          <span>Reduce Brain Tumor</span>
        </div>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-gray-600 transition">
          Upload Images
        </button>
      </div>
    </div>
  );
}
