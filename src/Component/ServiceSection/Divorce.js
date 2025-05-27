import React from "react";

const Divorce = () => (
  <div className="max-w-3xl mx-auto py-12 px-4">
    <h1 className="text-4xl font-extrabold text-center text-red-700 mb-8">
      Divorce Counseling
    </h1>
    <img
      src="/images/divorce.webp"
      alt="Divorce Counseling"
      className="w-full h-full rounded-2xl  mb-10"
      onError={e => (e.target.style.display = "none")}
    />
    <h2 className="text-3xl font-bold text-center text-red-600 mb-4">
      Benefits of Divorce Cases Counseling
    </h2>
    <p className="text-2xl text-gray-700 leading-relaxed mb-8">
      Divorce counseling offers valuable benefits by providing emotional support
      and guidance to individuals or couples navigating the challenges of
      separation or divorce. It helps individuals cope with the emotional
      upheaval and grief associated with the end of a significant relationship.
      Counseling sessions provide a safe space for clients to express their
      feelings, fears, and concerns without judgment, facilitating emotional
      healing and resilience. Moreover, divorce counseling helps clients
      understand the reasons behind the relationship breakdown, fostering
      personal growth and self-awareness. It also equips individuals with coping
      strategies and practical tools to manage stress, anxiety, and uncertainty
      during the divorce process. Additionally, for couples seeking divorce,
      counseling can facilitate healthier communication, cooperation, and
      negotiation, which is essential for resolving legal and co-parenting issues
      amicably.
    </p>
    <h3 className="text-3xl font-bold text-center text-red-600 mb-4">
      Outcomes of Divorce Cases Counseling
    </h3>
    <p className="text-2xl text-gray-700 leading-relaxed mb-4">
      The outcomes of divorce counseling can vary depending on the
      circumstances, but it often leads to emotional healing, acceptance, and a
      sense of closure for individuals. Counseling helps clients navigate the
      stages of grief associated with divorce, moving towards a place of
      acceptance and readiness to embrace new beginnings. It also supports
      clients in establishing healthy boundaries and managing co-parenting
      responsibilities effectively, promoting a stable and supportive environment
      for children, if involved. Moreover, divorce counseling can help
      individuals build resilience and self-confidence as they transition to a
      new chapter of their lives. For couples, counseling can facilitate a more
      amicable and cooperative separation process, reducing conflict and
      fostering a more peaceful resolution. Ultimately, divorce counseling aims
      to empower individuals to rebuild their lives with clarity, confidence,
      and emotional well-being after the dissolution of their marriage.
    </p>
  </div>
);

export default Divorce;