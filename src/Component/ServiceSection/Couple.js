import React from "react";

const Couple = () => (
  <div className="max-w-3xl mx-auto py-12 px-4">
    <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-8">
      Couple Counseling
    </h1>
    <img
      src="/images/couple.webp"
      alt="Couple Counseling"
      className="w-full h-full rounded-2xl  mb-10"
      onError={e => (e.target.style.display = "none")}
    />
    <h2 className="text-3xl font-bold text-center text-indigo-600 mb-4">
      Benefits of Couple Counseling
    </h2>
    <p className="text-2xl text-gray-700 leading-relaxed mb-8">
      Couple counseling offers numerous benefits by providing a structured and
      supportive environment for partners to address relationship issues and
      improve communication. It helps couples develop a deeper understanding of
      each other's needs, emotions, and perspectives, fostering empathy and
      mutual respect. Counseling sessions often focus on improving conflict
      resolution skills and teaching effective communication techniques, which
      can strengthen the foundation of the relationship. Moreover, it provides a
      safe space for couples to explore and address underlying issues such as
      trust issues, intimacy concerns, or lifestyle differences. By working
      together with a trained therapist, couples can rebuild trust, enhance
      emotional intimacy, and restore a sense of connection in their
      relationship. Ultimately, couple counseling aims to promote healthier and
      more fulfilling relationships by equipping partners with the tools and
      strategies to overcome challenges and build a strong partnership.
    </p>
    <h3 className="text-3xl font-bold text-center text-indigo-600 mb-4">
      Outcomes of Couple Counseling
    </h3>
    <p className="text-2xl text-gray-700 leading-relaxed mb-4">
      The outcomes of couple counseling can be transformative, leading to
      improved relationship satisfaction and overall well-being for both
      partners. It often results in better communication, where couples learn
      to express their thoughts and feelings more openly and effectively.
      Counseling helps couples identify and address destructive patterns or
      behaviors that may be contributing to relationship conflict, promoting
      healthier interactions and conflict resolution. Moreover, it fosters
      emotional resilience and strengthens the emotional bond between partners,
      enhancing their ability to support each other through life's challenges.
      Over time, couple counseling can lead to increased trust, intimacy, and
      commitment within the relationship, creating a more stable and fulfilling
      partnership. Ultimately, couples who engage in counseling often report
      feeling more satisfied and connected, with the skills and understanding
      needed to sustain a loving and supportive relationship over the long term.
    </p>
  </div>
);

export default Couple;