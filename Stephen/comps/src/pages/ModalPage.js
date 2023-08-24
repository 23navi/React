import Modal from "../components/Modal";
import { useState } from "react";
import Button from "../components/Button";

export default function ModalPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };

  const actionBar = (
    <Button onClick={handleClose} primary>
      Agree
    </Button>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>I agree to the terms and conditions above.</p>
    </Modal>
  );

  return (
    <div>
      <p>
        Surat (Gujarati: [suɾət]) is a city in the western Indian state of
        Gujarat. The word Surat literally means face in Gujarati and Hindi.
        Located on the banks of the river Tapti near its confluence with the
        Arabian Sea, it used to be a large seaport. It is now the commercial and
        economic center in South Gujarat, and one of the largest urban areas of
        western India. It has well-established diamond and textile industry, and
        is a major supply centre for apparels and accessories. About 90% of the
        world's diamonds supply are cut and polished in the city.[13][14][15] It
        is the second largest city in Gujarat after Ahmedabad and the eighth
        largest city by population and ninth largest urban agglomeration in
        India. It is the administrative capital of the Surat district. In recent
        years, Surat has been in news for making a Guinness World Record for the
        largest gathering for a yoga session at one place where 1.53 lakh people
        joined the event on International Yoga Day.[1] The city is located 284
        km (176 mi) south of the state capital, Gandhinagar; 265 km (165 mi)
        south of Ahmedabad; and 289 km (180 mi) north of Mumbai. The city centre
        is located on the Tapti River, close to Arabian Sea.[16] Surat will be
        the world's fastest growing city from 2019 to 2035, according to a study
        conducted by Economic Times.[17] The city registered an annualised GDP
        growth rate of 11.5% over the seven fiscal years between 2001 and
        2008.[18] Surat was awarded "best city" by the Annual Survey of India's
        City-Systems (ASICS) in 2013.[19] Surat is selected as the first smart
        IT city in India which is being constituted by the Microsoft CityNext
        Initiative tied up with IT services majors Tata Consultancy Services and
        Wipro.[20] The city has 2.97 million internet users, about 65% of total
        population.[21] Surat was selected in 2015 for an IBM Smarter Cities
        Challenge grant.[22][23] Surat has been selected as one of twenty Indian
        cities to be developed as a smart city under PM Narendra Modi's flagship
        Smart Cities Mission.[24] Surat is listed as the second cleanest city of
        India as of 21 August 2020 according to the Swachh Survekshan 2020 on 20
        August.[25][26] It suffered a major pipeline fire which caused some
        damage.[27] Surat, famous for its diamond cutting and polishing, is
        known as the Diamond City of India.[1] The city has various engineering
        plants like Essar, Larsen and Toubro and RIL. Surat won the Netexplo
        Smart Cities Award 2019 with UNESCO in the resilience category. Surat's
        mayor will receive the award at the UNESCO House in Paris, France in
        March next year.[28]
      </p>
      <Button primary onClick={handleClick}>
        Modal
      </Button>
      {modalOpen && modal}
    </div>
  );
}
