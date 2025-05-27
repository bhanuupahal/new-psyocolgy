import React from "react";

const Pregancy = () => (
  <div className="max-w-3xl mx-auto py-12 px-4">
    <h1 className="text-4xl font-extrabold text-center text-pink-700 mb-8">
      Pre & Post Pregnancy Counseling
    </h1>
    <img
      src="/images/pregnancy.webp"
      alt="Pregnancy Counseling"
      className="w-full h-full rounded-2xl  mb-10"
      onError={e => (e.target.style.display = "none")}
    />
    <h2 className="text-3xl font-bold text-center text-pink-600 mb-4">
      Benefits of Pre-Pregnancy Counseling
    </h2>
    <p className="text-2xl text-gray-700 leading-relaxed mb-8">
      Pre-pregnancy counseling offers significant benefits by preparing individuals and couples for a healthy conception and pregnancy. It helps identify and address any potential health issues or risk factors early on, enhancing the chances of a successful pregnancy. By optimizing health through lifestyle adjustments and proper nutrition, counseling can improve fertility outcomes and reduce the likelihood of complications during pregnancy. Moreover, it empowers future parents with knowledge about prenatal care and the importance of prenatal vitamins, laying the groundwork for a healthy pregnancy and baby. Beyond physical health, pre-pregnancy counseling provides emotional support, helping individuals navigate the emotional and psychological aspects of starting a family, ensuring they feel confident and prepared for the journey ahead.
    </p>
    <h3 className="text-3xl font-bold text-center text-pink-600 mb-4">
      Outcomes of Post-Pregnancy Counseling
    </h3>
    <p className="text-2xl text-gray-700 leading-relaxed mb-4">
      Post-pregnancy counseling plays a crucial role in supporting new parents during the postpartum period and beyond. It facilitates physical recovery by offering guidance on postpartum care, nutrition, and exercise, promoting optimal healing and well-being for the mother. Counseling also addresses emotional adjustments, such as postpartum depression or anxiety, providing strategies and resources to manage these challenges effectively. Furthermore, it educates parents about newborn care, breastfeeding, and infant development, equipping them with essential skills and knowledge to nurture their baby's health and development. Ultimately, post-pregnancy counseling fosters a supportive environment where parents can openly discuss concerns, receive personalized guidance, and build confidence in their parenting journey, leading to a more positive and fulfilling experience for the entire family.
    </p>
  </div>
);

export default Pregancy;