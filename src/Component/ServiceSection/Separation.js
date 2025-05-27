import React from "react";

const Separation = () => (
  <div className="max-w-3xl mx-auto py-12 px-4">
    <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8">
      Separation Anxiety Counseling
    </h1>
    <img
      src="/images/seperation.webp"
      alt="Separation Counseling"
      className="w-full h-full rounded-3xl shadow-2xl mb-10"
      onError={e => (e.target.style.display = "none")}
    />
    <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
      Benefits of Separation Anxiety Counseling
    </h2>
    <p className="text-xl text-gray-700 leading-relaxed mb-8">
      Separation anxiety counseling offers valuable benefits by providing support
      and guidance to individuals, typically children or adolescents, who
      struggle with intense anxiety when separated from caregivers or loved
      ones. Counseling sessions create a safe space for clients to explore
      their fears and emotions, helping them understand the underlying causes
      of their anxiety. Therapists work with clients to develop coping
      strategies and relaxation techniques to manage separation anxiety
      symptoms effectively. Counseling also educates parents or caregivers on
      how to support their child's emotional needs and promote a sense of
      security and trust. By addressing separation anxiety early on, counseling
      can prevent long-term emotional difficulties and empower clients to build
      resilience and confidence in managing separations.
    </p>
    <h3 className="text-2xl font-bold text-center text-blue-600 mb-4">
      Outcomes of Separation Anxiety Counseling
    </h3>
    <p className="text-xl text-gray-700 leading-relaxed mb-4">
      The outcomes of separation anxiety counseling often include reduced anxiety
      symptoms, improved emotional regulation, and enhanced coping skills for
      clients. Counseling helps clients develop a greater sense of security and
      self-confidence when facing separations, reducing the distress associated
      with being apart from loved ones. Clients may also experience improved
      social interactions and academic performance as their anxiety levels
      decrease. For parents or caregivers, counseling provides guidance on
      creating supportive environments and implementing strategies to gradually
      reduce separation anxiety triggers. Ultimately, separation anxiety
      counseling aims to empower clients and families with the tools and
      support needed to manage anxiety effectively, promoting healthier
      relationships and overall well-being.
    </p>
  </div>
);

export default Separation;