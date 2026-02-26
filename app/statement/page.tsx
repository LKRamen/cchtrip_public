import Image from "next/image";
import globe_image from "../assets/globe_image.jpg";
import favicon_letters from "../assets/favicon_letters.png";


export default function Statement() {
  return (
    <div className="min-h-screen">
      <div className="p-4 sm:p-8 md:p-10">

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-8">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-95"
            style={{ backgroundImage: `url(${globe_image.src})` }}
          />
          <div className="absolute inset-0 bg-[#1e4396]/90" />

          <div className="relative z-10 py-16 px-4 sm:px-6 md:px-8 text-center">
            <div className="relative w-28 h-28 mx-auto mb-8 bg-white rounded-full p-4 shadow-lg flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={favicon_letters}
                  fill
                  className="object-contain"
                  alt="CCH Logo"
                />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Declaration Letter
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="max-w-4xl mx-auto p-8 md:p-12 text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed space-y-5">

            <div>
              <p className="font-bold text-2xl text-[#045eb8] dark:text-blue-400 mb-4">
                What is a Declaration Letter?
              </p>
              <p>
                A declaration letter is a written statement in which the declarant publicly expresses their intent or position in documentary form.
              </p>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-5">
              <p className="font-bold text-xl text-gray-800 dark:text-gray-100 mb-2">
                Same-Person Declaration
              </p>
              <p>
                One of the most common types is the <span className="font-semibold text-[#045eb8] dark:text-blue-400">"Same-Person Declaration."</span> After a Chinese citizen obtains U.S. citizenship — regardless of whether their name has changed — a personally signed and notarized declaration letter can be used to confirm that both names refer to the same individual, satisfying the requirements of relevant institutions.
              </p>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-5">
              <p className="font-bold text-xl text-gray-800 dark:text-gray-100 mb-2">
                Waiver of Inheritance Rights Declaration
              </p>
              <p>
                Another common type is the <span className="font-semibold text-[#045eb8] dark:text-blue-400">"Waiver of Inheritance Rights Declaration."</span> When an applicant is unable to return to China in the short term but needs to complete certain specific matters — such as agreeing to waive their right to inherit a property — this can be accomplished through a formal declaration letter, commonly referred to as a "Waiver of Inheritance Rights Declaration."
              </p>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-5">
              <p className="font-bold text-xl text-gray-800 dark:text-gray-100 mb-2">
                Important Note
              </p>
              <p>
                The content of a declaration letter should be prepared by the declarant based on their own specific circumstances. To ensure the document will be accepted, <span className="font-semibold">we strongly recommend sending the completed declaration to the relevant institution in China for confirmation before proceeding with notarization and authentication.</span>
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}