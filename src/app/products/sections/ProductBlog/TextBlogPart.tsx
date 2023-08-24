import React from "react";
import style from "./style.module.css";
const prevu = [
  "According to World Health Organization (WHO), cervical cancer is one of the most serious threats to women’s lives. By various estimates, there are more than a million women suffering from this malignant disease worldwide. In 2020 alone, cervical cancer took the lives of more than 342,000 women.",
  "In 2020, WHO approved the Global Strategy for cervical cancer elimination. The main goals of the program, called “90-70-90”, will completely save humanity from the problem of cervical cancer within the next 100 years. This is a 90% vaccination rate of the human papillomavirus (HPV) for girls under the age of 15 (before the sexual activity begins); accessibility for at least 70% of women of reproductive age to highly effective methods of screening (diagnosis) of cervical cancer and, finally, providing treatment for at least 90% of women diagnosed with cervical disease. [1]",
  "The main aim that we set ourselves when writing this article is to once again remind the available and recommended methods for screening cervical pathology, and share our best practices in this direction.",
];

const problem = [
  {
    id: 1,
    title: "The Problem",
  },
  {
    id: 2,
    text: [
      "The generally recognized types of cervical screening, i.e., methods for the primary diagnosis of cervical pathology are visual inspection with acetic acid (VIA); cytology (PAP smear test), and HPV testing. Moreover, in all cases where a cervical pathology is detected during a screening study, a confirmation of the clinical diagnosis by colposcopic examination and/or taking a targeted cervical biopsy is required. That is why, in achieving the targets set by WHO, the solution of two main tasks at the national and global levels is of key importance. Firstly, this is a solution to the problem of accessibility of wide female population groups to effective methods for diagnosing cervical pathology. Secondly, the professional training level of specialists conducting relevant examinations.",
      "From our point of view, the problems that women in the target group have with the opportunity to gain access to cervical screening are primarily due to the fact that the vast majority of women with cervical cancer, according to the WHO statistics, lived (and live now!) in low- and middle-income countries. So about 90% of the total number of cases of cervical cancer are registered in the countries of Central and South America, East Africa, South, and Southeast Asia, and the Western Pacific. [2]",
      "The second most difficult problem to implement is the maximum objectification of the chosen diagnostic method.",
      "In this regard, in the area of our interest lies the objectification of a visual method for diagnosing cervix pathology, such as a colposcopic examination. We agree with the thesis that during the period of maximum objectification of the processed data, colposcopy is a dying art but it remains an integral part of measures to prevent cervical cancer from ever developing. So, in the United States, colposcopy continues to be widely used in various medical settings, including academic and non-academic institutions, primary health care settings in urban and rural areas, and by the way, continues to be funded by both private and public resources [3]. The study itself is usually examined by experienced specialists (65% physicians, 36% advanced practice clinicians (APC), i.e., nurse practitioners and paramedics). [4]",
      "Nevertheless, colposcopy is a rather subjective diagnostic method that requires training and constant practice of using the method to obtain the appropriate competencies. Thus, according to the scientific literature, the frequency of false-negative results (missed squamous intraepithelial / high-grade malignancy invasive cancer) during colposcopy ranges from 13% to 69%. [5, 6]",
      "That is why attempts are being made to improve the diagnostic properties of colposcopy by developing new additional technologies that use the biochemical and morphological changes present in dysplastic (atypical) cells of the cervix.",
      "There are three main areas of modern developments: fluorescence and reflectance spectroscopy, dynamic spectral imaging, and optical coherence tomography. In spite of that, it is worth emphasizing that only one of them, namely dynamic spectral imaging, has received FDA approval and is sold in the United States.",
    ],
  },
];

export default function TextBlogPart() {
  return (
    <div className={style.text__box}>
      <div className={style.prevu}>
        {prevu.map((item, index) => {
          return (
            <p className={style.text} key={index}>
              {item}
            </p>
          );
        })}
      </div>
      <div>
        {problem.map((item) => {
          return (
            <>
              <h2 className={style.problem__title} key={item.id}>
                {item.title}
              </h2>
              <div className={style.problem__text}>
                {item.text?.map((text, index) => {
                  return <p key={index}>{text}</p>;
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
