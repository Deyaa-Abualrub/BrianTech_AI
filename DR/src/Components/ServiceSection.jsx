import native_T1 from "../assets/native_T1.png";
import T1_weighted from "../assets/T1_weighted.png";
import T2_flair from "../assets/T2_flair.png";
import T2_weighted from "../assets/T2_weighted.png";

const Services = () => {
  const scans = [
    {
      title: "T1 Native",
      description:
        "Showing The Structure Of Tissues With Native And Contrast Enhanced Fluid",
      image: native_T1,
    },
    {
      title: "T1 Contrast",
      description:
        "This Scan Uses A Contrast Agent To Highlight The Brain And Tumor",
      image: T1_weighted,
    },
    {
      title: "T2 FLAIR",
      description:
        "Good For Detecting Fluid And Resulting In The Brain Making It Easier To See",
      image: T2_flair,
    },
    {
      title: "T2 Weighted",
      description:
        "Modified T2 Field And Reading In The Brain Helping To Know If Exist Or Frame",
      image: T2_weighted,
    },
    {
      title: "",
      description: "",
      image: "",
    },
  ];

  return (
    <div className="w-full bg-[#FFF0BD] p-8 mb-6 mt-6 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {scans.map((scan) => (
          <div
            key={scan.title}
            className="group relative overflow-hidden rounded-lg bg-[#1f2937] p-4 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
          >
            <h3 className="text-lg font-semibold text-[#FFF0BD] mb-4 text-center">
              {scan.title}
            </h3>

            <div className="aspect-square relative mb-4 overflow-hidden rounded-lg">
              <img
                src={scan.image}
                alt={scan.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <p className="text-sm text-gray-300 mb-4">{scan.description}</p>

            <button className="w-full bg-[#fff0bd] text-[#1f2937] py-2 px-4 rounded-lg transform transition-all duration-300 hover:bg-[#374151] hover:scale-105 active:scale-95">
              Upload Image
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-[#1f2937] rounded-xl">
        <h2 className="text-2xl font-bold text-[#FFF0BD] mb-4">
          Prediction Results
        </h2>
        <div className="h-32 flex items-center justify-center border-2 border-dashed border-gray-500 rounded-lg">
          <p className="text-gray-300">Select an image to analyze</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
