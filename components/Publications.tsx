import Heading1 from "./Heading1";
import type publicationInfo from "../interfaces/publicationInfo";
import PublicationItem from "./Publication/PubItem";

const publications: publicationInfo[] = [
  {
    title:
      "An Intensity and Phase Stacked Analysis of Phase-OTDR System using Deep Transfer Learning and Recurrent Neural Networks",
    authors: [
      { name: "Ceyhun Efe Kayan" },
      { name: "Kivilcim Yuksel Aldogan" },
      { name: "Abdurrahman Gumus" },
    ],
    year: 2022,
    links: [{ name: "arxiv", href: "https://arxiv.org/abs/2206.12484" }],
    abstract:
      "Distributed acoustic sensors (DAS) are effective apparatus which are widely used in many application areas for recording signals of various events with very high spatial resolution along the optical fiber. To detect and recognize the recorded events properly, advanced signal processing algorithms with high computational demands are crucial. Convolutional neural networks are highly capable tools for extracting spatial information and very suitable for event recognition applications in DAS. Long-short term memory (LSTM) is an effective instrument for processing sequential data. In this study, we proposed a multi-input multi-output, two stage feature extraction methodology that combines the capabilities of these neural network architectures with transfer learning to classify vibrations applied to an optical fiber by a piezo transducer. First, we extracted the differential amplitude and phase information from the Phase-OTDR recordings and stored them in a temporal-spatial data matrix. Then, we used a state-of-the-art pre-trained CNN without dense layers as a feature extractor in the first stage. In the second stage, we used LSTMs to further analyze the features extracted by the CNN. Finally, we used a dense layer to classify the extracted features. To observe the effect of the utilized CNN architecture, we tested our model with five state-of-the art pre-trained models (VGG-16, ResNet-50, DenseNet-121, MobileNet and Inception-v3). The results show that using the VGG-16 architecture in our framework manages to obtain 100% classification accuracy in 50 trainings and got the best results on our Phase-OTDR dataset. Outcomes of this study indicate that the pre-trained CNNs combined with LSTM are very suitable for the analysis of differential amplitude and phase information, represented in a temporal spatial data matrix which is promising for event recognition operations in DAS applications.",
  },
];

const Publications = () => {
  return (
    <section>
      <Heading1>Publications</Heading1>
      <ul className="mb-8 flex flex-col items-center px-4">
        <li className="max-w-lg rounded-lg bg-slate-700 p-3">
          <PublicationItem
            title={publications[0].title}
            year={publications[0].year}
            links={publications[0].links}
            authors={publications[0].authors}
            abstract={publications[0].abstract}
          />
        </li>
      </ul>
    </section>
  );
};

export default Publications;
