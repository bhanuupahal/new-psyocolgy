import React from "react";

const Family = () => (
  <div className="max-w-3xl mx-auto py-12 px-4">
    <h1 className="text-4xl font-extrabold text-center text-green-700 mb-8">
      Family Therapy
    </h1>
    <img
      src="/images/family.webp"
      alt="Family Therapy"
      className="w-full h-full rounded-2xl  mb-10"
      onError={e => (e.target.style.display = "none")}
    />
    <h2 className="text-3xl font-bold text-center text-green-600 mb-4">
      Benefits of Family Therapy
    </h2>
    <p className="text-2xl text-gray-700 leading-relaxed mb-8">
      Family therapy offers numerous benefits, focusing on improving communication, understanding, and overall dynamics within a family. It provides a safe space for family members to express their thoughts and feelings, fostering empathy and reducing conflicts. By addressing issues collaboratively, family therapy helps build stronger, healthier relationships, encouraging positive changes and personal growth. Additionally, it equips families with effective problem-solving skills and coping strategies, which can be invaluable in managing future challenges. Overall, family therapy aims to create a supportive environment where each member feels valued and heard, contributing to the well-being of the entire family unit.
    </p>
    <h3 className="text-3xl font-bold text-center text-green-600 mb-4">
      Outcomes of Family Therapy
    </h3>
    <p className="text-2xl text-gray-700 leading-relaxed mb-4">
      The outcomes of family therapy can be transformative, leading to enhanced relationships and improved mental health for all family members. Successful therapy often results in clearer, more open communication, reduced stress and tension, and a better understanding of individual roles and responsibilities within the family. It can also help resolve long-standing conflicts and heal emotional wounds, fostering a more cohesive and supportive family environment. Over time, these positive changes can lead to a more harmonious and resilient family, better equipped to handle life's challenges together. Ultimately, family therapy aims to strengthen the family bond, promoting lasting emotional and psychological well-being.
    </p>
  </div>
);

export default Family;